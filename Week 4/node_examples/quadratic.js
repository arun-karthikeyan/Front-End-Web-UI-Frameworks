var disc = require('./discriminant');

module.exports = function(a, b, c, next){
  if(a==0){
    return next(new Error("'a' should not be zero"));
  }else if(disc(a,b,c)<0){
    return next(new Error("'discriminant' is lesser than zero, only imaginary roots possible"));
  }else{
    return next(null, {
      root1: function(){
        return (-b - Math.sqrt(disc(a,b,c)))/(2*a);
      },
      root2: function(){
        return (-b + Math.sqrt(disc(a,b,c)))/(2*a);
      }

    });
  }
}
