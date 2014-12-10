**Not updated anymore. Use at own risk.**

# cedilla |səˈdilə|

"a mark ( ¸ ) written under the letter c, esp. in French, to show that it is pronounced like an s rather than a k (e.g., façade)."

### About Cedilla

Cedilla is a canvas microlibrary. It is built using the Asynchronous Module Definition (AMD) so you can include only what you need.
Cedilla has an image loader, histogram, pixel filters, and supports drag and drop photos from the desktop.

### Usage

(examples/monochrome.html)

```javascript
require(
  {baseUrl:'../lib/'},
  ['ç', 'filters', 'loadimages'],
  function(ç, filters, loadimages){
    "use strict";
    loadimages(['Lenna.png'], function(imgs){
      var img = imgs[0], 
        myCanvas = ç(img);
      myCanvas.applyPixelFilter(filters.monochrome);
      document.body.appendChild(myCanvas.toImage());
  });
});
```

### Name

I wanted a short variable name that would be short for canvas - but "c" is obviously often already taken.
The character "ç" is easily accessible on a Mac keyboard (alt+c). The little mark under the c is called a cedilla, thus the name of this library. 
Admittingly, if you would spell canvas with ç, it would be pronounced |ˈsanvəs|. The author approves of this pronounciation.


## License

MIT: http://tap5.mit-license.org/
