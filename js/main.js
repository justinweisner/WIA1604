/*
     Name: Justin Weisner
     Date: 6 April 2016
     Class & Section:  WIA-1604
     Comments: "HTML5 Canvas Drawing"
 */


/*******************************************
HTML5 Shape Drawing Activity
    1.  Setup the canvas and 2d context
    2.  Draw out each shape in the sections below
     
********************************************/

/*******************************************
FILE SETUP

// Setup up 7 different Canvases in index.html one for each problem.
//Link Modernizr.js
// Link the main.js file
// Setup the call to that canvas and get it's 2d context
//Use Modernizr to verify that your browser supports canvas, include a fallback message


/*******************************************
PART 1

Draw a rectangle starting at point (0 ,0)
That has a width of 50 px and a heigh of 100px
Set the color of the rectangle to a shade of blue.
Set the stroke color to black and the dimension of the stroke are the same as the rectangle.

Reminder - set the style first then draw.
********************************************/
	console.log('Testing');
	window.onload = function(){
		"use strict";
		var recCanvas = document.getElementById ('canvas1');
		//theCanvas.width = 50;
		//theCanvas.height = 100;
		
		  if(recCanvas){
			  // Get Context
			  
			  var ctx = recCanvas.getContext('2d');
			  
			  if(ctx){
							
				  //Draw Here
				  
				  //Draw a stroked Rectangle
				  ctx.strokeStyle = "black";
				  ctx.fillStyle = "cyan";
				  ctx.lineWidth =5;
				  
				  //Draw the rectangle
				  //strokeRect(posX, posY, Width, Height)
				  ctx.strokeRect(0,0, 50, 100);
				  ctx.fillRect(2,3,45,94);
				  
			  
			  }
					
					
			}
		
		};


/*******************************************
PART 2

Draw a circle starting at point (50 ,50)
That has a radius of 20 px 
Set the color of the circle to a shade of red and set the alpha to .5
Set the stroke color to black and use a radius of 30px for this circle.

Reminder - set the style first then draw.
Use the arc method
********************************************/

var cirCanvas = document.getElementById ('canvas2');
	if(cirCanvas && cirCanvas.getContext){
	// Get Context
			  
		var ctx = cirCanvas.getContext('2d');
			  
		if(ctx){
							
			//Draw Here
			ctx.strokeStyle="black";
			ctx.fillStyle="red";
			ctx.lineWidth= 5; 
			//Stroke a Full 360 degree arc, clockwise
			ctx.globalAlpha = 0.5;	  
			ctx.beginPath();
			ctx.arc(50,50,20,0,2.0*Math.PI);
			ctx.fill();
			ctx.stroke();
				  
			  
		}
					
					
	}


/*******************************************
PART 3

Practice using Path drawing.
Create a 5-point star shaped pattern using the lineTo method.
Begin this shape at (100, 100)

Height and width and color are up to you.

********************************************/


var pathCanvas = document.getElementById ('canvas3');
	if(pathCanvas && pathCanvas.getContext){
	// Get Context
			  
		var ctx = pathCanvas.getContext('2d');
			  
		if(ctx){
		
			ctx.strokeStyle="yellow";
			ctx.fillStyle="yellow";
			ctx.lineWidth= 5;
			
			// Using lineTo path to make a 5 point star.
			
			ctx.beginPath();
			ctx.moveTo(100,100);
			ctx.lineTo(115,155);
			ctx.lineTo(160,160);
			ctx.lineTo(130,185);
			ctx.lineTo(150,230);
			ctx.lineTo(105,200);
			ctx.lineTo(70,230);
			ctx.lineTo(80,190);
			ctx.lineTo(40,165);
			ctx.lineTo(85,155);
			ctx.lineTo(100,100);
			ctx.closePath();
			ctx.fill();
			ctx.stroke();
		
		}
		
	}


/*******************************************
PART 4

Practice drawing with Bezier curves.
Try drawing the top to an umbrella.
This should have one large arc (a half circle) on the top and scalloped edges on the bottom.

Position, height, width and color are your choice.
Do not overlap any other object.

********************************************/

var umbrellaCanvas = document.getElementById ('canvas4');
	if(umbrellaCanvas && umbrellaCanvas.getContext){
	// Get Context
			  
		var ctx = umbrellaCanvas.getContext('2d');
			  
		if(ctx){
							
			//Draw Here
			ctx.strokeStyle="black";
			ctx.fillStyle="black";
			ctx.lineWidth= 5; 
			
			//Making the Umbrella with a half circle followed by using the Bezier curves.
			
				  
			ctx.beginPath();
			ctx.arc(160,120,100,0,1.0*Math.PI,true);
			
			//Bezier Curve
			ctx.bezierCurveTo(65,130,100,30,130,110);
			ctx.bezierCurveTo(140,70,190,70,195,115);
			ctx.bezierCurveTo(205,90,230,60,260,120);
			ctx.fill();
			ctx.stroke();
				  
			  
		}
					
					
	}

/*******************************************
PART 5

Practice using text.
Draw text into your canvas.  It can said whatever you would like in any color.

********************************************/

	var textCanvas = document.getElementById ('canvas5');
	if(textCanvas && textCanvas.getContext){
	// Get Context
			  
		var ctx = textCanvas.getContext('2d');
			  
		if(ctx){
			var theString = "Drawing text on a canvas";
			
			//Simple Text using Defaults
			ctx.fillText(theString, 20,20);
			
			//Style the Font
			ctx.font = "16pt Times New Roman";
			ctx.fillText(theString, 20,60);
		}
	}

/*******************************************
PART 6

Pixel manipulation.
Draw the image logo.png into the canvas in the following 3 ways.
1. The image exactly as it is.
2. Shrink the image by 50%
3. Slice a section of the logo out and draw that onto the canvas.

Reminder to use the drawImage method for all 3 of the ways.

********************************************/

var imageCanvas = document.getElementById ('canvas6');
	if(imageCanvas && imageCanvas.getContext){
	// Get Context
			  
		var ctx = imageCanvas.getContext('2d');
			  
		if(ctx){
			
			var srcImg = document.getElementById("img1");
			
			//Whole Image w/ no alterations
			
			ctx.drawImage(srcImg, 0,0);
			
			//Resize the Image
			
			ctx.drawImage(srcImg, 0, 400, 400, 132);
			
		}
	}



/*******************************************
PART 7

Putting it all together. 

Using a combination of all the methods. 
Create a complex scene.
You must use at least 3 different methods.

********************************************/

var allCanvas = document.getElementById ('canvas7');
	if(allCanvas && allCanvas.getContext){
	// Get Context
			  
		var ctx = allCanvas.getContext('2d');
			  
		if(ctx){
			
			//Code for drawing a Sun
			
			ctx.strokeStyle="yellow";
			ctx.fillStyle="yellow";
			ctx.lineWidth= 5; 
	  
			ctx.beginPath();
			ctx.arc(50,50,40,0,2.0*Math.PI);
			ctx.fill();
			ctx.stroke();
			
			
			//Making a ground
			
			//Draw a Rectangle to make the dirt
				  ctx.fillStyle = "rgb(139,69,19)";
				  ctx.lineWidth =5;
				  
				  ctx.fillRect(0,350, 700,30);
				  
				  
			//Draw a line to make the grass
				  
				    ctx.strokeStyle="green";
					ctx.lineWidth= 10;
			
					ctx.beginPath();
					ctx.moveTo(0,350);
					ctx.lineTo(700,350);
					ctx.closePath();
					ctx.stroke();
					
			// Making an advertisment sign
			
				// Making the pole
					ctx.strokeStyle="black";
					ctx.lineWidth= 10;
			
					ctx.beginPath();
					ctx.moveTo(200,360);
					ctx.lineTo(200,300);
					ctx.closePath();
					ctx.stroke();
					
				// Resize the image
				
					ctx.drawImage(srcImg, 100, 240, 200, 66);
	
		}
	}
	
	/*------------------------------------------------------------*/
		//Modernizr
		
		if(Modernizr.canvas){
		
		var checkCanvas = document.getElementById("canvas8");
		var ctx = checkCanvas.getContext("2d");
		
			ctx.font = "16pt Times New Roman";
			ctx.fillText("Canvas is supported!", 20, 60);	
		
		}else{
			
			//Canvas is not supported
			//Polyfill would go here
			
		}
		
		console.log(Modernizr);
