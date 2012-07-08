"use strict";
function luminance(r,g,b){
  return 0.2126*r + 0.7152*g + 0.0722*b;
}

define({
  monochrome:function(r,g,b,a){
    var grey=luminance(r,g,b);
    return [grey, grey, grey, a];
  },
  cutDarks:function(r,g,b,a){
    var bw = (luminance(r,g,b) < 127) ? 0 : 255;
    return [r,g,b,bw];
  },
  cutLights:function(r,g,b,a){
    var bw = (luminance(r,g,b) < 127) ? 255 : 0;
    return [r,g,b,bw];
  },
  fillWithGrey:function(luminance){
    return function(r,g,b,a){
      return[luminance,luminance,luminance,a];
    }
  },
  fillWithColor:function(new_r,new_g,new_b){
    return function(r,g,b,a){
      return[new_r,new_g,new_b,a];
    }
  }
});
