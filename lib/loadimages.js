define(
  function(){
    "use strict";
    return function(urls, success){
      var imgs, counter=0;

      function isEverythingDone(){
        counter++;
        console.log('Loaded '+counter+' of '+urls.length+': '+this.src+' '+this.width+'*'+this.height);
        if(counter == urls.length) {
            console.timeEnd('loadimages');
            success(imgs);
        }
      }

      function urlToImgElement(url){
          var el=new Image();
          el.src=url;
          el.onload=isEverythingDone;
          return el;
      }

      console.log('Attempting to load '+urls.length+' images...');
      console.time('loadimages');
      imgs = urls.map(urlToImgElement);
  }
});