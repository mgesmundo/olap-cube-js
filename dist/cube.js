/*!
 * Copyright © 2018 Orlov Leonid. All rights reserved. Contacts: <feonitu@yandex.ru>
 * 
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Cube"] = factory();
	else
		root["Cube"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var ENTITY_ID = exports.ENTITY_ID = 'id';

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _const = __webpack_require__(0);

var _Fact2 = __webpack_require__(4);

var _Fact3 = _interopRequireDefault(_Fact2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Cell. A piece of data obtained by defining one element
 * in each dimension of a multidimensional array.
 * The cells of the hypercube can be empty or full.
 * */
var Cell = function (_Fact) {
	_inherits(Cell, _Fact);

	function Cell() {
		_classCallCheck(this, Cell);

		return _possibleConstructorReturn(this, (Cell.__proto__ || Object.getPrototypeOf(Cell)).apply(this, arguments));
	}

	_createClass(Cell, [{
		key: 'deleteProps',
		value: function deleteProps(props) {
			var _this2 = this;

			props.forEach(function (prop) {
				if (prop !== _const.ENTITY_ID) {
					delete _this2[prop];
				}
			});
		}
	}]);

	return Cell;
}(_Fact3.default);

exports.default = Cell;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _const = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Element of dimension. Serving to determine the position and description of the data element
 * */
var Member = function Member(id, props, data) {
	var _this = this;

	_classCallCheck(this, Member);

	this[_const.ENTITY_ID] = id;

	props.forEach(function (prop) {
		// исключить идентификатор самой сущности
		if (prop !== _const.ENTITY_ID) {
			_this[prop] = data[prop];
		}
	});
};

exports.default = Member;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * The composed aggregate object, members grouped by dimension names
 * */
var Space = function () {
	function Space(options) {
		var _this = this;

		_classCallCheck(this, Space);

		if (options) {
			this.getDimensionList.call(options).forEach(function (dimension) {
				_this.setMemberList(dimension, options[dimension]);
			});
		}
	}
	/**
  * @param {string} dimension
  * */


	_createClass(Space, [{
		key: "getMemberList",
		value: function getMemberList(dimension) {
			return this[dimension];
		}
		/**
   * @param {string} dimension
   * @param {MemberList|object[]} memberList
   * */

	}, {
		key: "setMemberList",
		value: function setMemberList(dimension, memberList) {
			this[dimension] = memberList;
		}
		/**
   * @return {string[]}
   * */

	}, {
		key: "getDimensionList",
		value: function getDimensionList() {
			return Object.keys(this);
		}
	}]);

	return Space;
}();

exports.default = Space;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _const = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DIVIDER = ',';

var Fact = function () {
	function Fact(data) {
		_classCallCheck(this, Fact);

		Object.assign(this, data);
		if (!this[_const.ENTITY_ID]) {
			throw "data must have id parameter";
		}
	}

	_createClass(Fact, [{
		key: "createKeyFromProps",
		value: function createKeyFromProps(props) {
			var _this = this;

			return props.map(function (prop) {
				return _this[prop];
			}).join(DIVIDER);
		}
	}]);

	return Fact;
}();

exports.default = Fact;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Dimension attributes
 * */
var Dimension = function Dimension(_ref) {
	var dimension = _ref.dimension,
	    keyProps = _ref.keyProps,
	    _ref$otherProps = _ref.otherProps,
	    otherProps = _ref$otherProps === undefined ? [] : _ref$otherProps;

	_classCallCheck(this, Dimension);

	if (!dimension || !keyProps || !keyProps.length) {
		throw Error("Bad dimension description at schema, params 'dimension' and 'keyProps' is required");
	}

	/** Name of the dimension */
	this.dimension = dimension;

	/** List of key names properties of the entity belonging to the current dimension */
	this.keyProps = keyProps;

	/** List of additional names properties of the entity belonging to the current dimension */
	this.otherProps = otherProps;
};

exports.default = Dimension;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _Fact = __webpack_require__(4);

var _Fact2 = _interopRequireDefault(_Fact);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _extendableBuiltin(cls) {
	function ExtendableBuiltin() {
		var instance = Reflect.construct(cls, Array.from(arguments));
		Object.setPrototypeOf(instance, Object.getPrototypeOf(this));
		return instance;
	}

	ExtendableBuiltin.prototype = Object.create(cls.prototype, {
		constructor: {
			value: cls,
			enumerable: false,
			writable: true,
			configurable: true
		}
	});

	if (Object.setPrototypeOf) {
		Object.setPrototypeOf(ExtendableBuiltin, cls);
	} else {
		ExtendableBuiltin.__proto__ = cls;
	}

	return ExtendableBuiltin;
}

var FactTable = function (_extendableBuiltin2) {
	_inherits(FactTable, _extendableBuiltin2);

	function FactTable(array) {
		_classCallCheck(this, FactTable);

		var _this = _possibleConstructorReturn(this, (FactTable.__proto__ || Object.getPrototypeOf(FactTable)).call(this));

		if (Array.isArray(array)) {
			Object.assign(_this, array.map(function (item) {
				return new _Fact2.default(item);
			}));
		}
		return _this;
	}

	return FactTable;
}(_extendableBuiltin(Array));

exports.default = FactTable;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _MemberList = __webpack_require__(15);

var _MemberList2 = _interopRequireDefault(_MemberList);

var _Member = __webpack_require__(2);

var _Member2 = _interopRequireDefault(_Member);

var _const = __webpack_require__(0);

var _Space = __webpack_require__(3);

var _Space2 = _interopRequireDefault(_Space);

var _CellTable = __webpack_require__(16);

var _CellTable2 = _interopRequireDefault(_CellTable);

var _FactTable = __webpack_require__(6);

var _FactTable2 = _interopRequireDefault(_FactTable);

var _DimensionTable = __webpack_require__(17);

var _DimensionTable2 = _interopRequireDefault(_DimensionTable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * The main task is to parse the data array into tables
 *
 * is a special case of snowflake schema
 * where every dimension is represented by one table even if the dimensions has multiple levels
 * */
var Star = function () {
	/**
  * @param {object[]} facts - Data array to the analysis of values for dimension
  * @param {object[]} dimensionTables
  * */
	function Star(facts, dimensionTables) {
		_classCallCheck(this, Star);

		var factTable = new _FactTable2.default(facts);
		var dimensionTableList = dimensionTables.map(function (dimensionTable) {
			return new _DimensionTable2.default(dimensionTable);
		});

		var _normalize = this.normalize(factTable, dimensionTableList),
		    space = _normalize.space,
		    cellTable = _normalize.cellTable;

		this.space = space;
		this.cellTable = cellTable;

		Object.defineProperty(this, 'dimensionTableList', { value: dimensionTableList });
	}

	_createClass(Star, [{
		key: "normalize",
		value: function normalize(factTable, dimensionTableList) {
			var _this = this;

			var space = new _Space2.default();
			var cellTable = new _CellTable2.default(factTable);

			dimensionTableList.forEach(function (table, index) {
				var dimension = table.dimension,
				    keyProps = table.keyProps,
				    otherProps = table.otherProps,
				    dependencyNames = table.dependencyNames;

				var isRoot = index === dimensionTableList.length - 1;

				var memberList = void 0;
				var args = [factTable, dimension, keyProps, otherProps, cellTable];

				if (!dependencyNames.length) {
					memberList = _this._makeMemberList.apply(_this, args);
				} else {

					var entitiesParts = [];

					// todo заменить на один метод
					if (!isRoot) {
						entitiesParts = _this._mapFilter(dependencyNames, cellTable, space.getMemberList(dependencyNames[0]));
						memberList = _this._makeMemberListDependency.apply(_this, args.concat([space, dependencyNames, entitiesParts]));
					} else {
						entitiesParts = _this._mapFilterRoot(dependencyNames, cellTable, space);
						memberList = _this._makeMemberListDependency.apply(_this, args.concat([space, dependencyNames, entitiesParts]));
					}
				}

				space.setMemberList(dimension, memberList);
			});

			return { space: space, cellTable: cellTable };
		}
	}, {
		key: "denormalize",
		value: function denormalize() {
			var _this2 = this;

			var cells = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.cellTable;
			var dimensionTableList = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.dimensionTableList;

			var factTable = new _FactTable2.default();
			cells.forEach(function (cell) {
				factTable.push(Object.assign({}, cell));
			});

			factTable.forEach(function (fact) {
				var handleDimension = function handleDimension(dimensionSchema) {
					var idAttribute = Star.genericId(dimensionSchema.dimension);
					var idValue = fact[idAttribute];
					var member = _this2.space.getMemberList(dimensionSchema.dimension).find(function (member) {
						return member[_const.ENTITY_ID] === idValue;
					});
					var memberCopy = Object.assign({}, member);
					delete memberCopy[_const.ENTITY_ID];
					delete fact[idAttribute];
					Object.assign(fact, memberCopy);
				};

				dimensionTableList.forEach(function (dimensionTable) {
					handleDimension(dimensionTable);
				});
			});

			return factTable;
		}

		/**
   * A way to create a name for a property in which a unique identifier will be stored
   * */

	}, {
		key: "_mapFilter",
		value: function _mapFilter(dimension, cellTable, memberList) {
			var idAttribute = Star.genericId(dimension);
			return memberList.map(function (member) {
				return cellTable.filter(function (cell) {
					return cell[idAttribute] == member[_const.ENTITY_ID];
				});
			});
		}
	}, {
		key: "_mapFilterRoot",
		value: function _mapFilterRoot(dimensions, cellTable, space) {
			var _this3 = this;

			var cellTables = [cellTable];
			dimensions.forEach(function (dimension) {
				var newParts = [];
				cellTables.forEach(function (cellTable) {
					var cellTables = _this3._mapFilter(dimension, cellTable, space.getMemberList(dimension));
					cellTables.forEach(function (cellTable) {
						newParts.push(cellTable);
					});
				});
				cellTables = newParts;
			});
			return cellTables;
		}

		/**
   * The method of analyzing the data array and generating new dimension values
   *
   * @param {object[]} factTable - Data array to the analysis of values for dimension
   * @param {number} startFrom
   * @param {string} dimension - The dimension for which members will be created
   * @param {string[]} keyProps - Names of properties whose values will be used to generate a key that will determine the uniqueness of the new member for dimension
   * @param {string[]} otherProps - Names of properties whose values will be appended to the dimension member along with the key properties
   * @param {CellTable} cellTable
   * @return {MemberList}
   * @private
   * */

	}, {
		key: "_makeMemberList",
		value: function _makeMemberList(factTable, dimension, keyProps, otherProps, cellTable) {
			var startFrom = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;

			// соотношение созданных id к ключам
			var cache = {};
			var memberList = new _MemberList2.default();
			// полный список свойств подлежащих стриранию из натуральной формы и записи в подсущности
			var totalProps = [].concat(keyProps, otherProps);

			// создания групп по уникальным ключам
			factTable.forEach(function (fact) {

				// собрать ключ на основе ключевых значений
				var surrogateKey = fact.createKeyFromProps(keyProps);

				// если ключ уникальный создается подсущность и назначается ей присваивается уникальный id (уникальность достигается простым счетчиком)
				if (!(surrogateKey in cache)) {
					var _id = cache[surrogateKey] = ++startFrom;
					var member = new _Member2.default(_id, totalProps, fact);
					memberList.push(member);
				}

				var id = fact[_const.ENTITY_ID];

				// удалаять данные из нормальной формы
				var cell = cellTable.findById(id);

				//
				cell.deleteProps(totalProps);

				// оставить в нормальной форме ссылку на id под сущности
				var value = cache[surrogateKey];
				var idAttribute = Star.genericId(dimension);

				cell[idAttribute] = value;
			});

			return memberList;
		}
	}, {
		key: "_makeMemberListDependency",
		value: function _makeMemberListDependency(factTable, dimension, keyProps, otherProps, cellTable, space, dependencyNames, entitiesParts) {
			var _this4 = this;

			var totalMemberList = new _MemberList2.default();

			var countId = 0;
			entitiesParts.forEach(function (entitiesPart) {
				if (entitiesPart.length) {
					var memberList = _this4._makeMemberList(entitiesPart, dimension, keyProps, otherProps, cellTable, countId);
					countId = countId + memberList.length;

					memberList.forEach(function (member) {
						member[_const.ENTITY_ID] = totalMemberList.length + 1;
						totalMemberList.add(member);
					});
				}
			});

			return totalMemberList;
		}
	}], [{
		key: "genericId",
		value: function genericId(entityName) {
			return entityName + '_' + _const.ENTITY_ID;
		}
	}]);

	return Star;
}();

exports.default = Star;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _InputCell = __webpack_require__(9);

var _InputCell2 = _interopRequireDefault(_InputCell);

var _const = __webpack_require__(0);

var _Member = __webpack_require__(2);

var _Member2 = _interopRequireDefault(_Member);

var _InputMember = __webpack_require__(10);

var _InputMember2 = _interopRequireDefault(_InputMember);

var _Schema = __webpack_require__(11);

var _Space = __webpack_require__(3);

var _Space2 = _interopRequireDefault(_Space);

var _FactTable = __webpack_require__(6);

var _FactTable2 = _interopRequireDefault(_FactTable);

var _FixSpace = __webpack_require__(14);

var _FixSpace2 = _interopRequireDefault(_FixSpace);

var _QueryAdapter = __webpack_require__(18);

var _QueryAdapter2 = _interopRequireDefault(_QueryAdapter);

var _TupleTable = __webpack_require__(19);

var _TupleTable2 = _interopRequireDefault(_TupleTable);

var _Star = __webpack_require__(7);

var _Star2 = _interopRequireDefault(_Star);

var _errors = __webpack_require__(21);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * It a means to retrieve data
 *
 * Base class for normalizing a denormalized data array
 * and analyzing query according to a given scheme
 *
 * @param {object[]} factTable - facts which will be subject to analysis
 * */
var Cube = function () {
	function Cube(facts, dimensionsSchema) {
		_classCallCheck(this, Cube);

		var schema = new _Schema.Schema(dimensionsSchema);
		Object.defineProperty(this, 'schema', { value: schema });
		Object.defineProperty(this, 'facts', { value: facts });

		var dimensionTables = schema.getDimensionsResolutionOrder();
		var star = new _Star2.default(facts, dimensionTables);

		var space = star.space,
		    cellTable = star.cellTable;

		Object.defineProperty(this, 'star', { value: star });

		this.space = space;
		this.cellTable = cellTable;

		var count = this.residuals().length;
		if (count > 0) {
			console.warn('Fact table has residuals');
		}

		var final = this.schema.getFinal();
		if (final.length == 0) {
			console.warn('Fact table not has final dimension');
		}
	}

	/**
  * A method that allows you to find all members of a specified dimension
  * or part of the members using a filter if they are in a hierarchy
  *
  * @public
  * @param {(string|null|object)?} dimension - dimension from which the member will be found
  * @param {(object|null)?} fixSpaceOptions - the composed aggregate object, members grouped by dimension names
  * @param {boolean?} raw - return cell of fact data
  * @return {Member[]|FactTable|CellTable} returns members
  * */


	_createClass(Cube, [{
		key: 'query',
		value: function query(dimension, fixSpaceOptions) {
			var raw = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

			var args = [].slice.call(arguments);
			if (args.length > 0 && args[0]) {
				if (_typeof(args[0]) === "object") {
					fixSpaceOptions = args[0];
					dimension = null;
				}
			}

			var cells = this.cellTable;

			if (fixSpaceOptions) {
				var queryAdapter = new _QueryAdapter2.default();
				queryAdapter.applyAdapter(fixSpaceOptions, this.space);
				var fixSpace = new _FixSpace2.default(fixSpaceOptions);
				cells = fixSpace.match(cells);
			}

			if (!dimension) {
				return raw ? cells : this.denormalize(cells);
			} else {
				var idAttribute = _Star2.default.genericId(dimension);
				var ids = cells.map(function (cell) {
					return cell[idAttribute];
				});

				var uniq = function uniq(items) {
					var hash = {};
					items.forEach(function (item) {
						hash[item] = item;
					});
					return Object.keys(hash).map(function (key) {
						return hash[key];
					});
				};

				var uniqueIds = uniq(ids);
				var result = [];
				var members = this.space.getMemberList(dimension);

				// filtering without loss of order in the array
				members.forEach(function (member) {
					if (uniqueIds.indexOf(member[_const.ENTITY_ID]) !== -1) {
						result.push(member);
					}
				});
				return result;
			}
		}

		/**
   * Get facts from cube
   * @public
   * */

	}, {
		key: 'denormalize',
		value: function denormalize() {
			var cells = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.cellTable;

			return this.star.denormalize(cells);
		}

		/**
   * Cartesian product - list of all possible tuples
   * @public
   * */

	}, {
		key: 'cartesian',
		value: function cartesian() {
			var _this = this;

			var branches = this.schema.getBranches();

			var f = function f(a, b) {
				var _ref;

				return (_ref = []).concat.apply(_ref, _toConsumableArray(a.map(function (d) {
					return b.map(function (e) {
						return [].concat(d, e);
					});
				})));
			};

			var cartesian = function cartesian(a, b) {
				for (var _len = arguments.length, c = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
					c[_key - 2] = arguments[_key];
				}

				return b ? cartesian.apply(undefined, [f(a, b)].concat(c)) : a;
			};

			var sets = branches.map(function (branch) {
				var dimensions = branch.map(function (_ref2) {
					var dimension = _ref2.dimension;
					return dimension;
				}).reverse();
				if (dimensions.length > 1) {

					var acc = [];

					var reqursive = function reqursive(dimensions, index) {
						var space = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

						var dimension = dimensions[index];
						index = index + 1;
						_this.query(dimension, space).map(function (item) {
							var newSpace = Object.assign({}, space);
							newSpace[dimension] = item;
							if (index === dimensions.length) {
								acc.push(newSpace);
							} else {
								reqursive(dimensions, index, newSpace);
							}
						});
					};

					reqursive(dimensions, 0);

					return acc;
				} else {
					return [].concat(_this.query(dimensions[0])).map(function (member) {
						return _defineProperty({}, dimensions[0], member);
					});
				}
			});

			var res = cartesian.apply(null, sets);

			var items = res.map(function (arr) {
				return arr.reduce(function (acc, arr) {
					return Object.assign(acc, arr);
				}, {});
			});

			var tupleTable = new _TupleTable2.default();

			items.forEach(function (item) {
				tupleTable.add(item);
			});

			return tupleTable;
		}

		/**
   * Residuals - list of tuples, according to which there is more than one member
   * @public
   * */

	}, {
		key: 'residuals',
		value: function residuals() {
			var _this2 = this;

			var tuples = this.cartesian();
			var residuals = [];
			tuples.forEach(function (tuple) {
				var members = _this2.query(tuple);
				if (members.length > 1) {
					residuals.push(tuple);
				}
			});
			return residuals;
		}

		/**
   * Unfilled - list of tuples, in accordance with which there is not a single member
   * @public
   * */

	}, {
		key: 'unfilled',
		value: function unfilled() {
			var _this3 = this;

			var tuples = this.cartesian();
			var unfilled = [];

			tuples.forEach(function (tuple) {
				var members = _this3.query(tuple);
				if (members.length === 0) {
					unfilled.push(tuple);
				}
			});
			return unfilled;
		}
	}]);

	return Cube;
}();

/**
 * Is a means of replenishing data
 *
 * A helper class that provides methods for adding and removing values,
 * as well as generating missing values for possible display of data
 * */


var DynamicCube = function (_Cube) {
	_inherits(DynamicCube, _Cube);

	function DynamicCube(factTable, dimensionsSchema) {
		_classCallCheck(this, DynamicCube);

		return _possibleConstructorReturn(this, (DynamicCube.__proto__ || Object.getPrototypeOf(DynamicCube)).call(this, factTable, dimensionsSchema));
	}
	/**
  * @param {string} dimension - dimension in which the member is created
  * @param {object?} memberOptions - properties for the created member
  * @param {object?} rollupCoordinatesData
  * @public
  * */


	_createClass(DynamicCube, [{
		key: 'addMember',
		value: function addMember(dimension) {
			var _this5 = this;

			var memberOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
			var rollupCoordinatesData = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

			if (typeof dimension !== "string") {
				throw Error('parameter dimension expects as string: ' + dimension);
			}

			this._validateDimension(dimension);

			var addedCoordinates = _defineProperty({}, dimension, this._createMember(dimension, memberOptions));

			var rollupCoordinates = {};
			Object.keys(rollupCoordinatesData).forEach(function (dimension) {
				var memberData = rollupCoordinatesData[dimension];
				var memberList = _this5.query(dimension);
				var id = memberData[_const.ENTITY_ID];
				var find = memberList.find(function (member) {
					return id === member[_const.ENTITY_ID];
				});
				if (!find) {
					throw new _errors.CantAddMemberRollupException(dimension, id);
				} else {
					rollupCoordinates[dimension] = find;
				}
			});

			this._validateCompletenessRollupCoordinatesData(dimension, memberOptions, rollupCoordinatesData);

			var drillDownCoordinates = {};
			this.schema.traceUp(dimension, function (_ref4) {
				var currentDimension = _ref4.dimension;

				drillDownCoordinates[currentDimension] = _this5._createMember(currentDimension);
			});

			var coordinates = Object.assign({}, addedCoordinates, rollupCoordinates, drillDownCoordinates);

			// leafs
			var externals = this.schema.getExternals();

			// filter for not defined tables
			var missedDimensionTables = externals.filter(function (_ref5) {
				var externalDimension = _ref5.dimension;

				return dimension !== externalDimension && !rollupCoordinates[externalDimension];
			});

			// место куда будут складываться
			var space = new _Space2.default();

			missedDimensionTables.forEach(function (_ref6) {
				var dimension = _ref6.dimension;

				space.setMemberList(dimension, _this5.space.getMemberList(dimension));
			});

			var createCell = function createCell(coordinates) {
				var dimension = _this5.schema.getMeasure().dimension;
				var member = _this5._createMember(dimension);
				var value = _defineProperty({}, dimension, member);
				var cellData = Object.assign({}, coordinates, value);
				_this5._createNormalizeData(cellData);
			};

			var size = this.schema.getNames().length - 1;

			var recursivelyForEach = function recursivelyForEach(dimensions, membersList, index, coordinates) {
				var dimensionsLength = dimensions.length;
				var currentDimension = dimensions[index];
				var cells = [];
				var parentDimensionTable = _this5.schema.getByDependency(currentDimension);

				membersList[index].forEach(function (member) {
					var coordinatesCopy = Object.assign({}, coordinates);
					coordinatesCopy[currentDimension] = member;

					if (parentDimensionTable) {
						// debugger;
						var members = _this5.query(parentDimensionTable.dimension, _defineProperty({}, currentDimension, member));

						recursivelyForEach([parentDimensionTable.dimension], [members], 0, coordinatesCopy);
					}

					if (index + 1 === dimensionsLength) {
						if (Object.keys(coordinatesCopy).length === size) {
							cells.push(coordinatesCopy);
						}
					} else {
						recursivelyForEach(dimensions, membersList, index + 1, coordinatesCopy);
					}
				});

				cells.forEach(function (cellOptions) {
					createCell(cellOptions);
				});
			};

			var dimensions = space.getDimensionList();
			var membersList = dimensions.map(function (dimension) {
				return space.getMemberList(dimension);
			});
			recursivelyForEach(dimensions, membersList, 0, coordinates);
		}
	}, {
		key: '_validateDimension',
		value: function _validateDimension(dimension) {
			var measureDimension = this.schema.getMeasure().dimension;
			if (dimension === measureDimension) {
				throw new _errors.AddDimensionOfCellException(dimension);
			}
		}
	}, {
		key: '_validateCompletenessRollupCoordinatesData',
		value: function _validateCompletenessRollupCoordinatesData(dimension, memberOptions, rollupCoordinatesData) {
			var addSpaceOptions = _extends(_defineProperty({}, dimension, memberOptions), rollupCoordinatesData);

			var childDimensionList = this.schema.getPostOrderChildDimensionList(dimension);

			if (childDimensionList.length) {
				var first = childDimensionList[0];

				// first parent define one member
				if (addSpaceOptions[first]) {
					return;
				} else {
					throw new _errors.NotCompletelySpaceException(first);
				}
			}
		}
		/**
   *
   * @param {string} dimension - dimension from which the member will be removed
   * @param {Member} member - the member will be removed
   * @public
   * */

	}, {
		key: 'removeMember',
		value: function removeMember(dimension, member) {
			var _this6 = this;

			var dependenciesDimensionNames = this.schema.getDependenciesNames(dimension);
			var index = this.space.getMemberList(dimension).indexOf(member);
			if (index === -1) {
				throw new Error('represented member was not found in the ' + dimension + ' dimension');
			}
			this.space.getMemberList(dimension).splice(index, 1);

			var filterData = this.cellTable.filter(function (data) {
				return data[_Star2.default.genericId(dimension)] == member[_const.ENTITY_ID];
			});

			filterData.forEach(function (data) {
				var index = _this6.cellTable.indexOf(data);
				_this6.cellTable.splice(index, 1);

				dependenciesDimensionNames.forEach(function (dimension) {
					_this6._removeSubModel(data, dimension);
				});
			});
			this._normalize();
		}
		/**
   * Get data without random identifiers
   * */

	}, {
		key: 'denormalize',
		value: function denormalize() {
			var cells = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.cellTable;
			var forSave = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

			var data = _get(DynamicCube.prototype.__proto__ || Object.getPrototypeOf(DynamicCube.prototype), 'denormalize', this).call(this, cells);
			if (forSave) {
				data.forEach(function (data, index) {
					if (cells[index] instanceof _InputCell2.default) {
						delete data[_const.ENTITY_ID];
					}
				});
			}
			return data;
		}
		/**
   * Remove subentity, links to which none of the model does not remain
   * @private
   * */
		/**
   *
   * @private
   * */

	}, {
		key: '_removeSubModel',
		value: function _removeSubModel(normalizeData, dimension) {
			var _this7 = this;

			// подчистить суб-модельку
			var filtered = this.space.getMemberList(dimension).filter(function (record) {
				return record[_const.ENTITY_ID] == normalizeData[_Star2.default.genericId(dimension)];
			});

			// и подчистить суб-модельку
			filtered.forEach(function (data) {
				var index = _this7.space.getMemberList(dimension).indexOf(data);
				_this7.space.getMemberList(dimension).splice(index, 1);
			});
		}
		/**
   *
   * @private
   * */

	}, {
		key: '_normalize',
		value: function _normalize() {
			var _this8 = this;

			var names = this.schema.getNames();
			var report = [];
			names.forEach(function (dimension) {
				if (_this8.space.getMemberList(dimension).length) {
					var copy = [].concat(_this8.space.getMemberList(dimension));
					// чтобы splice корректно отработал
					copy.forEach(function (member, index) {
						var idAttribute = _Star2.default.genericId(dimension);
						var findLink = _this8.cellTable.find(function (data) {
							return data[idAttribute] == member[_const.ENTITY_ID];
						});
						if (!findLink) {
							_this8.space.getMemberList(dimension).splice(index - (copy.length - _this8.space.getMemberList(dimension).length), 1);
							report.push(member);
						}
					});
				}
			});
			// "development"
			// if (report.length){
			//     console.log('broken links:', report)
			// }
		}
		/**
   *
   * @public
   * */
		/**
   * Filling method for full size of cube
   * @param {object?} props - properties for empty cells
   * @public
   * */

	}, {
		key: 'fill',
		value: function fill(props) {
			var _this9 = this;

			if (!this.residuals().length) {
				var measureName = this.schema.getMeasure().dimension;
				var tuples = this.cartesian();
				var emptyMemberOptions = [];
				tuples.forEach(function (combination) {
					var unique = _this9.query(measureName, combination);
					if (!unique.length) {
						emptyMemberOptions.push(combination);
					}
				});

				emptyMemberOptions.forEach(function (cellOptions) {
					var member = _this9._createMemberDependency(measureName, props);
					var options = Object.assign({}, cellOptions, member);
					_this9._createNormalizeData(options);
				});
			}
		}
		/**
   *
   * @private
   * */

	}, {
		key: '_createNormalizeData',
		value: function _createNormalizeData(obj) {
			var options = {};
			Object.keys(obj).forEach(function (key) {
				options[_Star2.default.genericId(key)] = obj[key][_const.ENTITY_ID];
			});
			var newNormaliseData = new _InputCell2.default(options);
			this.cellTable.push(newNormaliseData);
		}
		/**
   * @param {string} dimension
   * @param {object?} props
   * @private
   * */

	}, {
		key: '_createMember',
		value: function _createMember(dimension) {
			var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

			var _schema$getDimensionT = this.schema.getDimensionTable(dimension),
			    keyProps = _schema$getDimensionT.keyProps;

			var id = DynamicCube.reduceId(this.space.getMemberList(dimension));
			var member = new _InputMember2.default(id, keyProps, props);
			this.space.getMemberList(dimension).add(member);
			return member;
		}
		/**
   * create space
   * @private
   * */

	}, {
		key: '_createMemberDependency',
		value: function _createMemberDependency(dimension) {
			var _this10 = this;

			var memberOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

			var result = {};

			result[dimension] = this._createMember(dimension, memberOptions);

			this.schema.traceUp(dimension, function (_ref7) {
				var dimension = _ref7.dimension;

				result[dimension] = _this10._createMember(dimension);
			});

			return result;
		}
		/**
   * Method of generating a unique identifier within the selected space
   * */

	}], [{
		key: 'reduceId',
		value: function reduceId(array) {
			if (array.length) {
				return array.reduce(function (acc, curValue) {
					return acc[_const.ENTITY_ID] > curValue[_const.ENTITY_ID] ? acc : curValue;
				}, 0).id + 1;
			} else {
				return 1;
			}
		}
	}]);

	return DynamicCube;
}(Cube);

exports.default = DynamicCube;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _Cell2 = __webpack_require__(1);

var _Cell3 = _interopRequireDefault(_Cell2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function uuidv4() {
	return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
		var r = Math.random() * 16 | 0,
		    v = c == 'x' ? r : r & 0x3 | 0x8;
		return v.toString(16);
	});
}

var InputCell = function (_Cell) {
	_inherits(InputCell, _Cell);

	function InputCell(data, options) {
		_classCallCheck(this, InputCell);

		if (!data.id) {
			data.id = uuidv4();
		}
		return _possibleConstructorReturn(this, (InputCell.__proto__ || Object.getPrototypeOf(InputCell)).call(this, data, options));
	}

	return InputCell;
}(_Cell3.default);

exports.default = InputCell;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _Member2 = __webpack_require__(2);

var _Member3 = _interopRequireDefault(_Member2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Introductory elements. Input elements have values that are manually loaded
 * that is, they are not the result of calculating data
 * */
var InputMember = function (_Member) {
	_inherits(InputMember, _Member);

	function InputMember(id, props, data) {
		_classCallCheck(this, InputMember);

		var defaultValue = null;
		var defaultData = {};

		props.forEach(function (propName) {
			defaultData[propName] = data.hasOwnProperty(propName) ? data[propName] : defaultValue;
		});

		return _possibleConstructorReturn(this, (InputMember.__proto__ || Object.getPrototypeOf(InputMember)).call(this, id, props, defaultData));
	}

	return InputMember;
}(_Member3.default);

exports.default = InputMember;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Schema = exports.DimensionException = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _SchemaDimension = __webpack_require__(12);

var _SchemaDimension2 = _interopRequireDefault(_SchemaDimension);

var _Tree2 = __webpack_require__(13);

var _Tree3 = _interopRequireDefault(_Tree2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _extendableBuiltin(cls) {
	function ExtendableBuiltin() {
		var instance = Reflect.construct(cls, Array.from(arguments));
		Object.setPrototypeOf(instance, Object.getPrototypeOf(this));
		return instance;
	}

	ExtendableBuiltin.prototype = Object.create(cls.prototype, {
		constructor: {
			value: cls,
			enumerable: false,
			writable: true,
			configurable: true
		}
	});

	if (Object.setPrototypeOf) {
		Object.setPrototypeOf(ExtendableBuiltin, cls);
	} else {
		ExtendableBuiltin.__proto__ = cls;
	}

	return ExtendableBuiltin;
}

var DimensionException = exports.DimensionException = function (_extendableBuiltin2) {
	_inherits(DimensionException, _extendableBuiltin2);

	function DimensionException(dimension) {
		_classCallCheck(this, DimensionException);

		var _this = _possibleConstructorReturn(this, (DimensionException.__proto__ || Object.getPrototypeOf(DimensionException)).call(this));

		_this.message = "For the name \"" + dimension + "\" the dimension is already set";
		return _this;
	}

	return DimensionException;
}(_extendableBuiltin(Error));

var adapter = function adapter(schema) {
	var _schema$dependency = schema.dependency,
	    dependency = _schema$dependency === undefined ? [] : _schema$dependency,
	    rest = _objectWithoutProperties(schema, ["dependency"]);

	return {
		value: _extends({}, rest, {
			dependencyNames: dependency.map(function (dependency) {
				return dependency.dimension;
			})
		}),
		childNodes: dependency.map(adapter)
	};
};

/**
 * It defines the relationship of generalization and specialization (roll-up/drill-down)
 * @throws {DimensionException}
 * */

var Schema = exports.Schema = function (_Tree) {
	_inherits(Schema, _Tree);

	function Schema(schema) {
		_classCallCheck(this, Schema);

		var _this2 = _possibleConstructorReturn(this, (Schema.__proto__ || Object.getPrototypeOf(Schema)).call(this, adapter(schema)));

		_this2.schema = new _SchemaDimension2.default(schema);

		_this2._dimensionsResolutionOrder = [];
		_this2._dimensionTable = {};

		_this2.postOrder(function (dimensionTable) {
			var dimension = dimensionTable.dimension;

			if (!_this2._dimensionTable[dimension]) {
				var _dimension = dimensionTable.dimension;

				_this2._dimensionTable[_dimension] = dimensionTable;
				_this2._dimensionsResolutionOrder.push(_this2._dimensionTable[_dimension]);
			} else {
				throw new DimensionException(dimension);
			}
		});
		return _this2;
	}

	/**
  * @param {string} dimension
  * @return {DimensionTable|undefined}
  * */


	_createClass(Schema, [{
		key: "getDimensionTable",
		value: function getDimensionTable(dimension) {
			return this._dimensionTable[dimension];
		}
		/**
   * Take an ordered list of dimensions by dependency resolution
   * */

	}, {
		key: "getDimensionsResolutionOrder",
		value: function getDimensionsResolutionOrder() {
			return this._dimensionsResolutionOrder;
		}
		/**
   * Get a dimension by its dependency
   * @return {string|undefined}
   * */

	}, {
		key: "getByDependency",
		value: function getByDependency(dimensionOfDep) {
			var _this3 = this;

			var find = false;
			this.postOrder(function (_ref, node) {
				var dimension = _ref.dimension;


				if (dimensionOfDep === dimension) {
					var parent = _this3.getParentOf(node);
					if (parent && parent !== _this3._root) {
						find = parent.value;
					}
				}
			});

			return find;
		}
		/**
   * Get list of dimensions names
   * @return {string[]}
   * */

	}, {
		key: "getNames",
		value: function getNames() {
			return this._dimensionsResolutionOrder.map(function (schema) {
				return schema.dimension;
			});
		}
	}, {
		key: "traceUp",
		value: function traceUp(dimension, callback) {
			var _this4 = this;

			var find = false;
			var order = [];
			this.postOrder(function (_ref2, node) {
				var currentDimension = _ref2.dimension;

				if (dimension === currentDimension) {
					find = node;
				}
			});

			var req = function req(node) {
				var parent = _this4.getParentOf(node);
				if (parent) {

					if (parent === _this4.getRoot()) {
						return;
					}
					order.push(parent);
					req(parent);
				}
			};

			if (find) {
				req(find);
			}

			order.forEach(function (node) {
				callback(node.value);
			});
		}

		/**
   * Get a list of all dimension related to the selected dimension
   * @return {string[]}
   * */

	}, {
		key: "getDependenciesNames",
		value: function getDependenciesNames(currentDimension) {
			var names = [];
			this.postOrder(function (_ref3, node) {
				var dimension = _ref3.dimension;

				if (currentDimension === dimension) {
					var tree = new _Tree3.default(node);
					tree.postOrder(function (_ref4) {
						var dimension = _ref4.dimension;

						if (currentDimension !== dimension) {
							names.push(dimension);
						}
					});
				}
			});

			return names;
		}
		/**
   * take a point measure in the dimension space
   * */

	}, {
		key: "getMeasure",
		value: function getMeasure() {
			var root = this.getRoot();
			return root.value;
		}
		/**
   * A node with no children.
   * */

	}, {
		key: "getExternals",
		value: function getExternals() {
			var _this5 = this;

			var externals = [];
			this.postOrder(function (value, node) {
				if (_this5.isExternal(node)) {
					externals.push(value);
				}
			});
			return externals;
		}
	}, {
		key: "getInternals",
		value: function getInternals() {}
	}, {
		key: "getPostOrderChildDimensionList",
		value: function getPostOrderChildDimensionList(dimension) {
			var parentNode = void 0;
			var order = [];
			this.postOrder(function (_ref5, node) {
				var currentDimension = _ref5.dimension;

				if (currentDimension === dimension) {
					parentNode = node;
				}
			});

			var reqursive = function reqursive(node) {
				if (node && node.childNodes.length) {
					node.childNodes.forEach(function (childNode) {
						order.push(childNode.value.dimension);
						reqursive(childNode);
					});
				}
			};

			if (parentNode) {
				reqursive(parentNode);
			}

			return order;
		}
		/**
   * List of all final dimensions forming count of measure
   * @return {SchemaDimension[]}
   * */

	}, {
		key: "getFinal",
		value: function getFinal() {
			return this.getRoot().childNodes.map(function (childNode) {
				return childNode.value;
			});
		}
	}, {
		key: "isRoot",
		value: function isRoot(schemaDimension) {
			return schemaDimension === this.getRoot().value;
		}
	}]);

	return Schema;
}(_Tree3.default);

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _Dimension2 = __webpack_require__(5);

var _Dimension3 = _interopRequireDefault(_Dimension2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SchemaDimension = function (_Dimension) {
	_inherits(SchemaDimension, _Dimension);

	function SchemaDimension(_ref) {
		var _ref$dependency = _ref.dependency,
		    dependency = _ref$dependency === undefined ? null : _ref$dependency,
		    rest = _objectWithoutProperties(_ref, ["dependency"]);

		_classCallCheck(this, SchemaDimension);

		/** The list of dimensions with which the current dimension is directly related */
		var _this = _possibleConstructorReturn(this, (SchemaDimension.__proto__ || Object.getPrototypeOf(SchemaDimension)).call(this, rest));

		_this.dependency = dependency && dependency.map(function (dependency) {
			return new SchemaDimension(dependency);
		});
		return _this;
	}

	return SchemaDimension;
}(_Dimension3.default);

exports.default = SchemaDimension;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Node = function Node(_ref) {
	var value = _ref.value,
	    _ref$childNodes = _ref.childNodes,
	    childNodes = _ref$childNodes === undefined ? [] : _ref$childNodes;

	_classCallCheck(this, Node);

	this.value = value;
	this.childNodes = childNodes.length ? childNodes.map(function (childNode) {
		return new Node(childNode);
	}) : childNodes;
};

/**
 *
 * */


var Tree = function () {
	function Tree(options) {
		_classCallCheck(this, Tree);

		this._root = new Node(options);
	}

	_createClass(Tree, [{
		key: "getRoot",
		value: function getRoot() {
			return this._root;
		}
	}, {
		key: "createIterator",
		value: function createIterator(order) {
			var i = 0;

			return {
				next: function next() {
					var done = i >= order.length;
					var value = !done ? order[i++] : void 0;
					return {
						done: done,
						value: value
					};
				}
			};
		}
		/**
   * A walk in which each parent node is traversed before its children
   */

	}, {
		key: "preOrder",
		value: function preOrder(callback) {
			var reqursively = function reqursively(node) {
				callback(node.value, node);
				if (node.childNodes.length) {
					node.childNodes.forEach(function (childNode) {
						reqursively(childNode);
					});
				}
			};
			reqursively(this.getRoot());
		}
	}, {
		key: "preOrderQueue",
		value: function preOrderQueue() {
			var queue = [];
			var reqursively = function reqursively(node) {
				queue.push(node);
				if (node.childNodes.length) {
					node.childNodes.forEach(function (childNode) {
						reqursively(childNode);
					});
				}
			};
			reqursively(this.getRoot());
			return queue;
		}
		/**
   * A walk in which the children are traversed before their respective parents are traversed
   * */

	}, {
		key: "postOrder",
		value: function postOrder(callback) {
			var reqursively = function reqursively(node) {
				if (node.childNodes.length) {
					node.childNodes.forEach(function (childNode) {
						reqursively(childNode);
					});
				}
				callback(node.value, node);
			};
			reqursively(this.getRoot());
		}
		/**
   * A walk in which a node's left subtree, then the node itself, and finally its right subtree are traversed
   * */

	}, {
		key: "inOrder",
		value: function inOrder(callback) {}
		/**
   * A walk effectively performs a breadth-first search over the entirety of a tree; nodes are traversed level by level, where the root node is visited first
   * */

	}, {
		key: "levelOrder",
		value: function levelOrder(callback) {}
	}, {
		key: "isInternal",
		value: function isInternal(node) {
			return !!node.childNodes.length;
		}
	}, {
		key: "isExternal",
		value: function isExternal(node) {
			return !node.childNodes.length;
		}
	}, {
		key: "isRoot",
		value: function isRoot(node) {
			return this._root === node;
		}
	}, {
		key: "getParentOf",
		value: function getParentOf(node) {
			// if (node === this._root){
			//     return null;
			// }
			var find = false;
			this.preOrder(function (value, currentNode) {
				if (currentNode.childNodes && currentNode.childNodes.length && currentNode.childNodes.indexOf(node) !== -1) {
					find = currentNode;
				}
			});
			return find;
		}
	}, {
		key: "search",
		value: function search(data) {}
	}, {
		key: "getBranches",
		value: function getBranches() {
			var final = this.getRoot().childNodes.map(function (childNode) {
				return childNode;
			});
			return final.map(function (node) {
				var branch = [];

				var recursive = function recursive(node) {
					branch.push(node.value);

					if (node.childNodes.length) {
						node.childNodes.forEach(function (node) {
							recursive(node);
						});
					}
				};

				recursive(node);

				return branch;
			});
		}
	}, {
		key: "getLeafs",
		value: function getLeafs() {
			var nodes = this.preOrderQueue();
			var leafs = [];
			nodes.forEach(function (node) {
				if (node.childNodes.length) {
					leafs.push(node);
				}
			});
			return leafs;
		}
	}]);

	return Tree;
}();

exports.default = Tree;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _Space2 = __webpack_require__(3);

var _Space3 = _interopRequireDefault(_Space2);

var _const = __webpack_require__(0);

var _Cell = __webpack_require__(1);

var _Cell2 = _interopRequireDefault(_Cell);

var _Star = __webpack_require__(7);

var _Star2 = _interopRequireDefault(_Star);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _extendableBuiltin(cls) {
	function ExtendableBuiltin() {
		var instance = Reflect.construct(cls, Array.from(arguments));
		Object.setPrototypeOf(instance, Object.getPrototypeOf(this));
		return instance;
	}

	ExtendableBuiltin.prototype = Object.create(cls.prototype, {
		constructor: {
			value: cls,
			enumerable: false,
			writable: true,
			configurable: true
		}
	});

	if (Object.setPrototypeOf) {
		Object.setPrototypeOf(ExtendableBuiltin, cls);
	} else {
		ExtendableBuiltin.__proto__ = cls;
	}

	return ExtendableBuiltin;
}

var DimensionDataException = function (_extendableBuiltin2) {
	_inherits(DimensionDataException, _extendableBuiltin2);

	function DimensionDataException(data) {
		_classCallCheck(this, DimensionDataException);

		var _this = _possibleConstructorReturn(this, (DimensionDataException.__proto__ || Object.getPrototypeOf(DimensionDataException)).call(this));

		_this.message = "data attribute for dimension is \"" + data + "\"";
		return _this;
	}

	return DimensionDataException;
}(_extendableBuiltin(Error));
/**
 * Space with fixed dimensions values
 * @throws {DimensionDataException}
 * */


var FixSpace = function (_Space) {
	_inherits(FixSpace, _Space);

	function FixSpace(options) {
		_classCallCheck(this, FixSpace);

		return _possibleConstructorReturn(this, (FixSpace.__proto__ || Object.getPrototypeOf(FixSpace)).call(this, options));
	}
	/**
  * @param {string} dimension
  * @param {object|object[]} data
  * */


	_createClass(FixSpace, [{
		key: "setMemberList",
		value: function setMemberList(dimension, data) {
			if (!data) {
				throw new DimensionDataException();
			}
			if (!Array.isArray(data)) {
				data = [data];
			}
			return _get(FixSpace.prototype.__proto__ || Object.getPrototypeOf(FixSpace.prototype), "setMemberList", this).call(this, dimension, data);
		}
		/**
   * @param {Cell[]} cells - array of data to be filtered
   * @returns {Cell[]}
   * */

	}, {
		key: "match",
		value: function match(cells) {
			var _this3 = this;

			var filtered = [].concat(cells);
			this.getDimensionList().forEach(function (dimension) {
				var idAttribute = _Star2.default.genericId(dimension);
				var members = _this3.getMemberList(dimension);
				var totalPart = [];
				members.forEach(function (member) {
					var memberId = member[_const.ENTITY_ID];
					var result = filtered.filter(function (cell) {
						return cell[idAttribute] == memberId;
					});
					var args = [totalPart.length, 0].concat(result);
					[].splice.apply(totalPart, args);
				});
				filtered = totalPart;
			});
			return filtered;
		}
	}]);

	return FixSpace;
}(_Space3.default);

exports.default = FixSpace;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _const = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _extendableBuiltin(cls) {
	function ExtendableBuiltin() {
		var instance = Reflect.construct(cls, Array.from(arguments));
		Object.setPrototypeOf(instance, Object.getPrototypeOf(this));
		return instance;
	}

	ExtendableBuiltin.prototype = Object.create(cls.prototype, {
		constructor: {
			value: cls,
			enumerable: false,
			writable: true,
			configurable: true
		}
	});

	if (Object.setPrototypeOf) {
		Object.setPrototypeOf(ExtendableBuiltin, cls);
	} else {
		ExtendableBuiltin.__proto__ = cls;
	}

	return ExtendableBuiltin;
}

/**
 * */
var MemberList = function (_extendableBuiltin2) {
	_inherits(MemberList, _extendableBuiltin2);

	function MemberList(array) {
		_classCallCheck(this, MemberList);

		var _this = _possibleConstructorReturn(this, (MemberList.__proto__ || Object.getPrototypeOf(MemberList)).call(this));

		if (Array.isArray(array)) {
			Object.assign(_this, array);
		}
		return _this;
	}

	_createClass(MemberList, [{
		key: "filter",
		value: function filter() {
			return [].filter.apply(this, arguments);
		}
		/**
   * search members for all properties by some value
   * */

	}, {
		key: "search",
		value: function search(value) {
			return this.filter(function (member) {
				return Object.keys(member).find(function (key) {
					return key !== _const.ENTITY_ID && member[key] === value;
				});
			});
		}
	}, {
		key: "add",
		value: function add(member) {
			if (this.indexOf(member[_const.ENTITY_ID] === -1)) {
				this.push(member);
			} else {
				debugger;
			}
		}
	}]);

	return MemberList;
}(_extendableBuiltin(Array));

exports.default = MemberList;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Cell = __webpack_require__(1);

var _Cell2 = _interopRequireDefault(_Cell);

var _const = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _extendableBuiltin(cls) {
	function ExtendableBuiltin() {
		var instance = Reflect.construct(cls, Array.from(arguments));
		Object.setPrototypeOf(instance, Object.getPrototypeOf(this));
		return instance;
	}

	ExtendableBuiltin.prototype = Object.create(cls.prototype, {
		constructor: {
			value: cls,
			enumerable: false,
			writable: true,
			configurable: true
		}
	});

	if (Object.setPrototypeOf) {
		Object.setPrototypeOf(ExtendableBuiltin, cls);
	} else {
		ExtendableBuiltin.__proto__ = cls;
	}

	return ExtendableBuiltin;
}

var CellTable = function (_extendableBuiltin2) {
	_inherits(CellTable, _extendableBuiltin2);

	function CellTable(array) {
		_classCallCheck(this, CellTable);

		var _this = _possibleConstructorReturn(this, (CellTable.__proto__ || Object.getPrototypeOf(CellTable)).call(this));

		if (Array.isArray(array)) {
			Object.assign(_this, array.map(function (item) {
				return new _Cell2.default(item);
			}));
		}
		return _this;
	}

	_createClass(CellTable, [{
		key: "findById",
		value: function findById(id) {
			return this.find(function (cell) {
				return cell[_const.ENTITY_ID] === id;
			});
		}
	}]);

	return CellTable;
}(_extendableBuiltin(Array));

exports.default = CellTable;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _Dimension2 = __webpack_require__(5);

var _Dimension3 = _interopRequireDefault(_Dimension2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DimensionTable = function (_Dimension) {
	_inherits(DimensionTable, _Dimension);

	function DimensionTable(_ref) {
		var _ref$dependencyNames = _ref.dependencyNames,
		    dependencyNames = _ref$dependencyNames === undefined ? [] : _ref$dependencyNames,
		    rest = _objectWithoutProperties(_ref, ["dependencyNames"]);

		_classCallCheck(this, DimensionTable);

		/** The list of dimensions with which the current dimension is directly related */
		var _this = _possibleConstructorReturn(this, (DimensionTable.__proto__ || Object.getPrototypeOf(DimensionTable)).call(this, rest));

		_this.dependencyNames = dependencyNames;
		return _this;
	}

	return DimensionTable;
}(_Dimension3.default);

exports.default = DimensionTable;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var QueryAdapter = function () {
	function QueryAdapter() {
		_classCallCheck(this, QueryAdapter);
	}

	_createClass(QueryAdapter, [{
		key: "applyAdapter",

		/**
   * It allows to find the dimension members in space for some defining values
   * and replace these values on found members
   * @param {object} fixSpaceOptions
   * @param {Space} space
   * */
		value: function applyAdapter(fixSpaceOptions, space) {
			this.removeEmptyFilds(fixSpaceOptions);

			Object.keys(fixSpaceOptions).forEach(function (dimension) {
				var value = fixSpaceOptions[dimension];

				var find = function find(dimension, value) {
					var memberList = space.getMemberList(dimension);
					return memberList ? memberList.search(value) : void 0;
				};

				if (typeof value === "string") {
					fixSpaceOptions[dimension] = find(dimension, value) || [];
				} else {
					if (Array.isArray(value) && value.length && typeof value[0] === "string") {
						fixSpaceOptions[dimension] = [];
						value.reduce(function (accumulated, value) {
							var found = find(dimension, value);
							if (found) {
								[].splice.apply(accumulated, [accumulated.length, 0].concat(found));
							}
							return accumulated;
						}, fixSpaceOptions[dimension]);
					}
				}
			});
			return fixSpaceOptions;
		}
		/**
   * { field: undefined } => {}
   * */

	}, {
		key: "removeEmptyFilds",
		value: function removeEmptyFilds(fixSpaceOptions) {
			Object.keys(fixSpaceOptions).reduce(function (fixSpaceOptions, prop) {
				if (!fixSpaceOptions[prop]) {
					delete fixSpaceOptions[prop];
				}
				return fixSpaceOptions;
			}, fixSpaceOptions);
			return fixSpaceOptions;
		}
	}]);

	return QueryAdapter;
}();

exports.default = QueryAdapter;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _Tuple = __webpack_require__(20);

var _Tuple2 = _interopRequireDefault(_Tuple);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _extendableBuiltin(cls) {
	function ExtendableBuiltin() {
		var instance = Reflect.construct(cls, Array.from(arguments));
		Object.setPrototypeOf(instance, Object.getPrototypeOf(this));
		return instance;
	}

	ExtendableBuiltin.prototype = Object.create(cls.prototype, {
		constructor: {
			value: cls,
			enumerable: false,
			writable: true,
			configurable: true
		}
	});

	if (Object.setPrototypeOf) {
		Object.setPrototypeOf(ExtendableBuiltin, cls);
	} else {
		ExtendableBuiltin.__proto__ = cls;
	}

	return ExtendableBuiltin;
}

var TupleTable = function (_extendableBuiltin2) {
	_inherits(TupleTable, _extendableBuiltin2);

	function TupleTable(array) {
		_classCallCheck(this, TupleTable);

		var _this = _possibleConstructorReturn(this, (TupleTable.__proto__ || Object.getPrototypeOf(TupleTable)).call(this));

		if (Array.isArray(array)) {
			Object.assign(_this, array.map(function (item) {
				return new _Tuple2.default(item);
			}));
		}
		return _this;
	}

	_createClass(TupleTable, [{
		key: "add",
		value: function add(data) {
			this.push(new _Tuple2.default(data));
		}
	}, {
		key: "forEach",
		value: function forEach() {
			return _get(TupleTable.prototype.__proto__ || Object.getPrototypeOf(TupleTable.prototype), "forEach", this).apply(this, arguments);
		}
	}]);

	return TupleTable;
}(_extendableBuiltin(Array));

exports.default = TupleTable;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Tuple = function Tuple(options) {
	_classCallCheck(this, Tuple);

	Object.assign(this, options);
};

exports.default = Tuple;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

function _extendableBuiltin5(cls) {
	function ExtendableBuiltin() {
		var instance = Reflect.construct(cls, Array.from(arguments));
		Object.setPrototypeOf(instance, Object.getPrototypeOf(this));
		return instance;
	}

	ExtendableBuiltin.prototype = Object.create(cls.prototype, {
		constructor: {
			value: cls,
			enumerable: false,
			writable: true,
			configurable: true
		}
	});

	if (Object.setPrototypeOf) {
		Object.setPrototypeOf(ExtendableBuiltin, cls);
	} else {
		ExtendableBuiltin.__proto__ = cls;
	}

	return ExtendableBuiltin;
}

function _extendableBuiltin3(cls) {
	function ExtendableBuiltin() {
		var instance = Reflect.construct(cls, Array.from(arguments));
		Object.setPrototypeOf(instance, Object.getPrototypeOf(this));
		return instance;
	}

	ExtendableBuiltin.prototype = Object.create(cls.prototype, {
		constructor: {
			value: cls,
			enumerable: false,
			writable: true,
			configurable: true
		}
	});

	if (Object.setPrototypeOf) {
		Object.setPrototypeOf(ExtendableBuiltin, cls);
	} else {
		ExtendableBuiltin.__proto__ = cls;
	}

	return ExtendableBuiltin;
}

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _extendableBuiltin(cls) {
	function ExtendableBuiltin() {
		var instance = Reflect.construct(cls, Array.from(arguments));
		Object.setPrototypeOf(instance, Object.getPrototypeOf(this));
		return instance;
	}

	ExtendableBuiltin.prototype = Object.create(cls.prototype, {
		constructor: {
			value: cls,
			enumerable: false,
			writable: true,
			configurable: true
		}
	});

	if (Object.setPrototypeOf) {
		Object.setPrototypeOf(ExtendableBuiltin, cls);
	} else {
		ExtendableBuiltin.__proto__ = cls;
	}

	return ExtendableBuiltin;
}

var NotCompletelySpaceException = exports.NotCompletelySpaceException = function (_extendableBuiltin2) {
	_inherits(NotCompletelySpaceException, _extendableBuiltin2);

	function NotCompletelySpaceException(dimension) {
		_classCallCheck(this, NotCompletelySpaceException);

		var _this = _possibleConstructorReturn(this, (NotCompletelySpaceException.__proto__ || Object.getPrototypeOf(NotCompletelySpaceException)).call(this));

		_this.message = "Not completely defined space for added member, not found member for dimension: \"" + dimension + "\"";
		return _this;
	}

	return NotCompletelySpaceException;
}(_extendableBuiltin(Error));

var AddDimensionOfCellException = exports.AddDimensionOfCellException = function (_extendableBuiltin4) {
	_inherits(AddDimensionOfCellException, _extendableBuiltin4);

	function AddDimensionOfCellException(dimension) {
		_classCallCheck(this, AddDimensionOfCellException);

		var _this2 = _possibleConstructorReturn(this, (AddDimensionOfCellException.__proto__ || Object.getPrototypeOf(AddDimensionOfCellException)).call(this));

		_this2.message = "You can not add a second member to the dimension for the cell: \"" + dimension + "\"";
		return _this2;
	}

	return AddDimensionOfCellException;
}(_extendableBuiltin3(Error));

var CantAddMemberRollupException = exports.CantAddMemberRollupException = function (_extendableBuiltin6) {
	_inherits(CantAddMemberRollupException, _extendableBuiltin6);

	function CantAddMemberRollupException(dimension, id) {
		_classCallCheck(this, CantAddMemberRollupException);

		var _this3 = _possibleConstructorReturn(this, (CantAddMemberRollupException.__proto__ || Object.getPrototypeOf(CantAddMemberRollupException)).call(this));

		_this3.message = "Can't add member, rollup dimension: " + dimension + " with id: " + id + " not found";
		return _this3;
	}

	return CantAddMemberRollupException;
}(_extendableBuiltin5(Error));

/***/ })
/******/ ]);
});