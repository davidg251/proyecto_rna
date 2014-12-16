/*
Conjunto de funciones para dibujar en el canvas
un punto negro cada que se pulsa el boton
Por hacer :
optimizar vectores de coordenadas
CREATE A DRAWING APP WITH HTML5 CANVAS AND JAVASCRIPT
by William Malone


*/


$(document).ready(function(){

	var clickX = new Array();
	var clickY = new Array();
	var clickDrag = new Array();
	var paint;
	var canvas = document.getElementById("canvas");
	var context = canvas.getContext("2d");
	width = canvas.width;
	height = canvas.height;




	$('#canvas').mousedown(function(e){
		var mouseX = e.pageX - this.offsetLeft;
		var mouseY = e.pageY - this.offsetTop;

		paint = true;
		addClick(e.pageX - this.offsetLeft, e.pageY - this.offsetTop);
		redraw();
	});

	$('#canvas').mousemove(function(e){
	  if(paint){
		addClick(e.pageX - this.offsetLeft, e.pageY - this.offsetTop, true);
		redraw();
	  }
	});
	$('#canvas').mouseup(function(e){
	paint = false;

	});

	$('#canvas').mouseleave(function(e){
	paint = false;
	});

	$('#enviar').click(function(){

			clickX = [];
			clickY = [];
			clickDrag = [];

	})

	function addClick(x, y, dragging)
	{
	  clickX.push(x);
	  clickY.push(y);
	  clickDrag.push(dragging);
	}
	function redraw(){
		  context.clearRect(0, 0, context.canvas.width, context.canvas.height); // Clears the canvas

		  context.strokeStyle = "#000";
		  context.lineJoin = "round";
		  context.lineWidth = 20;
		  //context.lineHeight = 9;

		  for(var i=0; i < clickX.length; i++) {
			context.beginPath();
			if(clickDrag[i] && i){
			  context.moveTo(clickX[i-1], clickY[i-1]);
			 }else{
			   context.moveTo(clickX[i]-1, clickY[i]);
			 }
			 context.lineTo(clickX[i], clickY[i]);
			 context.closePath();
			 context.stroke();
		  }

	}
	})
