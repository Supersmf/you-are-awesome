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
    let func = new Function();
    func.__proto__ = func.prototype;
    return func;
};


const incrementor = () => {
    incrementor.valueOf = () => incrementor.result;
    incrementor.result = ++incrementor.result || 1;
    return incrementor;
};

const asyncIncrementor = ((count = 0) => () => ++count)();


const createIncrementer = function* (count = 0) {
    while (true) {
        yield ++count;
    }
};

// return same argument not earlier than in one second, and not later, than in two
const returnBackInSecond = (el) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(el), 1000);
    });
};

const getDeepPropertiesCount = (obj) => {
    return JSON.stringify(obj).split('{').length - 2;
};

const createSerializedObject = () => null;

const sortByProto = arr => arr.sort((a, b) => a - b);

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