
/*var button=document.getElementById('counter');
button.onclick=function(){
    var request=new XMLHttpRequest();
    
    request.onreadystatechange = function() {
        if(request.readyState==XMLHttpRequest.DONE){
            if(request.status===200){
                 var counter=request.responseText;
                 var span=document.getElementById('count');
                 span.innerHTML=counter.toString();
            }
        }
    };
      reqest.open('GET','http://sarvani03.imad.hasura-aapp.i0'/counter,true);
      request.send(null);
};
*/

console.log('loaded!');
var element=document.getElementById('main-text');

var img=document.getElementById('madi');
 var marginLeft=0;

    function moveRight(){
        marginLeft=marginLeft+1;
    img.style.marginLeft=marginLeft+'px';
       
}

img.onclick=function(){
    var interval=setInterval(moveRight,10); 
};


  function stopmovement(){
      clearInterval(interval);
   }



/*var nameInput=documet.getElementById('name');
var name=nameInput.value;
var submit= document.getElementById('submit_btn');
 submit.onclick =function(){
    var names=['name1','name2','name3'];
    var list='';
    for(var i=0;i<names.length;i++){
        list+= '<li>' + names[i] + '</li>';
    }
    var ul=document.getElementById('nameslist');
    ui.innerHTML=list;
};*/
