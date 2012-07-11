// todo: Use Int16Array when available
define(
  ['ç','luminance'],
  function(ç, luminance){
    ç.prototype.histogram = function(){
      console.time('histogram');
      function arrayWithZeroes(size){
        var i, arr = Array(size);
        for(i=0; i<256; i++)arr[i]=0;
        return arr;
      }
      var i, tmp_luminance, 
        histogram_r = arrayWithZeroes(256), 
        histogram_g = arrayWithZeroes(256), 
        histogram_b = arrayWithZeroes(256), 
        histogram_a = arrayWithZeroes(256), 
        histogram_l = arrayWithZeroes(256), 
        imageData = this.getData(), data=imageData.data;

      // populate
      for(i = 0; i < data.length; i+=4){
        histogram_r[ data[i+0] ]++;
        histogram_g[ data[i+1] ]++;
        histogram_b[ data[i+2] ]++;
        histogram_a[ data[i+3] ]++;
        tmp_luminance = luminance(data[i],data[i+1],data[i+2]); // todo: take alpha into consideration
        histogram_l[tmp_luminance]++;
      }
      console.timeEnd('histogram');
      return {
        red:histogram_r,
        green:histogram_g,
        blue:histogram_b,
        alpha:histogram_a,
        luminance:histogram_l
      };
    };
  }
);