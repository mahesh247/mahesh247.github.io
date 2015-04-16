/*
	File: calendar-init.js
	Nepali Calendar jQuery plugin by Mahesh Maharjan 2015
	http://www.mahesh247.com.np
*/

var cal = $('#calendar').myCalendar({
		onDayClick : function( $el, $contentEl, dateProperties ) {

			for( var key in dateProperties ) {
				//console.log( key + ' = ' + dateProperties[ key ] );
			}

		},
		caldata : codropsEvents
	}),
	$emonth = $( '#custom-emonth-eyear' ).html( cal.getEngEq() ),
	$month = $( '#custom-month' ).html( cal.getMonthName() ),
	$year = $( '#custom-year' ).html( cal._engToNepDigit(cal.getYear()) );

	$( '#custom-next' ).on( 'click', function() {
		cal.gotoNextMonth( updateMonthYear );
	} );
	$( '#custom-prev' ).on( 'click', function() {
		cal.gotoPreviousMonth( updateMonthYear );
	} );
	$( '#custom-current' ).on( 'click', function() {
		cal.gotoNow( updateMonthYear );
	} );

	//previous and next month navigation with keyboard left and right arrows
	$("body").keydown(function(e) {
	  if(e.keyCode == 37/* || e.keyCode == 40 */) { // left
	    cal.gotoPreviousMonth( updateMonthYear );
	  }
	  else if(e.keyCode == 39/* || e.keyCode == 38 */) { // right
	    cal.gotoNextMonth( updateMonthYear );
	  }
	  else if(e.keyCode == 13) { // return
	    cal.gotoNow( updateMonthYear );
	  }
	});

	function updateMonthYear() {	
		$emonth.html( cal.getEngEq() );			
		$month.html( cal.getMonthName() );
		$year.html( cal._engToNepDigit(cal.getYear()) );
	}