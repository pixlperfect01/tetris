var w=30;
var h=30;
Player P1 = new P1(1,1);
function setup(){
 createCanvas(700,500);
 background(30);
 stroke(200);
 noFill();
 for(var x = 0;x<height;x+=w){
	 for(var y=0;y<height;y+=h){
		 rect(x,y,w,h);
	 }
 }
}

function draw(){
	background(30);
	P1.draw();
	
	
}

function Player(){
	var mx=1;
	var my=1
	
	this.draw=function(){
		rect(mx*height,my
		
}
	


	
