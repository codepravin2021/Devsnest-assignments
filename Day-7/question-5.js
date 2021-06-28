var cylinder = {
 volume : function (h,r){
   var volume = h*3.14*r*r;
   return volume.toFixed(4);
}
}
console.log(cylinder.volume(20,3));