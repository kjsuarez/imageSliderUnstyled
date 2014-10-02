count=7;  //count should equal total number of slides
slideCurrent=1;
slideNext=2;
slidePrev=count;
$(document).ready(function(){
$( "#next" ).click(function() {
  Next();
});
   $( "#prev" ).click(function() {
  Previouse();
}); 
    
});


function Next(){
  console.log(slideCurrent);
    if(slideCurrent<count){
 $("#slide"+slideCurrent).hide("slide",{direction:"left"},"slow");
 $("#slide"+slideNext).show("slide",{direction:"right"},"slow");
    slideCurrent=slideNext;
    slideNext++;    
    }else{
    slideNext=1;
 $("#slide"+slideCurrent).hide("slide",{direction:"left"},"slow");
 $("#slide"+slideNext).show("slide",{direction:"right"},"slow");
    slideCurrent=slideNext;
    slideNext++;    
    }
    console.log(slideCurrent);
   }
function Previouse(){
  console.log(slideCurrent);
    if(slideCurrent>1){
    slidePrev=slideCurrent-1;
 $("#slide"+slideCurrent).hide("slide",{direction:"right"},"slow");
 $("#slide"+slidePrev).show("slide",{direction:"left"},"slow");
 slideCurrent=slidePrev;
    }else{
    slidePrev=count;
 $("#slide"+slideCurrent).hide("slide",{direction:"right"},"slow");
 $("#slide"+slidePrev).show("slide",{direction:"left"},"slow");
        slideCurrent=slidePrev;
    }
console.log(slideCurrent);
}