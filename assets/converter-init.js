/*
	File: converter-init.js
	Date converter jQuery plugin by Mahesh Maharjan 2015
	http://www.mahesh247.com.np
*/
jQuery(function($){
var converter = $('body').myConverter();
	$('#toBS').on('click', function(){
		var YY = $('select#eYY').val();
		var MM = $('select#eMM').val();
		MM = parseInt(MM) + parseInt(1);
		var DD = $('select#eDD').val();
		var resultnDate = converter.convertToBS(YY, MM, DD);
		//$('span#result').text(' | Result => '+resultnDate);
		$('#resultBS').remove();
		$('#resultAD').remove();
		$(this).after('<h3 id="resultBS"><span id="resultBS">Result => ' + resultnDate + '</span></h3>');
	});

	$('#toAD').on('click', function(){
		var YY = $('select#nYY').val();
		var MM = $('select#nMM').val();
		MM = parseInt(MM) + parseInt(1);
		var DD = $('select#nDD').val();
		var resulteDate = converter.convertToAD(YY, MM, DD);
		//$('span#result').text(' | Result => '+resulteDate);
		$('#resultBS').remove();
		$('#resultAD').remove();
		$(this).after('<h3 id="resultAD"><span>Result => ' + resulteDate + '</span><h3>');
	});
});