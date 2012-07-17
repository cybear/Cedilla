/*globals define, Image*/
define(
  function(){
    "use strict";
    function urlToImgElement(url, success){
        var el=new Image();
        el.src=url;
        el.onload=success;
        return el;
    }
    return urlToImgElement;
  });