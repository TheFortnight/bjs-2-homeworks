function cachingDecoratorNew(func) {
  const cache = [];

  function wrapper(...args) {
    const hash = args.join(",");
    let objectInCache = cache.find((item) => item.name === hash);
    if (objectInCache) {
      return "Из кэша: " + objectInCache.result;
    }
    let calcRes = func(...args);
    if (cache.length === 5) {
      cache.shift;
    }
    cache.push({
      "name": hash,
      "result": calcRes
    });
    return ("Вычисляем: " + calcRes);
  }
  return wrapper;
}


function debounceDecoratorNew(func, delay) {
  let timeoutId = null;

  function wrapper(...args) {
    ++wrapper.allCount;
    if (!timeoutId) {
      func(...args);
      wrapper.count++;
      timeoutId = setTimeout(() => {  
        func(...args);
        wrapper.count++;
      }, delay);
    } else if (timeoutId) {
      console.log("current timer cleared");
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        func(...args);
        wrapper.count++;
      }, delay);
    }

  }
  wrapper.count = 0;
  wrapper.allCount = 0;
  return wrapper;

}