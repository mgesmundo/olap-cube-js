import Dimension from "./Dimension.js";

export default class Schema {
    constructor(schema){
        this.schema = new Dimension(schema);
        if (schema.dependency && schema.dependency.length === 1){
            throw Error('такая схема не поддерживается пока что') //todo переписать getDependencyNames
        }
        this._dimensionsResolutionOrder = this.getDimensionsResolutionOrder();
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
    /**
     * Take an ordered list of dimensions by dependency resolution
     * @return {Dimension[]}
     * */
    getDimensionsResolutionOrder(){
        if (this._dimensionsResolutionOrder){
            return this._dimensionsResolutionOrder;
        }
        const order = [];
        if ( this.schema.dependency ){
            const reqursively = dependency => {
                dependency.forEach(schema => {
                    if (schema.dependency){
                        reqursively(schema.dependency)
                    }
                    order.push(schema);
                })
            };
            reqursively(this.schema.dependency);
        }
        order.push(this.schema);
        this._dimensionsResolutionOrder = order;
        return order;
    }
    /**
     * Get a dimension by name
     * @return {Dimension}
     * @throw
     * */
    getByName(name){
        const find = this._dimensionsResolutionOrder.find(schema => {
            return schema.name === name;
        });
        if (!find){
            throw 'schema for name: \"${name}\" not found'
        }
        return find;
    }
    /**
     * Get a dimension by its dependency
     * @return {string|undefined}
     * */
    getByDependency(name){
        return this._dimensionsResolutionOrder.find( schema => {
            return schema.dependency && schema.dependency.find( schema => schema.name === name ) ? schema : false;
        });
    }
    /**
     * Get list of dimensions names
     * @return {string[]}
     * */
    getNames(){
        return this._dimensionsResolutionOrder.map( schema => schema.name );
    }
    /**
     * Get a list of all dimension names related to the selected dimension by name
     * @return {string[]}
     * */
    getDependenciesNames(name){
        let dependencies = [this.getMeasure().name];
        let schema = this.getByDependency(name);
        if (schema.dependency){
            dependencies = dependencies.concat( schema.dependency.map( schema => schema.name ) )
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
     * @return {Dimension[]}
     * */
    getFinal(){
        return this.schema.dependency;
    }
    /**
     *
     * */
    getDependencyNames(dependency){
        //todo ref
        const map = dependency.map(dependency => dependency.name);
        return map.length === 1 ? map[0] : map;
    }
}