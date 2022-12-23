'use strict';

var promise = require('mysql2/promise');

function _iterableToArrayLimit(arr, i) {
  var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"];
  if (null != _i) {
    var _s,
      _e,
      _x,
      _r,
      _arr = [],
      _n = !0,
      _d = !1;
    try {
      if (_x = (_i = _i.call(arr)).next, 0 === i) {
        if (Object(_i) !== _i) return;
        _n = !1;
      } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0);
    } catch (err) {
      _d = !0, _e = err;
    } finally {
      try {
        if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return;
      } finally {
        if (_d) throw _e;
      }
    }
    return _arr;
  }
}
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function _regeneratorRuntime() {
  _regeneratorRuntime = function () {
    return exports;
  };
  var exports = {},
    Op = Object.prototype,
    hasOwn = Op.hasOwnProperty,
    defineProperty = Object.defineProperty || function (obj, key, desc) {
      obj[key] = desc.value;
    },
    $Symbol = "function" == typeof Symbol ? Symbol : {},
    iteratorSymbol = $Symbol.iterator || "@@iterator",
    asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator",
    toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
  function define(obj, key, value) {
    return Object.defineProperty(obj, key, {
      value: value,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), obj[key];
  }
  try {
    define({}, "");
  } catch (err) {
    define = function (obj, key, value) {
      return obj[key] = value;
    };
  }
  function wrap(innerFn, outerFn, self, tryLocsList) {
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator,
      generator = Object.create(protoGenerator.prototype),
      context = new Context(tryLocsList || []);
    return defineProperty(generator, "_invoke", {
      value: makeInvokeMethod(innerFn, self, context)
    }), generator;
  }
  function tryCatch(fn, obj, arg) {
    try {
      return {
        type: "normal",
        arg: fn.call(obj, arg)
      };
    } catch (err) {
      return {
        type: "throw",
        arg: err
      };
    }
  }
  exports.wrap = wrap;
  var ContinueSentinel = {};
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}
  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });
  var getProto = Object.getPrototypeOf,
    NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype);
  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function (method) {
      define(prototype, method, function (arg) {
        return this._invoke(method, arg);
      });
    });
  }
  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if ("throw" !== record.type) {
        var result = record.arg,
          value = result.value;
        return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) {
          invoke("next", value, resolve, reject);
        }, function (err) {
          invoke("throw", err, resolve, reject);
        }) : PromiseImpl.resolve(value).then(function (unwrapped) {
          result.value = unwrapped, resolve(result);
        }, function (error) {
          return invoke("throw", error, resolve, reject);
        });
      }
      reject(record.arg);
    }
    var previousPromise;
    defineProperty(this, "_invoke", {
      value: function (method, arg) {
        function callInvokeWithMethodAndArg() {
          return new PromiseImpl(function (resolve, reject) {
            invoke(method, arg, resolve, reject);
          });
        }
        return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
      }
    });
  }
  function makeInvokeMethod(innerFn, self, context) {
    var state = "suspendedStart";
    return function (method, arg) {
      if ("executing" === state) throw new Error("Generator is already running");
      if ("completed" === state) {
        if ("throw" === method) throw arg;
        return doneResult();
      }
      for (context.method = method, context.arg = arg;;) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }
        if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) {
          if ("suspendedStart" === state) throw state = "completed", context.arg;
          context.dispatchException(context.arg);
        } else "return" === context.method && context.abrupt("return", context.arg);
        state = "executing";
        var record = tryCatch(innerFn, self, context);
        if ("normal" === record.type) {
          if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue;
          return {
            value: record.arg,
            done: context.done
          };
        }
        "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg);
      }
    };
  }
  function maybeInvokeDelegate(delegate, context) {
    var methodName = context.method,
      method = delegate.iterator[methodName];
    if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel;
    var record = tryCatch(method, delegate.iterator, context.arg);
    if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel;
    var info = record.arg;
    return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel);
  }
  function pushTryEntry(locs) {
    var entry = {
      tryLoc: locs[0]
    };
    1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry);
  }
  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal", delete record.arg, entry.completion = record;
  }
  function Context(tryLocsList) {
    this.tryEntries = [{
      tryLoc: "root"
    }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0);
  }
  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) return iteratorMethod.call(iterable);
      if ("function" == typeof iterable.next) return iterable;
      if (!isNaN(iterable.length)) {
        var i = -1,
          next = function next() {
            for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next;
            return next.value = undefined, next.done = !0, next;
          };
        return next.next = next;
      }
    }
    return {
      next: doneResult
    };
  }
  function doneResult() {
    return {
      value: undefined,
      done: !0
    };
  }
  return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", {
    value: GeneratorFunctionPrototype,
    configurable: !0
  }), defineProperty(GeneratorFunctionPrototype, "constructor", {
    value: GeneratorFunction,
    configurable: !0
  }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) {
    var ctor = "function" == typeof genFun && genFun.constructor;
    return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name));
  }, exports.mark = function (genFun) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun;
  }, exports.awrap = function (arg) {
    return {
      __await: arg
    };
  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    void 0 === PromiseImpl && (PromiseImpl = Promise);
    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
    return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) {
      return result.done ? result.value : iter.next();
    });
  }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () {
    return this;
  }), define(Gp, "toString", function () {
    return "[object Generator]";
  }), exports.keys = function (val) {
    var object = Object(val),
      keys = [];
    for (var key in object) keys.push(key);
    return keys.reverse(), function next() {
      for (; keys.length;) {
        var key = keys.pop();
        if (key in object) return next.value = key, next.done = !1, next;
      }
      return next.done = !0, next;
    };
  }, exports.values = values, Context.prototype = {
    constructor: Context,
    reset: function (skipTempReset) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined);
    },
    stop: function () {
      this.done = !0;
      var rootRecord = this.tryEntries[0].completion;
      if ("throw" === rootRecord.type) throw rootRecord.arg;
      return this.rval;
    },
    dispatchException: function (exception) {
      if (this.done) throw exception;
      var context = this;
      function handle(loc, caught) {
        return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught;
      }
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i],
          record = entry.completion;
        if ("root" === entry.tryLoc) return handle("end");
        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc"),
            hasFinally = hasOwn.call(entry, "finallyLoc");
          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
          } else {
            if (!hasFinally) throw new Error("try statement without catch or finally");
            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
          }
        }
      }
    },
    abrupt: function (type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }
      finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null);
      var record = finallyEntry ? finallyEntry.completion : {};
      return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record);
    },
    complete: function (record, afterLoc) {
      if ("throw" === record.type) throw record.arg;
      return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel;
    },
    finish: function (finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel;
      }
    },
    catch: function (tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if ("throw" === record.type) {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }
      throw new Error("illegal catch attempt");
    },
    delegateYield: function (iterable, resultName, nextLoc) {
      return this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      }, "next" === this.method && (this.arg = undefined), ContinueSentinel;
    }
  }, exports;
}
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}
function _asyncToGenerator(fn) {
  return function () {
    var self = this,
      args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);
      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }
      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }
      _next(undefined);
    });
  };
}
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}
function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _toPrimitive(input, hint) {
  if (typeof input !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (typeof res !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");
  return typeof key === "symbol" ? key : String(key);
}

var forceArray = function forceArray(input) {
  if (Array.isArray(input)) return input || [];
  return [input] || [];
};

var setBacktick = function setBacktick(tableOrColumn) {
  if (/`/g.test(tableOrColumn)) return tableOrColumn;
  return tableOrColumn.split('.').map(function (item) {
    return "`".concat(item, "`");
  }).join('.');
};

var defaultOptions = {
  select: {
    distinct: false,
    columns: '*' ,
    table: '',
    join: {
      type: null,
      on: {
        a: null,
        b: null
      },
      outer: false
    } || '',
    where: null,
    limit: null,
    offset: null,
    groupBy: null,
    orderBy: [null, 'ASC'],
    params: [],
    mountOnly: false
  },
  insert: {
    table: '',
    columns: [],
    values: [],
    mountOnly: false
  },
  update: {
    table: '',
    set: [],
    where: null,
    limit: null,
    params: [],
    mountOnly: false
  }
};

var MySQL = /*#__PURE__*/function () {
  function MySQL(credentials) {
    _classCallCheck(this, MySQL);
    _defineProperty(this, "verbose", void 0);
    _defineProperty(this, "credentials", void 0);
    _defineProperty(this, "connection", void 0);
    this.verbose = false;
    this.credentials = credentials;
    this.connection = promise.createPool(this.credentials);
  }
  _createClass(MySQL, [{
    key: "connect",
    value: function connect() {
      try {
        if (!(this !== null && this !== void 0 && this.connection)) this.connection = promise.createPool(this.credentials);
        return true;
      } catch (error) {
        this.verbose && console.error(error);
        return false;
      }
    }
  }, {
    key: "select",
    value: function () {
      var _select = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(options) {
        var defaults, params, distinct, columns, table, join, where, groupBy, orderBy, limit, offset, query, _yield$this$connectio, _yield$this$connectio2, rows;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              this.connect();
              defaults = _objectSpread2(_objectSpread2({}, defaultOptions.select), options);
              params = defaults.params;
              distinct = defaults.distinct ? 'DISTINCT ' : '';
              columns = typeof defaults.columns === 'string' ? defaults.columns : defaults.columns.map(function (column) {
                return setBacktick(column);
              }).join(', ');
              table = setBacktick(defaults.table);
              join = forceArray(defaults.join).map(function (currentJoin) {
                var _currentJoin$on, _currentJoin$on2;
                return currentJoin !== null && currentJoin !== void 0 && (_currentJoin$on = currentJoin.on) !== null && _currentJoin$on !== void 0 && _currentJoin$on.a && currentJoin !== null && currentJoin !== void 0 && (_currentJoin$on2 = currentJoin.on) !== null && _currentJoin$on2 !== void 0 && _currentJoin$on2.b ? " ".concat(currentJoin.type.toUpperCase()).concat(currentJoin !== null && currentJoin !== void 0 && currentJoin.outer ? ' OUTER' : '', " JOIN ").concat(setBacktick(currentJoin.table), " ON ").concat(setBacktick(currentJoin.on.a), " = ").concat(setBacktick(currentJoin.on.b)) : '';
              }).join('');
              where = defaults.where ? " WHERE ".concat(defaults.where) : '';
              groupBy = defaults.groupBy ? " GROUP BY ".concat(setBacktick(defaults.groupBy)) : '';
              orderBy = defaults.orderBy[0] ? " ORDER BY ".concat(setBacktick(defaults.orderBy[0]), " ").concat((defaults === null || defaults === void 0 ? void 0 : defaults.orderBy[1]) || 'ASC') : '';
              limit = defaults.limit ? " LIMIT ".concat(defaults.limit) : '';
              offset = defaults !== null && defaults !== void 0 && defaults.offset ? defaults.offset > 0 ? " OFFSET ".concat(defaults.offset) : '' : '';
              query = "SELECT ".concat(distinct).concat(columns, " FROM ").concat(table).concat(join).concat(where).concat(groupBy).concat(orderBy).concat(limit).concat(offset).concat(!defaults.mountOnly ? ';' : '');
              if (!defaults.mountOnly) {
                _context.next = 16;
                break;
              }
              return _context.abrupt("return", {
                query: query,
                params: params
              });
            case 16:
              this.verbose && console.log(query, params);
              _context.next = 19;
              return this.connection.execute(query, params);
            case 19:
              _yield$this$connectio = _context.sent;
              _yield$this$connectio2 = _slicedToArray(_yield$this$connectio, 1);
              rows = _yield$this$connectio2[0];
              if (!(defaults.limit === 1)) {
                _context.next = 24;
                break;
              }
              return _context.abrupt("return", rows[0] || false);
            case 24:
              return _context.abrupt("return", rows || false);
            case 27:
              _context.prev = 27;
              _context.t0 = _context["catch"](0);
              this.verbose && console.error(_context.t0);
              return _context.abrupt("return", false);
            case 31:
            case "end":
              return _context.stop();
          }
        }, _callee, this, [[0, 27]]);
      }));
      function select(_x) {
        return _select.apply(this, arguments);
      }
      return select;
    }()
  }, {
    key: "insert",
    value: function () {
      var _insert = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(options) {
        var defaults, set, table, columns, values, params, query, _yield$this$connectio3, _yield$this$connectio4, results;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              this.connect();
              defaults = _objectSpread2(_objectSpread2({}, defaultOptions.insert), options);
              set = {
                columns: [],
                values: [],
                params: []
              };
              forceArray(defaults.values).forEach(function (insertion) {
                var _Object$keys;
                console.log(insertion);
                var totalColumns = Object === null || Object === void 0 ? void 0 : (_Object$keys = Object.keys(insertion)) === null || _Object$keys === void 0 ? void 0 : _Object$keys.length;
                var bindValues = Array(totalColumns).fill('?');
                set.values.push("(".concat(bindValues.join(', '), ")"));
                for (var column in insertion) {
                  !set.columns.includes(setBacktick(column)) && set.columns.push(setBacktick(column));
                  set.params.push(insertion[column]);
                }
              });
              table = setBacktick(defaults.table);
              columns = set.columns.join(', ');
              values = set.values.join(', ');
              params = set.params;
              query = "INSERT INTO ".concat(table, " (").concat(columns, ") VALUES ").concat(values, ";");
              if (!defaults.mountOnly) {
                _context2.next = 12;
                break;
              }
              return _context2.abrupt("return", {
                query: query,
                params: params
              });
            case 12:
              this.verbose && console.log(query, params);
              _context2.next = 15;
              return this.connection.execute(query, params);
            case 15:
              _yield$this$connectio3 = _context2.sent;
              _yield$this$connectio4 = _slicedToArray(_yield$this$connectio3, 1);
              results = _yield$this$connectio4[0];
              return _context2.abrupt("return", (results === null || results === void 0 ? void 0 : results['insertId']) || false);
            case 21:
              _context2.prev = 21;
              _context2.t0 = _context2["catch"](0);
              this.verbose && console.error(_context2.t0);
              return _context2.abrupt("return", false);
            case 25:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this, [[0, 21]]);
      }));
      function insert(_x2) {
        return _insert.apply(this, arguments);
      }
      return insert;
    }()
  }, {
    key: "update",
    value: function () {
      var _update = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(options) {
        var defaults, set, column, table, where, limit, params, query, _yield$this$connectio5, _yield$this$connectio6, results, result;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              this.connect();
              defaults = _objectSpread2(_objectSpread2({}, defaultOptions.update), options);
              set = {
                columns: [],
                params: []
              };
              for (column in defaults.set) {
                set.columns.push("".concat(setBacktick(column), " = ?"));
                set.params.push(defaults.set[column]);
              }
              table = setBacktick(defaults.table);
              where = defaults.where ? " WHERE ".concat(defaults.where) : '';
              limit = defaults.limit ? " LIMIT ".concat(defaults.limit) : '';
              params = [].concat(_toConsumableArray(set.params), _toConsumableArray(defaults.params));
              query = "UPDATE ".concat(table, " SET ").concat(set.columns.join(', ')).concat(where).concat(limit, ";");
              if (!defaults.mountOnly) {
                _context3.next = 12;
                break;
              }
              return _context3.abrupt("return", {
                query: query,
                params: params
              });
            case 12:
              this.verbose && console.log(query, params);
              _context3.next = 15;
              return this.connection.execute(query, params);
            case 15:
              _yield$this$connectio5 = _context3.sent;
              _yield$this$connectio6 = _slicedToArray(_yield$this$connectio5, 1);
              results = _yield$this$connectio6[0];
              result = (results === null || results === void 0 ? void 0 : results['affectedRows']) || false;
              return _context3.abrupt("return", result);
            case 22:
              _context3.prev = 22;
              _context3.t0 = _context3["catch"](0);
              this.verbose && console.error(_context3.t0);
              return _context3.abrupt("return", false);
            case 26:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this, [[0, 22]]);
      }));
      function update(_x3) {
        return _update.apply(this, arguments);
      }
      return update;
    }()
  }, {
    key: "getConnection",
    value: function () {
      var _getConnection = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              _context4.prev = 0;
              this.connect();
              return _context4.abrupt("return", this.connection.getConnection() || false);
            case 5:
              _context4.prev = 5;
              _context4.t0 = _context4["catch"](0);
              this.verbose && console.error(_context4.t0);
              return _context4.abrupt("return", false);
            case 9:
            case "end":
              return _context4.stop();
          }
        }, _callee4, this, [[0, 5]]);
      }));
      function getConnection() {
        return _getConnection.apply(this, arguments);
      }
      return getConnection;
    }()
  }, {
    key: "end",
    value: function () {
      var _end = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              _context5.prev = 0;
              _context5.next = 3;
              return this.connection.end();
            case 3:
              return _context5.abrupt("return", true);
            case 6:
              _context5.prev = 6;
              _context5.t0 = _context5["catch"](0);
              this.verbose && console.error(_context5.t0);
              return _context5.abrupt("return", false);
            case 10:
            case "end":
              return _context5.stop();
          }
        }, _callee5, this, [[0, 6]]);
      }));
      function end() {
        return _end.apply(this, arguments);
      }
      return end;
    }()
  }, {
    key: "setBacktick",
    value: function setBacktick$1(tableOrColumn) {
      return setBacktick(tableOrColumn);
    }
  }]);
  return MySQL;
}();

exports.MySQL = MySQL;
