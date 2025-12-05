$('.buttonTDH1').click(function () { 
	$('.textoTDH1, .textoFicha, .buttonOcultar').slideDown(500);$('.textoTDH2, .textoTDH3, .textoTDH4, .textoTDH5, .textoTDH6').slideUp(500);
});
$('.buttonTDH2').click(function () { 
	$('.textoTDH2, .textoFicha, .buttonOcultar').slideDown(500);$('.textoTDH1, .textoTDH3, .textoTDH4, .textoTDH5, .textoTDH6').slideUp(500);
});
$('.buttonTDH3').click(function () { 
	$('.textoTDH3, .textoFicha, .buttonOcultar').slideDown(500);$('.textoTDH1, .textoTDH2, .textoTDH4, .textoTDH5, .textoTDH6').slideUp(500);
});
$('.buttonTDH4').click(function () { 
	$('.textoTDH4, .textoFicha, .buttonOcultar').slideDown(500);$('.textoTDH1, .textoTDH2, .textoTDH3, .textoTDH5, .textoTDH6').slideUp(500);
});
$('.buttonTDH5').click(function () { 
	$('.textoTDH5, .textoFicha, .buttonOcultar').slideDown(500);$('.textoTDH1, .textoTDH2, .textoTDH3, .textoTDH4, .textoTDH6').slideUp(500);
});
$('.buttonTDH6').click(function () { 
	$('.textoTDH6, .textoFicha, .buttonOcultar').slideDown(500);$('.textoTDH1, .textoTDH2, .textoTDH3, .textoTDH4, .textoTDH5').slideUp(500);
});
$('.buttonOcultar').click(function () { 
$('.textoTDH1, .textoTDH2, .textoTDH3, .textoTDH4, .textoTDH5, .textoTDH6, .textoFicha').slideUp(500);
});