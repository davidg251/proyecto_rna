/*
Conjunto de funciones para que cuendo se dipare
el evento de pulsar el boton matriz recorra la matriz
de pixeles clasefiique cuales son de color negro
y genere un vector de tamaño alto*ancho donde en cada
posicion sera 1 si es negro y -1 si es blanco
*/
$(document).ready(function(){

		var canvas =  document.getElementById('canvas');
		var ctx = canvas.getContext('2d');
		var width = canvas.width;
	  var height = canvas.height;
		//var pixeles = 625;
		var array = new Array();
		ctx.mozImageSmoothingEnabled = false;
		ctx.webkitImageSmoothingEnabled = false;
		ctx.imageSmoothingEnabled = false;

		$('#enviar').click(function(){

	  	var imagen = new Image();
	    var dataURL = canvas.toDataURL();
	    imagen.src = dataURL;

	    ctx.clearRect ( 0 , 0 , canvas.width, canvas.height );
	    ctx.drawImage(imagen, 0, 0, 20,20);
	    ctx.drawImage(canvas, 0, 0, 20, 20, 0, 0, canvas.width, canvas.height);

	    ctx.lineWidth = 1;
	    var info;
	    var count=0,x;
	    for(i = 0; i<300;i+=15)
	      {
	         for(j = 0; j<300;j+=15)
	           {
							 ctx.rect(i,j,15,15);
	             info = ctx.getImageData(i,j,15,15).data;

	             for(x in info)
	               {
	                 count += info[x];
	               }

	             if(count>=20000) array.push(1); else array.push(-1);
	             count = 0;

	           }

	      }
	      ctx.stroke();

	    json = JSON.stringify(array);

			$('#target').text('');
	    $('#target').text(json);
			console.log(array.length);

	    $.ajax({

					type:"POST",
					url:"http://127.168.0.1:8080",
					dataType:"json",
					data: json ,

					success: function(data)
					{
			        $('#target').text(data);
							alert('OK');
					},

					error: function( xhr, status, errorThrown )
					{
							console.log( "Error" );
							console.log( "Error: " + errorThrown );
							console.log( "Status: " + status );
							console.dir( xhr );
					},

					complete: function( xhr, status )
					{
							console.log( xhr );
					}

			});

			json = [];
	    array = [];

	})






})
