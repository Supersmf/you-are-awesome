// DO WHATEVER YOU WANT HERE

const createEnumerableProperty = () => { };

const createNotEnumerableProperty = (e) => {
    Object.defineProperty(Object.prototype, e, {
        enumerable: false,
        get: () => Object.prototype.e,
        set: (value) => Object.prototype.e = value
    });
    return e;
};


const createProtoMagicObject = () => {
    let res = Object.create(Object);
    res.__proto__ = res.protorype;
    return res;
};

//const magicObj = createProtoMagicObject();

//console.log(typeof magicObj); //, 'object');
//console.log(magicObj.__proto__); //, magicObj.prototype);
//console.log(magicObj.prototype); //, magicObj.prototype);

const incrementor = () => {
    incrementor.valueOf = () => incrementor.result;
    incrementor.result = ++incrementor.result || 1;
    return incrementor;
};

const asyncIncrementor = ((count = 0) => () => ++count)();


const createIncrementer = () => {};

// return same argument not earlier than in one second, and not later, than in two
const returnBackInSecond = () => {};
const getDeepPropertiesCount = () => {};
const createSerializedObject = () => {};
const toBuffer = () => {};
const sortByProto = () => {};

exports.createEnumerableProperty = createEnumerableProperty;
exports.createNotEnumerableProperty = createNotEnumerableProperty;
exports.createProtoMagicObject = createProtoMagicObject;
exports.incrementor = incrementor;
exports.asyncIncrementor = asyncIncrementor;
exports.createIncrementer = createIncrementer;
exports.returnBackInSecond = returnBackInSecond;
exports.getDeepPropertiesCount = getDeepPropertiesCount;
exports.createSerializedObject = createSerializedObject;
exports.sortByProto = sortByProto;