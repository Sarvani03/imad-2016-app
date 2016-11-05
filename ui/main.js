console.log('Loaded!');

var element=document.getElementById('main-txt');
element.innerHTML='New Value';

var imp=document.getElementById('img');
var marginLeft=0;
function moveRight(){
    marginLeft=marginLeft + 10;
    img.style.marginLeft=marginLeft+ 'px';
}
img.onclick=function() {
    var interval=setInterval(marginLeft,40);
   
}