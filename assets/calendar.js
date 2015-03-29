(function( $ ){

	var bs;
	var firstDay = '';
	e_diff = 1944;
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

	var ord_month = new Array(31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31); // days for month general year
		
	var	leap_month = new Array(31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31);

	$.Calendar = function( options, element ) {
		
		this.$el = $( element );
		this._init( options );
		e_eq_date = '1-1-1944';//eng base date for equating
		n_eq_date = '17-9-2000';//nep base date for equating
		
		
	};

	$.Calendar.defaults = {
		weeks : [ 'आइतबार ', 'सोमबार', 'मङ्गलबार', 'बुधबार', 'बिहीबार', 'शुक्रबार', 'शनिबार' ],
		//weeks : [ 'आईतवार', 'सोमवार', 'मंगलवार', 'बुधवार', 'बिहीवार', 'शुक्रवार', 'शनिबार' ],
		//weekabbrs : [ 'आईत', 'सोम', 'मंगल', 'बुध', 'बिह', 'शुक्र', 'शनि' ],
		weekabbrs : ['आइतबार ', 'सोमबार', 'मङ्गलबार', 'बुधबार', 'बिहीबार', 'शुक्रबार', 'शनिबार' ],
		//months : [ 'बैशाख', 'जेष्ठ', 'आषाढ', 'श्रावण', 'भाद्र', 'आश्विन', 'कार्तिक', 'मंसिर', 'पौष', 'माघ', 'फागुन', 'चैत्र' ],
		months : [ '', 'बैशाख', 'जेष्ठ', 'असार', 'श्रवण', 'भाद्र', 'असोज', 'कार्तिक', 'मङ्सिर', 'पौष', 'माघ', 'फागुन', 'चैत्र' ],
		//monthabbrs : [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec' ],
		// choose between values in options.weeks or options.weekabbrs
		displayWeekAbbr : false,
		// choose between values in options.months or options.monthabbrs
		displayMonthAbbr : false,
		// left most day in the calendar
		// 0 - Sunday, 1 - Monday, ... , 6 - Saturday
		startIn : 0,
		nNum : new Array( '०', '१', '२', '३', '४', '५', '६', '७', '८', '९' ),
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
			today_nep = this._get_nepali_date(count_days);
			nep_date = this._get_nepali_date(count_days);
			this.month = ( isNaN( this.options.month ) || this.options.month == null) ? nep_date[1] : this.options.month - 1;
			this.year = ( isNaN( this.options.year ) || this.options.year == null) ? nep_date[0] : this.options.year;
			this.caldata = this.options.caldata || {};
			//console.log(this.caldata);
			this._generateTemplate();
			this._initEvents();

		},
		_isLeap: function(y){
			if(y % 4 == 0){
				return true;
			}else{
				return false;
			}
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
				if(pos == 6){
					html += '<div class="holiday">';
				}else{
					html += '<div>';
				}
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

						inner += '<span class="fc-date">' + this._engToNepDigit(day) + '</span><span class="fc-weekday">' + this.options.weekabbrs[ j + this.options.startIn > 6 ? j + this.options.startIn - 6 - 1 : j + this.options.startIn ] + '</span>';

						// this day is:
						//var strdate = ( this.month < 10 ? '0' + ( this.month ) : this.month ) + '-' + ( day < 10 ? '0' + day : day ) + '-' + this.year,
						var strdate = ( this.month < 10 ? '0' + ( this.month ) : this.month ) + '-' + ( day < 10 ? '0' + day : day ),
							dayData = this.caldata[ strdate ];
							//console.log(strdate);
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
							//inner += '<div>' + content + '</div>';
						if(j == 6){
							//html += '<div class="holiday">';
							html += cellClasses !== '' ? '<div class="' + cellClasses + '">' : '<div class="holiday">';
						}else{
							html += cellClasses !== '' ? '<div class="' + cellClasses + '">' : '<div>';
						}
					//html += cellClasses !== '' ? '<div class="' + cellClasses + '">' : '<div>';
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
			var total_eDays = 0;
			for(i = 0; i < (y - e_diff); i++){ //Total days for month calculation (english)
				if(this._isLeap(e_diff + i) === true){
					for(j = 0; j < 12; j++){
						total_eDays += leap_month[j];
					}				
				}
				else{
					for(j = 0; j < 12; j++){
						total_eDays += ord_month[j];
					}
				}
			}

			//count total number of days in term of month
		
			for(i = 0; i < (m-1); i++){
				if(this._isLeap(y) === true){
						total_eDays += leap_month[i];				
				}
				else{
						total_eDays += ord_month[i];
				}
			}
			//console.log(total_eDays);
			total_eDays += parseInt(d);
			//console.log(total_eDays);
			return total_eDays;
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
		_engToNepDigit: function (num) {
		    num = "" + num;
		    for (var e = "", s = 0; num.length > s; s++) e += this.options.nNum[num[s]];
		    return e;
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
			firstDay = '';
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