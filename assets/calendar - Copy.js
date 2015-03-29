(function( $ ){

	var bs;
	var firstDay = '';
	var bs = (function () {
    var bs = null;
    $.ajax({
        'async': false,
        'global': false,
        'url': 'json/dates.json',
        'dataType': "json",
        'success': function (data) {
            bs = data;
        }
    });
    return bs;
})(); 
	console.log(bs);

		/*bs[2000] = new Array(2000,30,32,31,32,31,30,30,30,29,30,29,31);
	    bs[2001] = new Array(2001,31,31,32,31,31,31,30,29,30,29,30,30);
	    bs[2002] = new Array(2002,31,31,32,32,31,30,30,29,30,29,30,30);
	    bs[2003] = new Array(2003,31,32,31,32,31,30,30,30,29,29,30,31);
	    bs[2004] = new Array(2004,30,32,31,32,31,30,30,30,29,30,29,31);
	    bs[2005] = new Array(2005,31,31,32,31,31,31,30,29,30,29,30,30);
	    bs[2006] = new Array(2006,31,31,32,32,31,30,30,29,30,29,30,30);
	    bs[2007] = new Array(2007,31,32,31,32,31,30,30,30,29,29,30,31);
	    bs[2008] = new Array(2008,31,31,31,32,31,31,29,30,30,29,29,31);
	    bs[2009] = new Array(2009,31,31,32,31,31,31,30,29,30,29,30,30);
	    bs[2010] = new Array(2010,31,31,32,32,31,30,30,29,30,29,30,30);
	    bs[2011] = new Array(2011,31,32,31,32,31,30,30,30,29,29,30,31);
	    bs[2012] = new Array(2012,31,31,31,32,31,31,29,30,30,29,30,30);
	    bs[2013] = new Array(2013,31,31,32,31,31,31,30,29,30,29,30,30);
	    bs[2014] = new Array(2014,31,31,32,32,31,30,30,29,30,29,30,30);
	    bs[2015] = new Array(2015,31,32,31,32,31,30,30,30,29,29,30,31);
	    bs[2016] = new Array(2016,31,31,31,32,31,31,29,30,30,29,30,30);
	    bs[2017] = new Array(2017,31,31,32,31,31,31,30,29,30,29,30,30);
	    bs[2018] = new Array(2018,31,32,31,32,31,30,30,29,30,29,30,30);
	    bs[2019] = new Array(2019,31,32,31,32,31,30,30,30,29,30,29,31);
	    bs[2020] = new Array(2020,31,31,31,32,31,31,30,29,30,29,30,30);
	    bs[2021] = new Array(2021,31,31,32,31,31,31,30,29,30,29,30,30);
	    bs[2022] = new Array(2022,31,32,31,32,31,30,30,30,29,29,30,30);
	    bs[2023] = new Array(2023,31,32,31,32,31,30,30,30,29,30,29,31);
	    bs[2024] = new Array(2024,31,31,31,32,31,31,30,29,30,29,30,30);
	    bs[2025] = new Array(2025,31,31,32,31,31,31,30,29,30,29,30,30);
	    bs[2026] = new Array(2026,31,32,31,32,31,30,30,30,29,29,30,31);
	    bs[2027] = new Array(2027,30,32,31,32,31,30,30,30,29,30,29,31);
	    bs[2028] = new Array(2028,31,31,32,31,31,31,30,29,30,29,30,30);
	    bs[2029] = new Array(2029,31,31,32,31,32,30,30,29,30,29,30,30);
	    bs[2030] = new Array(2030,31,32,31,32,31,30,30,30,29,29,30,31);
	    bs[2031] = new Array(2031,30,32,31,32,31,30,30,30,29,30,29,31);
	    bs[2032] = new Array(2032,31,31,32,31,31,31,30,29,30,29,30,30);
	    bs[2033] = new Array(2033,31,31,32,32,31,30,30,29,30,29,30,30);
	    bs[2034] = new Array(2034,31,32,31,32,31,30,30,30,29,29,30,31);
	    bs[2035] = new Array(2035,30,32,31,32,31,31,29,30,30,29,29,31);
	    bs[2036] = new Array(2036,31,31,32,31,31,31,30,29,30,29,30,30);
	    bs[2037] = new Array(2037,31,31,32,32,31,30,30,29,30,29,30,30);
	    bs[2038] = new Array(2038,31,32,31,32,31,30,30,30,29,29,30,31);
	    bs[2039] = new Array(2039,31,31,31,32,31,31,29,30,30,29,30,30);
	    bs[2040] = new Array(2040,31,31,32,31,31,31,30,29,30,29,30,30);
	    bs[2041] = new Array(2041,31,31,32,32,31,30,30,29,30,29,30,30);
	    bs[2042] = new Array(2042,31,32,31,32,31,30,30,30,29,29,30,31);
	    bs[2043] = new Array(2043,31,31,31,32,31,31,29,30,30,29,30,30);
	    bs[2044] = new Array(2044,31,31,32,31,31,31,30,29,30,29,30,30);
	    bs[2045] = new Array(2045,31,32,31,32,31,30,30,29,30,29,30,30);
	    bs[2046] = new Array(2046,31,32,31,32,31,30,30,30,29,29,30,31);
	    bs[2047] = new Array(2047,31,31,31,32,31,31,30,29,30,29,30,30);
	    bs[2048] = new Array(2048,31,31,32,31,31,31,30,29,30,29,30,30);
	    bs[2049] = new Array(2049,31,32,31,32,31,30,30,30,29,29,30,30);
	    bs[2050] = new Array(2050,31,32,31,32,31,30,30,30,29,30,29,31);
	    bs[2051] = new Array(2051,31,31,31,32,31,31,30,29,30,29,30,30);
	    bs[2052] = new Array(2052,31,31,32,31,31,31,30,29,30,29,30,30);
	    bs[2053] = new Array(2053,31,32,31,32,31,30,30,30,29,29,30,30);
	    bs[2054] = new Array(2054,31,32,31,32,31,30,30,30,29,30,29,31);
	    bs[2055] = new Array(2055,31,31,32,31,31,31,30,29,30,29,30,30);
	    bs[2056] = new Array(2056,31,31,32,31,32,30,30,29,30,29,30,30);
	    bs[2057] = new Array(2057,31,32,31,32,31,30,30,30,29,29,30,31);
	    bs[2058] = new Array(2058,30,32,31,32,31,30,30,30,29,30,29,31);
	    bs[2059] = new Array(2059,31,31,32,31,31,31,30,29,30,29,30,30);
	    bs[2060] = new Array(2060,31,31,32,32,31,30,30,29,30,29,30,30);
	    bs[2061] = new Array(2061,31,32,31,32,31,30,30,30,29,29,30,31);
	    bs[2062] = new Array(2062,30,32,31,32,31,31,29,30,29,30,29,31);
	    bs[2063] = new Array(2063,31,31,32,31,31,31,30,29,30,29,30,30);
	    bs[2064] = new Array(2064,31,31,32,32,31,30,30,29,30,29,30,30);
	    bs[2065] = new Array(2065,31,32,31,32,31,30,30,30,29,29,30,31);
	    bs[2066] = new Array(2066,31,31,31,32,31,31,29,30,30,29,29,31);
	    bs[2067] = new Array(2067,31,31,32,31,31,31,30,29,30,29,30,30);
	    bs[2068] = new Array(2068,31,31,32,32,31,30,30,29,30,29,30,30);
	    bs[2069] = new Array(2069,31,32,31,32,31,30,30,30,29,29,30,31);
	    bs[2070] = new Array(2070,31,31,31,32,31,31,29,30,30,29,30,30);
	    bs[2071] = new Array(2071,31,31,32,31,31,31,30,29,30,29,30,30);
	    bs[2072] = new Array(2072,31,32,31,32,31,30,30,29,30,29,30,30);
	    bs[2073] = new Array(2073,31,32,31,32,31,30,30,30,29,29,30,31);
	    bs[2074] = new Array(2074,31,31,31,32,31,31,30,29,30,29,30,30);
	    bs[2075] = new Array(2075,31,31,32,31,31,31,30,29,30,29,30,30);
	    bs[2076] = new Array(2076,31,32,31,32,31,30,30,30,29,29,30,30);
	    bs[2077] = new Array(2077,31,32,31,32,31,30,30,30,29,30,29,31);
	    bs[2078] = new Array(2078,31,31,31,32,31,31,30,29,30,29,30,30);
	    bs[2079] = new Array(2079,31,31,32,31,31,31,30,29,30,29,30,30);
	    bs[2080] = new Array(2080,31,32,31,32,31,30,30,30,29,29,30,30);
	    bs[2081] = new Array(2081,31,31,32,32,31,30,30,30,29,30,30,30);
	    bs[2082] = new Array(2082,30,32,31,32,31,30,30,30,29,30,30,30);
	    bs[2083] = new Array(2083,31,31,32,31,31,30,30,30,29,30,30,30);
	    bs[2084] = new Array(2084,31,31,32,31,31,30,30,30,29,30,30,30);
	    bs[2085] = new Array(2085,31,32,31,32,30,31,30,30,29,30,30,30);
	    bs[2086] = new Array(2086,30,32,31,32,31,30,30,30,29,30,30,30);
	    bs[2087] = new Array(2087,31,31,32,31,31,31,30,30,29,30,30,30);
	    bs[2088] = new Array(2088,30,31,32,32,30,31,30,30,29,30,30,30);
	    bs[2089] = new Array(2089,30,32,31,32,31,30,30,30,29,30,30,30);
	    bs[2090] = new Array(2090,30,32,31,32,31,30,30,30,29,30,30,30);*/

	$.Calendar = function( options, element ) {
		
		this.$el = $( element );
		this._init( options );
		e_eq_date = '1-1-1944';//eng base date for equating
		n_eq_date = '17-9-2000';//nep base date for equating
		
		
	};

	$.Calendar.defaults = {
		weeks : [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ],
		//weeks : [ 'आईतवार', 'सोमवार', 'मंगलवार', 'बुधवार', 'बिहीवार', 'शुक्रवार', 'शनिबार' ],
		//weekabbrs : [ 'आईत', 'सोम', 'मंगल', 'बुध', 'बिह', 'शुक्र', 'शनि' ],
		weekabbrs : ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat' ],
		//months : [ 'बैशाख', 'जेष्ठ', 'आषाढ', 'श्रावण', 'भाद्र', 'आश्विन', 'कार्तिक', 'मंसिर', 'पौष', 'माघ', 'फागुन', 'चैत्र' ],
		months : [ '', 'Baishakh', 'Jestha', 'Ashad', 'Shrawan', 'Bhadra', 'Ashoj', 'Kartik', 'Mangshir', 'Poush', 'Magh', 'Falgun', 'Chaitra' ],
		//monthabbrs : [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec' ],
		// choose between values in options.weeks or options.weekabbrs
		displayWeekAbbr : false,
		// choose between values in options.months or options.monthabbrs
		displayMonthAbbr : false,
		// left most day in the calendar
		// 0 - Sunday, 1 - Monday, ... , 6 - Saturday
		startIn : 0,
		onDayClick : function( $el, $content, dateProperties ) { return false; }
	};

	$.Calendar.prototype = {

		_init : function( options ) {
			
			// options
			this.options = $.extend( true, {}, $.Calendar.defaults, options );

			this.today = new Date();
			e_month = this.today.getMonth()+1;
			e_year = this.today.getFullYear();
			e_date = this.today.getDate();
			count_days = this._count_ad_days(e_year, e_month, e_date);
			today_nep = this._get_nepali_date(26016);
			nep_date = this._get_nepali_date(26016);
			//console.log(nep_date);
			//this.firstDay = nep_date[4];
			//console.log(this._get_nepali_date(count_days));
			//console.log(this.today.getDate());
			this.month = ( isNaN( this.options.month ) || this.options.month == null) ? nep_date[1] : this.options.month - 1;
			this.year = ( isNaN( this.options.year ) || this.options.year == null) ? nep_date[0] : this.options.year;
			this.caldata = this.options.caldata || {};
			this._generateTemplate();
			this._initEvents();

		},
		_initEvents : function() {

			var self = this;

			this.$el.on( 'click.calendar', 'div.fc-row > div', function() {

				var $cell = $( this ),
					idx = $cell.index(),
					$content = $cell.children( 'div' ),
					dateProp = {
						day : $cell.children( 'span.fc-date' ).text(),
						month : self.month + 1,
						monthname : self.options.displayMonthAbbr ? self.options.monthabbrs[ self.month ] : self.options.months[ self.month ],
						year : self.year,
						weekday : idx + self.options.startIn,
						weekdayname : self.options.weeks[ idx + self.options.startIn ]
					};

				if( dateProp.day ) {
					self.options.onDayClick( $cell, $content, dateProp );
				}

			} );

		},
		// Calendar logic based on http://jszen.blogspot.pt/2007/03/how-to-build-simple-calendar-with.html
		_generateTemplate : function( callback ) {

			var head = this._getHead(),
				body = this._getBody(),
				rowClass;

			switch( this.rowTotal ) {
				case 4 : rowClass = 'fc-four-rows'; break;
				case 5 : rowClass = 'fc-five-rows'; break;
				case 6 : rowClass = 'fc-six-rows'; break;
			}

			this.$cal = $( '<div class="fc-calendar ' + rowClass + '">' ).append( head, body );

			this.$el.find( 'div.fc-calendar' ).remove().end().append( this.$cal );

			if( callback ) { callback.call(); }

		},
		_getHead : function() {

			var html = '<div class="fc-head">';
		
			for ( var i = 0; i <= 6; i++ ) {

				var pos = i + this.options.startIn,
					j = pos > 6 ? pos - 6 - 1 : pos;

				html += '<div>';
				html += this.options.displayWeekAbbr ? this.options.weekabbrs[ j ] : this.options.weeks[ j ];
				html += '</div>';

			}

			html += '</div>';

			return html;

		},
		_getBody : function() {

			//var d = new Date( this.year, this.month + 1, 0 ),
				// number of days in the month
				//monthLength = d.getDate(),
				yr = bs[this.year];
				monthLength = yr[this.month];
				//firstDay = new Date( this.year, this.month, 2 );

			// day of the week

			if(firstDay === ''){
				this.startingDay = nep_date[4];
			}else{
				this.startingDay = firstDay;
			}
			//console.clear();
			//console.log(this.startingDay);
			
			//console.log(this.startingDay);

			var html = '<div class="fc-body"><div class="fc-row">',
				// fill in the days
				day = 1;

			// this loop is for weeks (rows)
			for ( var i = 0; i < 7; i++ ) {

				// this loop is for weekdays (cells)
				for ( var j = 0; j <= 6; j++ ) {

					var pos = this.startingDay - this.options.startIn,
						p = pos < 0 ? 6 + pos + 1 : pos,
						inner = '',
						//today = this.month === this.today.getMonth() && this.year === this.today.getFullYear() && day === this.today.getDate(),
						today = this.month === today_nep[1] && this.year === today_nep[0] && day === today_nep[2],
						content = '';
					
					if ( day <= monthLength && ( i > 0 || j >= p ) ) {

						inner += '<span class="fc-date">' + day + '</span><span class="fc-weekday">' + this.options.weekabbrs[ j + this.options.startIn > 6 ? j + this.options.startIn - 6 - 1 : j + this.options.startIn ] + '</span>';

						// this day is:
						var strdate = ( this.month + 1 < 10 ? '0' + ( this.month + 1 ) : this.month + 1 ) + '-' + ( day < 10 ? '0' + day : day ) + '-' + this.year,
							dayData = this.caldata[ strdate ];

						if( dayData ) {
							content = dayData;
						}

						if( content !== '' ) {
							inner += '<div>' + content + '</div>';
						}

						++day;

					}
					else {
						today = false;
					}

					var cellClasses = today ? 'fc-today ' : '';
					if( content !== '' ) {
						cellClasses += 'fc-content';
					}

					html += cellClasses !== '' ? '<div class="' + cellClasses + '">' : '<div>';
					html += inner;
					html += '</div>';

				}

				// stop making rows if we've run out of days
				if (day > monthLength) {
					this.rowTotal = i + 1;
					break;
				} 
				else {
					html += '</div><div class="fc-row">';
				}

			}
			html += '</div></div>';

			return html;

		},
		_getNepaliDate: function(){

		},
		_count_ad_days: function(y, m, d){
			var c = 1000 * 60 * 60 * 24;
		    var d = new Date();
		    //console.log(c);
		    var f = Math.ceil((d.getTime()) / (c));
		    //console.log(f);
    		return f;
		},
		_get_nepali_date: function(e_days){
			//console.log(e_days);
			var i = 0;
			var firstDay;
			var day = 6-1;
			var m = j = 9;
			//var total_nDays = 0;
			var total_nDays = 17-1;
			var y = 2000;
			while(e_days != 0){			
				var a = bs[y];
				total_nDays++;
				day++;
				if(total_nDays > a[j]){
					j++;
					m++;
					total_nDays = 1;
					if(day == 7){
						firstDay = 0;
					}else{
					firstDay = day;
					}
				}

				if(day > 6){
					day = 0;
				}

				if(m > 12 || j > 12){
					y++;
					m=1;
					i++;
					j=1;
				}
				/*if(j > 11){
					i++;
					j=0;
				}*/
				//console.log(m);
				e_days--;
			}
			//console.log(firstDay);
			numDay = day;
			var result = [y, m, total_nDays, day, firstDay];
			return result;
		},
		_move : function( period, dir, callback ) {

			if( dir === 'previous' ) {

				
				
				if( period === 'month' ) {
					this.year = this.month > 1 ? this.year : --this.year;
					this.month = this.month > 1 ? --this.month : 12;
				}
				else if( period === 'year' ) {
					this.year = --this.year;
				}

				yr = bs[this.year]
				days = yr[this.month];

				if(firstDay === ''){
					firstDay = nep_date[4];
				}else{
					firstDay = firstDay;
				}
				//firstDay = nep_date[4];
				while(days!=0){
					if(firstDay==0){
						firstDay = 7;
					}
					firstDay--;
					days--;
					//console.log(firstDay);
				}

			}
			else if( dir === 'next' ) {

				yr = bs[this.year]
				days = yr[this.month];

				if(firstDay === ''){
					firstDay = nep_date[4];
				}else{
					firstDay = firstDay;
				}
				//firstDay = nep_date[4];
				while(days!=0){
					firstDay++;
					if(firstDay==7){
						firstDay = 0;
					}
					days--;
				}
				//console.log(firstDay);

				if( period === 'month' ) {
					this.year = this.month < 12 ? this.year : ++this.year;
					this.month = this.month < 12 ? ++this.month : 1;
				}
				else if( period === 'year' ) {
					this.year = ++this.year;
				}

				

			}
			
			//console.log(firstDay);
			

			this._generateTemplate( callback );

		},
		/*getYear : function() {
			return this.year;
		},
		getMonth : function() {
			return this.month;
		},
		getMonthName : function() {
			return this.options.displayMonthAbbr ? this.options.monthabbrs[ this.month ] : this.options.months[ this.month ];
		},*/
		/************************* 
		******PUBLIC METHODS *****
		**************************/
		getYear : function() {
			return this.year;
		},
		getMonth : function() {
			return this.month;
		},
		getMonthName : function() {
			return this.options.displayMonthAbbr ? this.options.monthabbrs[ this.month ] : this.options.months[ this.month ];
		},
		// gets the cell's content div associated to a day of the current displayed month
		// day : 1 - [28||29||30||31]
		getCell : function( day ) {

			var row = Math.floor( ( day + this.startingDay - this.options.startIn ) / 7 ),
				pos = day + this.startingDay - this.options.startIn - ( row * 7 ) - 1;

			return this.$cal.find( 'div.fc-body' ).children( 'div.fc-row' ).eq( row ).children( 'div' ).eq( pos ).children( 'div' );

		},
		setData : function( caldata ) {

			caldata = caldata || {};
			$.extend( this.caldata, caldata );
			this._generateTemplate();

		},
		// goes to today's month/year
		gotoNow : function( callback ) {

			//this.month = this.today.getMonth();
			//this.year = this.today.getFullYear();
			//this._generateTemplate( callback );
			
			this.month = today_nep[1];
			this.year = today_nep[0];
			this._generateTemplate( callback );

		},
		// goes to month/year
		goto : function( month, year, callback ) {

			this.month = month;
			this.year = year;
			this._generateTemplate( callback );

		},
		gotoPreviousMonth : function( callback ) {
			this._move( 'month', 'previous', callback );
		},
		gotoPreviousYear : function( callback ) {
			this._move( 'year', 'previous', callback );
		},
		gotoNextMonth : function( callback ) {
			this._move( 'month', 'next', callback );
		},
		gotoNextYear : function( callback ) {
			this._move( 'year', 'next', callback );
		}
		
	}

	$.fn.myCalendar = function( options ){
		var instance = $.data( this, 'calendar' );

		this.each(function() {
				
				if ( instance ) {

					instance._init();
				
				}
				else {

					instance = $.data( this, 'calendar', new $.Calendar( options, this ) );
				
				}

			});

		return instance;
	}
})(jQuery);
/*(function( $ ){
    $.fn.myCalendar = function() {
        this.each(function() {
            var e = $(this).attr("id")
            $(this).addClass("ndp-nepali-calendar"), $(this).attr("onfocus", "showCalendarBox('" + e + "')"), $("body").append(calendarDivString)
        }), $(".ndp-nepali-calendar, #ndp-nepali-box").hover(function() {
            mouse_is_inside = !0
        }, function() {
            mouse_is_inside = !1
        }), $("html").mouseup(function() {
            mouse_is_inside || hideCalendarBox()
        })
    }
})(jQuery);

function showCalendarBox(t) {
    var e = $("#" + t).val()
    $("#ndp-target-id").html(t)
    var s = $("#" + t).position()
    $("#ndp-nepali-box").css("top", s.top + $("#" + t).outerHeight()), $("#ndp-nepali-box").css("left", s.left)
    $("#ndp-nepali-box").css("display", 'block')
}

function hideCalendarBox() {
    $("#ndp-nepali-box").fadeOut(100)
}

var calendarDivString 	= 	'<div id="ndp-nepali-box" class="ndp-corner-all" style="display:none">'
	calendarDivString 	+= 	'<span id="ndp-target-id" style="display:none"></span>'
	calendarDivString 	+= 	'<div class="ndp-corner-all ndp-header">'
	calendarDivString 	+= 	'<a href="javascript:void(0)" id="prev" title="Previous Month" class="ndp-prev">Pre</a>'
	calendarDivString 	+= 	'<a href="javascript:void(0)" id="next" title="Next Month" class="ndp-next">Nxt</a>'
	calendarDivString 	+= 	'<span id="currentMonth"></span>'
	calendarDivString 	+= 	"</div>"
	calendarDivString 	+= 	"<table>"
	calendarDivString 	+= 	'<tr class="ndp-days">'
	calendarDivString 	+= 	"<th>Sun</th>"
	calendarDivString 	+= 	"<th>Mon</th>"
	calendarDivString 	+= 	"<th>Tue</th>"
	calendarDivString 	+= 	"<th>Wed</th>"
	calendarDivString 	+= 	"<th>Thu</th>"
	calendarDivString 	+= 	"<th>Fri</th>"
	calendarDivString 	+= 	"<th>Sat</th>"
	calendarDivString 	+= 	"</tr>"
	calendarDivString 	+= 	"</table>"
	calendarDivString 	+= 	"</div>"
	*/