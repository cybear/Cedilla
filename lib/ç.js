/*globals define,document,Image */
define(function(){
  "use strict";
  function ç(arg1,arg2){
    if(!(this instanceof ç)) return new ç(arg1,arg2);
    if(arg1 instanceof Image){
      this.img=arg1;
      this.w=arg1.width;
      this.h=arg1.height;
    } else if(arg1 && arg1.nodeName==='CANVAS'){
      this.el=arg1;
      this.w=arg1.width;
      this.h=arg1.height;
    } else {
      this.w=arg1;
      this.h=arg2;
    }
    if(!this.el){
      var el=document.createElement('canvas');
      el.setAttribute('width', this.w);
      el.setAttribute('height', this.h);
      this.el=el;
    }
    this.cx=this.el.getContext('2d');
    if(this.img){
      this.cx.drawImage(this.img, 0, 0);
    }
  }
  ç.prototype.getData=function(){
    return this.cx.getImageData(0,0,this.w,this.h);
  };
  ç.prototype.putData=function(data){
    this.cx.putImageData(data,0,0);
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
  return ç;
});