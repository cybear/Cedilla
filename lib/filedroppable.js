/*globals define,console,FileReader*/
// much of the code taken from the nice example:
// 'Canvas - The Cure' by Robert Nyman
// http://robertnyman.com/2011/03/10/using-html5-canvas-drag-and-drop-and-file-api-to-offer-the-cure/
define(
  function(){
    "use strict";
    function fileDroppable(el, success){
      el.addEventListener("dragover", function (e) {e.preventDefault();}, false);
      el.addEventListener("drop", function(e) {
        var file, reader, total=0, imgs=[], files = e.dataTransfer.files;

        function isEverythingDone(e){
          imgs.push(e.target.result);
          console.log('Loaded '+imgs.length+' of '+total);
          if(imgs.length == total) success(imgs);
        }
        e.preventDefault();
        if (typeof FileReader !== "undefined") {
          for(var i=0;i<files.length;i++){
            file=files[i];
            // Note: addEventListener doesn't work in Google Chrome for this event
            reader = new FileReader();
            reader.onload = isEverythingDone;
            if(file.type.indexOf("image") != -1) {
              total++;
              reader.readAsDataURL(file);
            }
          }
        }
      }, false);
    };
    return fileDroppable;
  }
);