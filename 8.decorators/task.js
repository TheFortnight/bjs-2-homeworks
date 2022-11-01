function cachingDecoratorNew(func) {
  const cache = [];

  function wrapper(...args) {
    const hash = args.join(",");
    let objectInCache = cache.find((item) => item.name === hash);
    console.log("objectInCache: " + objectInCache);
    if (objectInCache) {
      console.log("returning cached result: " + objectInCache.result);
      return "Из кэша: " + objectInCache.result;
    }
    let calcRes = func(...args);
    if (cache.length === 5) {
      console.log("first position removed from cache");
      cache.shift;
    }
    cache.push({
      "name": hash,
      "result": calcRes
    });
    console.log("Вычисляем: " + calcRes);
    return ("Вычисляем: " + calcRes);
  }
  return wrapper;
}


function debounceDecoratorNew(func, delay) {
  let timeoutId = null;

  function wrapper(...args) {
    ++wrapper.allCount;
    if (!timeoutId) {
      console.log(func(...args), ++wrapper.count);
      console.log("callback called");
      timeoutId = setTimeout(() => {  
        console.log(func(...args), ++wrapper.count);
        console.log("delayed callback called");
      }, delay);
    } else if (timeoutId) {
      console.log("current timer cleared");
      clearTimeout(timeoutId);
      console.log("creating new timeout");
      timeoutId = setTimeout(() => {
        console.log(func(...args), ++wrapper.count);
        console.log("delayed callback called");
      }, delay);
    }

  }
  wrapper.count = 0;
  wrapper.allCount = 0;
  return wrapper;

}