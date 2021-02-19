Array.prototype.max = function() {
  return Math.max.apply(null, this);
};

Array.prototype.min = function() {
  return Math.min.apply(null, this);
};

Array.prototype.sd = function(){
   var i,j,total = 0, mean = 0, diffSqredArr = [];
   for(i=0;i<this.length;i+=1){
       total+=this[i];
   }
   mean = total/this.length;
   for(j=0;j<this.length;j+=1){
       diffSqredArr.push(Math.pow((this[j]-mean),2));
   }
   return (Math.sqrt(diffSqredArr.reduce(function(firstEl, nextEl){
            return firstEl + nextEl;
          })/this.length)).toFixed(2);
};

Array.prototype.average = function(){
   var i,j,total = 0, mean = 0, diffSqredArr = [];
   for(i=0;i<this.length;i+=1){
       total+=this[i];
   }
   mean = total/this.length;
   return (mean).toFixed(2);
};

Array.prototype.to_s = function(){
  return this.join('');
};

// TODO

Array.prototype.cartesian = function(){
  return this.reduce(function(a,b){
      return a.map(function(x){
          return b.map(function(y){
              return x.concat(y);
          })
      }).reduce(function(a,b){ return a.concat(b) },[])
  }, [[]])
};
