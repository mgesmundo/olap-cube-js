import TreeTest from '../src/Tree.spec.js'
import FactTest from '../src/Fact.spec.js'
import FactTableTest from '../src/FactTable.spec.js'
import validateFactDataTest from '../src/FactTable.prototype.validateFactData.js'
import EmptyCellTest from '../src/EmptyCell.spec.js'
import DimensionTableTest from '../src/DimensionTable.spec.js'
import DimensionTreeTest from '../src/DimensionTree.spec.js'
import SnowflakeBuilderTest from '../src/SnowflakeBuilder.spec.js'
import CubeTest from '../src/Cube.spec.js'
import addFactsTest from '../src/Cube.prototype.addFacts.spec.js'
import removeFactsTest from '../src/Cube.prototype.removeFacts.spec.js'
import getCellsTest from '../src/Cube.prototype.getCells.spec.js'
import getFactsTest from '../src/Cube.prototype.getFacts.spec.js'
import getDimensionMembersTest from '../src/Cube.prototype.getDimensionMembers.spec.js'
import fillEmptyCellsTest from '../src/Cube.prototype.fillEmptyCells.spec.js'
import addDimensionMemberTest from '../src/Cube.prototype.addDimensionMember.spec.js'
import removeDimensionMemberTest from '../src/Cube.prototype.removeDimensionMember.spec.js'
import addDimensionHierarchyTest from '../src/Cube.prototype.addDimensionHierarchy.spec.js'
import removeDimensionHierarchyTest from '../src/Cube.prototype.removeDimensionHierarchy.spec.js'
import drillUpAndDownTest from '../src/Cube.prototype.drillUpAndDown.spec.js'
import sliceAndDiceTest from '../src/Cube.prototype.sliceAndDice.spec.js'
import createEmptyCells from '../src/Cube.prototype.createEmptyCells.spec.js'
import addEmptyCellsTest from '../src/Cube.prototype.addEmptyCells.spec.js'
import getEmptyCellsTest from '../src/Cube.prototype.getEmptyCells.spec.js'

import otherPropsTest from '../src/DimensionTable.otherProps.spec.js'
import foreignKeyTest from '../src/DimensionTable.foreignKey.spec.js'
import primaryKeyTest from '../src/DimensionTable.primaryKey.spec.js'
import defaultMemberOptionsTest from '../src/DimensionTable.defaultMemberOptions.spec.js'

import primaryKeyFactTableTest from '../src/FactTable.primaryKey.spec.js'
import defaultFactOptionsFactTableTest from '../src/FactTable.defaultFactOptions.spec.js'
import readmeTest from '../src/readme.spec.js'
import DimensionHierarchyTest from '../src/DimensionHierarchy.spec.js'

describe('Tree', () => {
	TreeTest();
});

describe('Fact', () => {
	FactTest();
});

describe('FactTable', () => {
	FactTableTest();
	describe('.prototype.validateFactDataTest', validateFactDataTest);
});

describe('EmptyCell', () => {
	EmptyCellTest();
});

describe('DimensionTable', () => {
	DimensionTableTest();
});

describe('DimensionTree', () => {
	DimensionTreeTest();
});

describe('SnowflakeBuilder', () => {
	SnowflakeBuilderTest();
});

describe('Cube', () => {
	CubeTest();
	describe('.prototype.addFacts', addFactsTest);
	describe('.prototype.removeFacts', removeFactsTest);
	describe('.prototype.getCells', getCellsTest);
	describe('.prototype.getFacts', getFactsTest);
	describe('.prototype.getDimensionMembers', getDimensionMembersTest);
	describe('.prototype.fillEmptyCells', fillEmptyCellsTest);
	describe('.prototype.addDimensionMember', addDimensionMemberTest);
	describe('.prototype.removeDimensionMember', removeDimensionMemberTest);
	describe('.prototype.addDimensionHierarchy', addDimensionHierarchyTest);
	describe('.prototype.removeDimensionHierarchy', removeDimensionHierarchyTest);
	describe('.prototype.drillUpAndDown', drillUpAndDownTest);
	describe('.prototype.sliceAndDice', sliceAndDiceTest);
	describe('.prototype.createEmptyCells', createEmptyCells);
	describe('.prototype.addEmptyCells', addEmptyCellsTest);
	describe('.prototype.getEmptyCells', getEmptyCellsTest);
});

describe('DimensionTable', () => {
	describe('.otherProps', otherPropsTest);
	describe('.primaryKey', primaryKeyTest);
	describe('.foreignKey', foreignKeyTest);
	describe('.defaultMemberOptions', defaultMemberOptionsTest);
});

describe('FactTable', () => {
	describe('.primaryKey', primaryKeyFactTableTest);
	describe('.defaultFactOptions', defaultFactOptionsFactTableTest);
});

describe('DimensionHierarchy', () => {
	DimensionHierarchyTest();
});

describe('readme', () => {
	readmeTest();
});