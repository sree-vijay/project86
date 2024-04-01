var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");

function new_image()
{
 fabric.image.formURL('BirthdayImge.jpg', function(Img){
    block_image_object =Img;
      
    block_image_object.scaleTowidth(700);
    block_image_object.scaleTOHeight(510)
    block_image_object.set({
        top:0,
        Left:0
    });
    canvas.add(block_image_object);
    });

    
	
}

function playSound(){
	   x.play ();
}
