/*globals define*/
define(
  ['ç','luminance'],
  function(ç, luminance){
    "use strict";

    ç.prototype.applyPixelFilter=function(pixelFilter){
      var i, vals, imageData = this.getData(), data=imageData.data;
      for(i = 0; i < data.length; i+=4){
        vals=pixelFilter(data[i+0], data[i+1], data[i+2], data[i+3]);
        data[i+0]=vals[0];
        data[i+1]=vals[1];
        data[i+2]=vals[2];
        data[i+3]=vals[3];
      }
      this.putData(imageData);
      return this;
    };

    return {
      monochrome:function(r,g,b,a){
        var grey=luminance(r,g,b);
        return [grey, grey, grey, a];
      },
      rotatePalette:function(r,g,b,a){
        return [b,r,g,a];
      },
      invert:function(r,g,b,a){
        return [256-r, 256-g, 256-b, a];
      }
    };
  }
);
