function memoize(fn) {
   var table = {};
   return function(a) {
     if (table[a] !== undefined) {
       return table[a];
     }
     else {
       var result = fn.apply(this, arguments);
       table[a] = result;
       return result;
     }
  };
}
