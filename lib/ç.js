/*globals document, console*/
define(function(){
  "use strict";
  function ç(w,h){
    if(!(this instanceof ç)) return new ç(w,h);
    this.w=w||1024;
    this.h=h||768;
    this.el=document.createElement('canvas');
    this.el.setAttribute('width', this.w);
    this.el.setAttribute('height', this.h);
    this.cx=this.el.getContext('2d');
  }
  ç.prototype.getData=function(){
    return this.cx.getImageData(0,0,this.w,this.h);
  };
  ç.prototype.putData=function(data){
    this.cx.putImageData(data,0,0);
  };
  ç.prototype.applyPixelFilter=function(pixelFilter){
    console.time('applyPixelFilter');
    var i, vals, imageData = this.getData(), data=imageData.data;
    for(i = 0; i < data.length; i+=4){
      vals=pixelFilter(data[i+0], data[i+1], data[i+2], data[i+3]);
      data[i+0]=vals[0];
      data[i+1]=vals[1];
      data[i+2]=vals[2];
      data[i+3]=vals[3];
    }
    this.putData(imageData);
    console.timeEnd('applyPixelFilter');
    return this;
  };
  ç.prototype.fill=function(color){
    this.cx.fillStyle=color;
    this.cx.fillRect(0,0,this.w,this.h);
  };
  ç.prototype.drawImage=function(img){
    this.cx.drawImage(img, 0, 0);
  };
  ç.prototype.toDataURL=function(mimetype){
    return this.el.toDataURL(mimetype);
  };
  ç.prototype.toImage=function(){
    var img=document.createElement('img');
    img.src=this.toDataURL();
    return img;
  };
  // to be deleted:
  ç.prototype.applyTransparentImage=function(c){
    console.time('applyTransparentImage');
    var i, imageData = this.getData(), data=imageData.data;
    var newData=c.getData().data;
    for(i = 0; i < data.length; i+=4){
      if(newData[i+3]==255){
        data[i+0]=newData[i+0];
        data[i+1]=newData[i+1];
        data[i+2]=newData[i+2];
        data[i+3]=255;
      }
    }
    this.putData(imageData);
    console.timeEnd('applyTransparentImage');
  };
  return ç;
});