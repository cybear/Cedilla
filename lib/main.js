require(
  ['ç','filters','loadimages'],
  function(ç, filters, loadimages){
    "use strict";

    var urls=[
      'img/1.JPG',
      'img/2.JPG',
      'img/3.JPG',
      'img/4.JPG',
      'img/5.JPG'
      ];

    loadimages(urls, function(imgs){
      var w=imgs[0].width, h=imgs[0].height;

      imgs.forEach(function(img){
        if(img.width!==w || img.height!==h) throw("Images not same size");
      });

      var filteredArray = imgs.map(function(img, i){
        var c=new ç(w,h);
        c.drawImage(img);
        c.applyPixelFilter(filters.cutDarks);
        var color=i*50;
        c.applyPixelFilter(filters.fillWithColor(color, color, color));
        console.log(c.toImage());
        return c;
      });

      var resultingCanvas = new ç(w,h);
      filteredArray.forEach(function(filteredImg, i){
        if(i==0){
          //resultingCanvas.cx.fillRect(0,0,0,0);
        }else{
          resultingCanvas.applyTransparentImage(filteredImg);
        }
      });
      document.body.appendChild(resultingCanvas.toImage());
    });
  }
);