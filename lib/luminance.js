/*globals define*/
define(function(){
  function luminance(r,g,b){
    return 0.2126*r + 0.7152*g + 0.0722*b;
  }
  return luminance;
});