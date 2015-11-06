
<!-- Begin
// Set slideShowSpeed (milliseconds)
var slideShowSpeed = 3500;
// Duration of crossfade (seconds)
var crossFadeDuration = 4000;
// Specify the image files
var Pic = new Array();
// to add more images, just continue
// the pattern, adding to the array below

Pic[0] = 'images/main01.jpg'
Pic[1] = 'images/main03.jpg'
Pic[2] = 'images/lonavala2.jpg'
Pic[3] = 'images/main05.jpg'
Pic[4] = 'images/lonavala1.jpg'
Pic[5] = 'images/lonavala03.jpg'

// do not edit anything below this line
var t;
var j = 0;
var p = Pic.length;
var preLoad = new Array();
for (i = 0; i < p; i++) {
preLoad[i] = new Image();
preLoad[i].src = Pic[i];
}
function runSlideShow() {
if (document.all) {
document.images.SlideShow.style.filter="blendTrans(duration=2)";
document.images.SlideShow.style.filter="blendTrans(duration=crossFadeDuration)";
document.images.SlideShow.filters.blendTrans.Apply();
}
document.images.SlideShow.src = preLoad[j].src;
if (document.all) {
document.images.SlideShow.filters.blendTrans.Play();
}
j = j + 1;
if (j > (p - 1)) j = 0;
t = setTimeout('runSlideShow()', slideShowSpeed);
}


function mouseover_thumb(id){
	clearTimeout(t);
	document.images.SlideShow.src = preLoad[j].src
}



// 