import SchemaDimension from "./SchemaDimension.js";
import DimensionProperties from "./DimensionProperties.js";
import Hierarchy from "./Hierarchy.js";

export class DimensionException extends Error {
    constructor(dimension){
        super(`For the name "${dimension}" the dimension is already set`)
    }
}

/**
 * It defines the relationship of generalization and specialization (roll-up/drill-down)
 * @throws {DimensionException}
 * */
export class Schema {
    constructor(schema){
        this.schema = new SchemaDimension(schema);
        if (schema.dependency && schema.dependency.length === 1){
            throw Error('такая схема не поддерживается пока что') //todo переписать getDependencyNames
        }
        this._dimensionsResolutionOrder = [];
        this._dimensionProperties = {};
        this._schemaDimension = {};
        this.hierarchy = new Hierarchy();

        this._recursivelyWalk(this.schema, schema => {
            const {dimension} = schema;
            if ( !this._schemaDimension[dimension] ){
                this._addSchemaDimension(schema);
                this._addSchemaProps(schema);
                this._addSchemaRelations(schema);
            } else {
                throw new DimensionException(dimension)
            }
        });

        const order = this.hierarchy.getResolutionOrder();
        this._dimensionsResolutionOrder = order.map( dimension => this._schemaDimension[dimension] )
    }
    createIterator(){
        let i = 0;
        let dimension = this.getDimensionsResolutionOrder();

        return {
            next: ()=>{
                let done = (i >= dimension.length);
                let value = !done ? dimension[i++] : void 0;
                return {
                    done,
                    value
                }
            }
        }
    }
    _addSchemaProps(schema){
        const {keyProps, otherProps, dimension} = schema;
        this._dimensionProperties[dimension] = new DimensionProperties({keyProps, otherProps})
    }
    _addSchemaRelations(schema){
        let {dimension, dependency} = schema;
        // todo: make new default for dependency = []
        if (!dependency){
            dependency = []
        }
        this.hierarchy.addRelation(dimension, dependency && dependency.map( schema => schema.dimension ))
    }
    _addSchemaDimension(schema){
        const {dimension} = schema;
        if ( !this._schemaDimension[dimension] ){
            this._schemaDimension[dimension] = schema;
        } else {
            throw new DimensionException(dimension)
        }
    }
    /**
     * @param {string} dimension
     * @return {DimensionProperties|undefined}
     * */
    getDimensionProperties(dimension){
        return this._dimensionProperties[dimension]
    }
    /**
     * Take an ordered list of dimensions by dependency resolution
     * */
    getDimensionsResolutionOrder(){
        return this._dimensionsResolutionOrder;
    }
    _addSchemaResolutionOrder(schema){
        this._dimensionsResolutionOrder.push(schema);
    }
    /**
     * Recursively walk
     * */
    _recursivelyWalk(schema, handler){
        const {dependency} = schema;

        handler(schema);

        if (dependency){
            dependency.forEach(schema => {
                this._recursivelyWalk(schema, handler);
            })
        }
    }
    /**
     * Get a dimension by its dependency
     * @return {string|undefined}
     * */
    getByDependency(dimension){
        return this._dimensionsResolutionOrder.find( schema => {
            return schema.dependency && schema.dependency.find( schema => schema.dimension === dimension ) ? schema : false;
        });
    }
    /**
     * Get list of dimensions names
     * @return {string[]}
     * */
    getNames(){
        return this._dimensionsResolutionOrder.map( schema => schema.dimension );
    }
    /**
     * Get a list of all dimension related to the selected dimension
     * @return {string[]}
     * */
    getDependenciesNames(dimension){
        let dependencies = [this.getMeasure().dimension];
        let schema = this.getByDependency(dimension);
        if (schema.dependency){
            dependencies = dependencies.concat( schema.dependency.map( schema => schema.dimension ) )
        }
        return dependencies;
    }
    /**
     * take a point measure in the dimension space
     * */
    getMeasure(){
        return this.schema;
    }
    /**
     *
     * */
    getColumns(){
        const columns = this.schema.dependency.map(schema => {
            while (schema.dependency){
                if (schema.dependency.length > 1){
                    throw "new case with mix of deps"
                }
                schema = schema.dependency[0]
            }
            return schema;
        });
        return columns;
    }
    /**
     * List of all final dimensions forming count of measure
     * @return {SchemaDimension[]}
     * */
    getFinal(){
        return this.schema.dependency;
    }
    /**
     *
     * */
    getDependencyNames(dependency){
        if (dependency){
            const dimensions = dependency.map(dependency => dependency.dimension);
            return dimensions.length === 1 ? dimensions[0] : dimensions;
        }
    }
    isRoot(schemaDimension){
        return schemaDimension === this.schema;
    }
}