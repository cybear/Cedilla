# cedilla |səˈdilə|

"a mark ( ¸ ) written under the letter c, esp. in French, to show that it is pronounced like an s rather than a k (e.g., façade)."

### Cedilla?

Cedilla is a canvas microlibrary. 

### naming

I wanted a short variable name that would be short for canvas - but "c" is obviously often already taken.
The character "ç" is easily accessible on a Mac keyboard (alt+c). The little mark under the c is called a cedilla, thus the name of this library. 
Admittingly, if you would spell canvas with ç, it would be pronounced |ˈsanvəs|. The author approves of this pronounciation.

### Usage

require(
  ['ç','filters','loadimages'],
  function(ç, filters, loadimages){
    "use strict";
    loadimages(['Lenna.png'], function(imgs){
      // importing an image, converting to greyscale
      var myCanvas = ç(320, 240);
      myCanvas.drawImage(imgs[0]);
      myCanvas.applyPixelFilter(filters.monochrome);
      document.body.appendChild(myCanvas.toImage());
    }
  }
);

## License

MIT: http://tap5.mit-license.org/
