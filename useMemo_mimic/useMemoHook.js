const useMemo = (() => {
  let cache = {};
  let previousDependency = null;

  /*
  arg1: function to be memoised
  arg2: dependencies 
  */
  return (func, dependency = []) => {
    let key = dependency.length > 0 ? dependency.join('_') : '_';

    // check if we have a previous dependency defined, if not it's the first time calculate, store it in cache and return
    if (!previousDependency) {
      previousDependency = dependency;
      let val = func();
      cache[key] = val;
      console.log('calculated');
      console.log(cache[key]);
      return cache[key];
    }

    // check if the previous dependency and current dependency are different
    let hasDependencyChanged = false;
    for (let i = 0; i < dependency.length; i++) {
      if (dependency[i] !== previousDependency[i]) {
        hasDependencyChanged = true;
        break;
      }
    }

    // if yes recalculate, store it in cache and return
    if (hasDependencyChanged) {
      previousDependency = dependency;
      let val = func();
      cache[key] = val;
      console.log('re-calculated');
      console.log(cache[key]);
      return cache[key];
    }

    // else return from cache
    console.log('returned from cache');
    console.log(cache[key]);
    return cache[key];
  };
})();

const expensiveCalculation = (a, b) => {
  // intentionally making the function slow to visualize to advantage of cache
  const start = Date.now();
  while (Date.now() < start + 2000) {}

  return a + b;
};

let a = 1;
let b = 2;
let val1 = useMemo(() => expensiveCalculation(a, b), [a, b]);
let val2 = useMemo(() => expensiveCalculation(a, b), [a, b]);
let val3 = useMemo(() => expensiveCalculation(a, b), [a, b]);
a = 3;
let val4 = useMemo(() => expensiveCalculation(a, b), [a, b]);

// let c = 6;
// let d = 7;
// let va1 = useMemo(() => expensiveCalculation(c, d), []);
// let va2 = useMemo(() => expensiveCalculation(c, d), []);
// let va3 = useMemo(() => expensiveCalculation(c, d), []);
// c = 9;
// let va4 = useMemo(() => expensiveCalculation(c, d), []);
