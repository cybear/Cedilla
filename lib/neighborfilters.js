define(
  ['ç'],
  function(ç){
    "use strict";

    ç.prototype.applyPixelNeighborFilter=function(pixelNeighborFilter){
      var i, x, y, vals, neighbors, imageData=this.getData(), data=imageData.data,
        offset_up=-imageData.width*4, offset_down=imageData.width*4,
        offset_right=4,
        offset_left=-4,
        result=ç(imageData.width, imageData.height).getData();
      for(y=0; y<imageData.height; y++){
        for(x=0;x<imageData.width; x++){
          i=(y*imageData.width+x)*4;
          if(x===0||x===imageData.width||y===0||y===imageData.height){
            // not enough neighbors, just copy
            result.data[i]=data[i];
            result.data[i+1]=data[i+1];
            result.data[i+2]=data[i+2];
            result.data[i+3]=data[i+3];
          }else{
            vals=pixelNeighborFilter(
              [ data[i+0], data[i+1], data[i+2], data[i+3] ],
              [ data[i+offset_up+0], data[i+offset_up+1], data[i+offset_up+2], data[i+offset_up+3] ],
              [ data[i+offset_right+0], data[i+offset_right+1], data[i+offset_right+2], data[i+offset_right+3] ],
              [ data[i+offset_down+0], data[i+offset_down+1], data[i+offset_down+2], data[i+offset_down+3] ],
              [ data[i+offset_left+0], data[i+offset_left+1], data[i+offset_left+2], data[i+offset_left+3] ]
            );
            result.data[i]=vals[0];
            result.data[i+1]=vals[1];
            result.data[i+2]=vals[2];
            result.data[i+3]=vals[3];
          }
        }
      }
      this.putData(result);
    };

    return{
      blur:function(px, px_up, px_left, px_down, px_right){
        return [
          (px_up[0]+px_down[0]+px_left[0]+px_right[0])/4,
          (px_up[1]+px_down[1]+px_left[1]+px_right[1])/4,
          (px_up[2]+px_down[2]+px_left[2]+px_right[2])/4,
          (px_up[3]+px_down[3]+px_left[3]+px_right[3])/4
        ];
      },
      sharpen:function(px, px_up, px_left, px_down, px_right){
        return [
          px[0]*2-(px_up[0]+px_down[0]+px_left[0]+px_right[0])/4,
          px[1]*2-(px_up[1]+px_down[1]+px_left[1]+px_right[1])/4,
          px[2]*2-(px_up[2]+px_down[2]+px_left[2]+px_right[2])/4,
          px[3]*2-(px_up[3]+px_down[3]+px_left[3]+px_right[3])/4
        ];
      }
    };
  }
);
