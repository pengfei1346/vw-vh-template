var getPrimitiveDataType=function (obj){
    return (obj === null) ? "null" :typeof obj;
}
var isObject=function(obj){
    return typeof(obj) === 'object';
}
var isString=function(obj){
    return typeof(obj) === 'string';
}
var isNumber=function(obj){
    return typeof(obj) === 'number';
}
var isBoolean=function(obj){
    return typeof(obj) === 'boolean';
}
var isSymbol=function (obj){
    return typeof(obj) === 'symbol';
}
var isFunction=function(obj){
    return typeof(obj) === 'function';
}
var isArr=function(obj){
    return obj.constructor === 'Array';
}

exports.values = function(){
    return {
        getPrimitiveDataType: getPrimitiveDataType,
        isObject: isObject,
        isString: isString,
        isNumber: isNumber,
        isBoolean: isBoolean,
        isSymbol: isSymbol,
        isFunction: isFunction,
        isArr: isArr
    }
}