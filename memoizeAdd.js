function memoize(fn){
    const cache = new Map();
    return function (...args){
        const key = args.toString();
        console.log('fn called with' + key);
        console.log(cache);
        if (cache.has(key)){
            return cache.get(key);
        }
        cache.set(key, fn(...args));
        return cache.get(key);
    };
}

function add(a,b){
    return a+b
    
}

function time(fn){
    console.time();
    fn();
    console.timeEnd();
}

var addM = memoize(add);

time(() => addM(100,100));
console.log(addM(100,100));
time(() => addM(100,100));
console.log(addM(100,100));
time(() => addM(300,100));
console.log(addM(300,100));
time(() => addM(300,100));
console.log(addM(300,100));
