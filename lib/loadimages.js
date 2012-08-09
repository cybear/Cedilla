/*globals define, console*/
define(
  ['urltoimg'],
  function(urltoimg){
    "use strict";
    return function(urls, success){
      var imgs, counter=0;

      function isEverythingDone(){
        counter++;
        console.log('Loaded '+counter+' of '+urls.length+': '+this.src+' '+this.width+'*'+this.height);
        if(counter == urls.length) {
            success(imgs);
        }
      }

      function urlToImgWithCheck(url){
        return urltoimg(url, isEverythingDone);
      }

      console.log('Attempting to load '+urls.length+' images...');
      imgs = urls.map(urlToImgWithCheck);
  };
});