/* jQuery PHP ejemplos */
jQuery(document).ready(function(){
	
	/* TABLA, ESTRUCTURA DE CONTROL */
		
	$("table.tabla1 tbody tr td").css("text-align", "center"); // Centrar celdas
	$("table.tabla1 tbody tr td.titol").css("text-align", "left"); // Celdas 1ª columna, a la izquierda
									   
	$("table.tabla1 tbody tr td").css("background-color", "white"); // Fondo blanco
	
	/* LISTA ECHO */

	$("ul li.listaEcho").css("padding", "5px");
	$("ul li.listaEcho").css("line-height", "1em"); // Separación entre líneas
	
});//ready



// ---------------------------------------------------------- 


	
$(document).ready(function(){
	
		/* TABLA FUNCIONES */
	
	$('table tr th.colsUnid').css('font-weight', 'normal')
							 .css('text-align', 'justify')
							 .css('line-height', '18px')
							 .css('padding-left', '16%')
							 .css('padding-right', '15px');
	
	
	
});//ready

	
// ----------------------------------------------------------
			
		/* OCULTAR/MOSTRAR */
	  /*   TABLA FUNCIONES  */
	/* Archivo: fechaHora.php */
		
$(document).ready(function(){
	
	$("table.funciones tbody.tablaFun").css('display', 'none');
	  
		// TABLA FUNCIONES
	  
		//$('table.funciones thead th.alternarTablaFun').removeClass('iconoTablaArriba');
		$('table.funciones thead th.alternarTablaFun').addClass('iconoTablaAbajo');
	  
		// Conbinar deslizamiento de tabla, arriba/abajo		
		$('table.funciones thead th.alternarTablaFun').toggle(function(){
        
		$('table.funciones thead th.alternarTablaFun').removeClass('iconoTablaAbajo');
		$('table.funciones thead th.alternarTablaFun').addClass('iconoTablaArriba');
		$('table.funciones thead th.alternarTablaFun').attr('title', 'Cerrar Tabla');
		$("tbody.tablaFun").show(300);
		
    }, function(){  // Al segundo click ...
	
		$('table.funciones thead th.alternarTablaFun').removeClass('iconoTablaArriba');
	    $('table.funciones thead th.alternarTablaFun').addClass('iconoTablaAbajo');
		$('table.funciones thead th.alternarTablaFun').attr('title', 'Abrir Tabla');
		$("tbody.tablaFun").hide(300);
		
	});
		
		  
		
		// TABLA PARÁMETRO FORMAT DE FUNCIÓN DATE(), slow 
		
	$("table.funciones tbody.tablaDate").css('display', 'none');
	
		$("table.funciones thead th.alternarTablaDate").addClass('iconoTablaAbajo');
		
		// Conbinar deslizamiento de tabla, arriba/abajo	
	  	$("table.funciones thead th.alternarTablaDate").toggle(function(){
		
		$("table.funciones thead th.alternarTablaDate").removeClass('iconoTablaAbajo');
		$("table.funciones thead th.alternarTablaDate").addClass('iconoTablaArriba');
		$("table.funciones thead th.alternarTablaDate").attr('title', 'Cerrar Tabla');
		$("tbody.tablaDate").show(300);
			
		}, function(){
		
		$('table.funciones thead th.alternarTablaDate').removeClass('iconoTablaArriba');
		$('table.funciones thead th.alternarTablaDate').addClass('iconoTablaAbajo');
		$('table.funciones thead th.alternarTablaDate').attr('title', 'Abrir Tabla');
		$("tbody.tablaDate").hide(300);
		
		});

});

		/* FLECHA TABLA FUNCIONES */

$(document).ready(function(){

	//$('table.funciones thead th.alternarTablaFun').addClass('iconoTablaAbajo');


});




// ----------------------------------------------------------



/* ARRAY ARCHIVO, TABLAS */

$(document).ready(function(){
	
	// Tabla Array mixto
	$("table.tablearraymixto").css("background-color", "#C5E3FF"); // Color fondo tabla BLUE
	
	// Para todoas las tablas, encontrar el primer "TH" y aplicar estilos
	$("table.tablearraymixto thead").find("th:first").css("font-size", "22px") // Tamaño fuente
									   .css("background-color", "#069"); // primer TH
	$("table.tablearraymixto th").addClass("headColspan"); // segundo TH
	
	$("table.tablearraymixto tbody td").addClass("celdaMixto"); // Clase para las celdas
	$("table.tablearraymixto tbody td:even").css("text-align", "right") // Alineación para celdas impares
											.css("color", "#0D3152"); // 
	
});//ready


// ----------------------------------------------------------


/* TÍTULOS H3 --- EFECTO ANIMAR HEAD */
$(document).ready(function(){

    // Guardamos la cabecera en una variable  ache3
	var ache3 = $("h3");
	
	// llamar a la función
    animarAche3();	
	// Averiguar posición de cabecera
	//var posicion = ache3.position();
	
	// Función que animará la cabecera
    function animarAche3(){
      // Desplaza la H3, despacio "slow"
	  ache3.animate({marginLeft:5, width:734}, 4000)
	  ache3.animate({marginLeft:245, width:494}, 4000) //Right Desplaza hacia derecha
	  ache3.fadeTo(4000, 0.7) // Desvanece h3
	  ache3.animate({marginLeft:5, width:734}, 4000) // Desplaza hacia izquierda
	  ache3.fadeTo(4000, 1) // Resaltar h3
	  //ache3.animate({marginLeft:5, width:720}, 4000)
	  ache3.animate({marginLeft:245, width:494}, 4000)
	  ache3.fadeTo(4000, 1) // Resaltar h3
	  ache3.animate({marginLeft:5, width:734}, 4000)
	  ache3.animate({marginLeft:5, width:734}, 60000, animarAche3); // Llamar función
		
    }
	
	//setInterval('animarAche3()',2000);
	//setTimeout('animarAche3()',2000);
	
	// COLOR FONDO TÍTULOS H3
	$('h3').css('padding','12px');
	
});


// ------------------------------------------------------------

	
// EFECTO HOVER PARA ENLACES MENÚ
$(document).ready(function(){
	
	// Efecto Hover enlaces menú	
	$('a.enlacEstatico').hover(function(){
		
		// Desplazar izquierda ese único enlace
		// 'stop()' inicia animación si se mantiene puntero encima
		$(this).stop().animate({marginLeft:5}, 250);
		
	},function(){
		
		// Desplazar derecha ese único enlace
		// 'stop()' inicia animación si se mantiene puntero encima
		$(this).stop().animate({marginLeft:-10}, 250);
		
	});
	
});//ready


// MENÚ "FIXED" O MENÚ "RELATIVE"
// SEGÚN RESOLUCIÓN PANTALLA, CAMBIAR UNA CLASE POR OTRA	
$(document).ready(function(){
	
	// Aberiguar altura real del navegador	
	altoVentana = $(window).height();
	
	// Altura real del navegador
	//alert('Altura real del navegador: ' + altoVentana);
		
		// Si su altura es inferior a 825px ...
		if(altoVentana < 825){
			
			//alert(altoVentana);
			
			// Elimina la clase con "posición: fixed", y 
			// añade la clase con "posición: relative".
			$('.enlacEstatico').removeClass('enlacEstatico').addClass('enlacRelativo');
			
		}

});
// -------------------------------------------------------------



/* SCROLL LINK ANCLA ººººººººººººº */
$(document).ready(function(){ 
	
	// Buscar enlace con símbolo "#" al principio
	$('a.lliscar[href^="#"]').click(function(e){
	   
		var hash = $(this).attr('href');
 		
		// Subir escroll con animación lenta
		$("body,html,document").animate({scrollTop:$(hash).offset().top}, 1000, function(){
		window.location.hash = hash;
	});
	
	// Detengo la acción predeterminada  
    e.preventDefault();
	
  });  
  
});

/* ººººººººººººººººººººººººººººººº */