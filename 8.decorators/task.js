function cachingDecoratorNew(func) {
  const cache = [];
  function wrapper(...args){
    const hash = args.join(",");
    let objectInCache = cache.find((item) => item.name === hash);
    console.log("objectInCache: "+objectInCache);
    if(typeof objectInCache != "undefined"){
      console.log("returning cached result: "+objectInCache.result);
      return "Из кэша: " + objectInCache.result;
    }
    let calcRes = func(...args);
    if(cache.length === 5){
      console.log("first position removed from cache");
      cache.shift[0];
    }
    cache.push({"name": hash, "result": calcRes});
    console.log("Вычисляем: " + calcRes);
    return ("Вычисляем: " + calcRes);
  }
  return wrapper;
}


function debounceDecoratorNew(func, delay){
  let timeoutId = null;
  let count = 0;
  let allCount = 0;
  return function wrapper(...args){
    if(timeoutId){
      console.log("current timer cleared ", ++allCount);
      Function.prototype.allCount = allCount;
      clearTimeout(timeoutId);
    }
    console.log("creating new timeout");
    timeoutId = setTimeout(() => {
      console.log(func(...args),  ++count, ++allCount);
      console.log("callback called");
    }, delay);
    Function.prototype.count = count;
    
   return wrapper;
  }
  
}

