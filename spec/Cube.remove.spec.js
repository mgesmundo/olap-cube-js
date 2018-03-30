import Cube from '../src/Cube.js';
import {isEqual, jsonParseStringify} from './helpers/helpers.js'

describe('[ Cube ][ remove ]', () => {
	const factTable = [
		{ id: 1, xxx: 0.49, xx: 0.5, x: 0, y: 0, z: 0, is: true },
		{ id: 2, xxx: 1.18, xx: 1.2, x: 1, y: 0, z: 1, is: true },
		{ id: 3, xxx: 1.12, xx: 1.1, x: 1, y: 1, z: 0, is: true },
	];
	const schema = {
		dimension: 'is',
		keyProps: ['is'],
		dependency: [
			{
				dimension: 'xxx',
				keyProps: ['xxx'],
				dependency: [{
					dimension: 'xx',
					keyProps: ['xx'],
					dependency: [{
						dimension: 'x',
						keyProps: ['x']
					}]
				}]
			},
			{
				dimension: 'y',
				keyProps: ['y']
			},
			{
				dimension: 'z',
				keyProps: ['z']
			}
		]
	};
	let debug;
	it('it should remove member and change measure length', () => {
		let cube = new Cube(factTable, schema);
		expect((debug=cube.getDimensionMembers('is')).length).toBe(3);
		expect((debug=cube.getDimensionMembers('z')).length).toBe(2);

		const memberForDelete = cube.getDimensionMembers('z')[0];
		expect(isEqual(jsonParseStringify(memberForDelete), {id: 1, z: 0} ));
		cube.removeDimensionMember('z', memberForDelete);
		expect((debug=cube.getDimensionMembers('z')).length).toBe(1);
		expect((debug=cube.getDimensionMembers('is')).length).toBe(1);
	});
	it('it should remove target member and his own dependencies', () => {
		let cube = new Cube(factTable, schema);
		expect((debug=cube.getDimensionMembers('is')).length).toBe(3);
		expect((debug=cube.getDimensionMembers('x')).length).toBe(2);
		expect((debug=cube.getDimensionMembers('xx')).length).toBe(3);
		expect((debug=cube.getDimensionMembers('xxx')).length).toBe(3);
		const memberForDelete = cube.getDimensionMembers('x')[1];
		expect(isEqual(jsonParseStringify(memberForDelete), {id: 1, x: 1} ));
		expect(memberForDelete).toBeDefined();
		cube.removeDimensionMember('x', memberForDelete);
		expect((debug=cube.getDimensionMembers('is')).length).toBe(1);
		expect((debug=cube.getDimensionMembers('x')).length).toBe(1);
		expect((debug=cube.getDimensionMembers('xx')).length).toBe(1);
		expect((debug=cube.getDimensionMembers('xxx')).length).toBe(1);
	})
})