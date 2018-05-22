'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/**
 * 获取mix的类型
 * @param {*} mix
 */
function getTypes(mix) {
  var typeStr = Object.prototype.toString.apply(mix);
  var nativeType = typeStr.slice(8, typeStr.length - 1);
  return nativeType;
}

var baseType = ['String', 'Number'];

function empty(mix) {
  var type = getTypes(mix);
  if (baseType.indexOf(type) !== -1) {
    return !!mix;
  }
  if (mix instanceof Array) {
    return !!mix.length;
  }
  if (mix instanceof Object) {
    return !!Object.keys(mix).length;
  }
  return false;
}

function range() {
  var min = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var max = arguments[1];

  var arr = [];
  for (var i = min; i < max; i += 1) {
    arr.push(i);
  }
  return arr;
}

/**
 * todo:
 * 1. 支持普通调用
 * 2. 支持vue插件
 * 3. 支持react
 * 4. 支持浏览器环境
 */

exports.empty = empty;
exports.range = range;
