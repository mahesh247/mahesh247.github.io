(function( $ ){

	$.Converter = function( element ){
		this.$el = $(element);
		this._init();
	}

	$.Converter.defaults = {
		e_base_YY : 1944, e_base_MM : 1, e_base_DD : 1,
		n_base_YY : 2000, n_base_MM : 9, n_base_DD : 17,
		ord_month : new Array(31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31), // days for month general year
		
		leap_month : new Array(31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31),
		//bs: this.bs,
		//date : new Date(),
		//engYY : this.date.getFullYear(),
		//engMM : date.getMonth(),
		//engDD : date.getDate(),
		//eYear : new Array(),

		eMonth : new Array(
				'January',
				'February',
				'March',
				'April',
				'May',
				'June',
				'July',
				'August',
				'September',
				'October',
				'November',
				'December'
			),

		nMonth : new Array(
				'बैशाख', 'जेष्ठ', 'असार', 'श्रवण', 'भाद्र', 'असोज', 'कार्तिक', 'मङ्सिर', 'पौष', 'माघ', 'फागुन', 'चैत्र'
			),
		nNum : new Array( '०', '१', '२', '३', '४', '५', '६', '७', '८', '९' ),
		weekDays : new Array( 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ),
		nweekDays : new Array( 'आइतबार ', 'सोमबार', 'मङ्गलबार', 'बुधबार', 'बिहीबार', 'शुक्रबार', 'शनिबार' )

	}

	$.Converter.prototype = {
		_init: function(){
			this.options = $.extend(true, {}, $.Converter.defaults);
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
			e_diff = this.options.e_base_YY;
			n_diff = this.options.n_base_YY;
			var date = new Date();
			var engYY = date.getFullYear();
			var engMM = date.getMonth();
			var engDD = date.getDate();
			var eYear = new Array();

			for(j = 0, i = 1944; i<=2050; i++, j++){
				eYear[j] = i;
			}
			this.engYear;
			this.eYear = eYear;

			var nToday = this._getCurrent(engYY, engMM + 1, engDD);
			//var nTD = nToday.split(',')
			//console.log(nToday); return false;
			this._today(nToday[0],nToday[1] - 1,nToday[2]);
		},
		_leapYear: function(y){
			if(y % 4 == 0){
				return true;
			}else{
				return false;
			}
		},
		_countDaysAD: function(y,m,d){
			var total_eDays = 0;
			for(i = 0; i < (y - e_diff); i++){ //Total days for month calculation (english)
				if(this._leapYear(e_diff + i) === true){
					for(j = 0; j < 12; j++){
						total_eDays += this.options.leap_month[j];
					}				
				}
				else{
					for(j = 0; j < 12; j++){
						total_eDays += this.options.ord_month[j];
					}
				}
			}

			//count total number of days in term of month

			for(i = 0; i < (m-1); i++){
				if(this._leapYear(y) === true){
						total_eDays += this.options.leap_month[i];				
				}
				else{
						total_eDays += this.options.ord_month[i];
				}
			}
			//console.log(total_eDays);
			total_eDays += parseInt(d);
			//console.log(total_eDays);
			return total_eDays;
		},
		_countDaysBS: function(y,m,d){
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
			var total_nDays = 0;
			for(i = 0, n = n_diff; i < (y - n_diff); i++){ //Total days for month calculation (english)
				yr = bs[n];
				n++;
				for(j=1; j<=12; j++){
					total_nDays += yr[j];
				}
				//console.log(i);
			}
			//for(i = 0; i < (y - n_diff); i++){ //Total days for month calculation (english)
			
			yr = bs[y];
			for(j=1; j<m; j++){
				total_nDays += yr[j];
			}
			
			total_nDays += parseInt(d);
			//console.log(total_nDays);
			return total_nDays;
		},
		_englishToNepali: function(eDays){
			var i = 0;
			var day = 6-1;
			var m = j = 9;
			//var total_nDays = 0;
			var total_nDays = 17-1;
			var y = 2000;
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
			//console.log(eDays);
			while(eDays != 0){			
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
				eDays--;
			}
			//console.log(firstDay);
			numDay = day;
			var result = [y, m, total_nDays, day];
			return result;
		},
		_nepaliToEnglish: function(nDays){
			var dif_eyy     = 1943;
			var dif_emm     = 4;
			var dif_edd     = 14 - 1;	// initial english date.
			var dif_nyy     = 2000;
			var dif_nmm     = 1;
			var dif_ndd     = 1;		// iniital equivalent nepali date.
			var a           = 0;
			var day         = 4 - 1 - 1;
			var m           = 0;
			var y           = 0;
			var i           = 0;
			var k           = 0;
			var numDay   	= 0;
			var total_eDays = dif_edd;
			var m = dif_emm - 1;
			var y = dif_eyy;

			while(nDays != 0){
				if(this._leapYear(y) === true){
					a = this.options.leap_month[m];
				}else{
					a = this.options.ord_month[m];
				}
				total_eDays++;
				day++;
				//console.log(total_eDays); return false;
				if(total_eDays > a){
					//console.log(m);
					m++;
					total_eDays = 1;
					if(m >= 12){
						y++;
						m = 0;
					}
				}
				
				if(day > 6){
					day = 0;
				}
				
				nDays--;
			}
			numDay = day;
			//console.log(numDay);
			var result = [y, m, total_eDays, day];
			return result;
		},
		_today: function(nepYY, nepMM, nepDD){
			//fill eng select box
			var date = new Date();
			var engYY = date.getFullYear();
			var engMM = date.getMonth();
			var engDD = date.getDate();
			$.each(this.eYear, function(key, val){
				if(val == engYY){
					$('select#eYY').append('<option selected="selected" value="'+val+'">'+val+'</option');
				}else{
					$('select#eYY').append('<option value="'+val+'">'+val+'</option');
				}
			});

			$.each(this.options.eMonth, function(key, val){
				if(key == engMM){
					$('select#eMM').append('<option selected="selected" value="'+key+'">'+val+'</option');
				}else{
					$('select#eMM').append('<option value="'+key+'">'+val+'</option');
				}
			});	

			var dt = new Date(engYY, engMM+1, 0);
			month_length = dt.getDate();
			//console.log(mnth_lenth);

			for(m_days = 1; m_days <= month_length; m_days++){
				if(m_days == engDD){
					$('select#eDD').append('<option selected="selected" value="'+m_days+'">'+m_days+'</option');
				}else{
					$('select#eDD').append('<option value="'+m_days+'">'+m_days+'</option');
				}
			}



			//fill nepali select box
			/*nepYY = y;
			nepMM = m;
			nepDD = d;*/
			//console.log(nepDD);

			for(j = 0, a = 2000; a<=2090; a++, j++){
				if(a == nepYY){
					$('select#nYY').append('<option selected="selected" value="'+a+'">'+this._engToNepDigit(a)+'</option');
				}else{
					$('select#nYY').append('<option value="'+a+'">'+this._engToNepDigit(a)+'</option');
				}
			}

			/*$.each(bs, function(key, val){
				if(key == nepYY){
					$('select#nYY').append('<option selected="selected" value="'+key+'">'+key+'</option');
				}else{
					$('select#nYY').append('<option value="'+key+'">'+key+'</option');
				}
			});*/

			$.each(this.options.nMonth, function(key, val){
				if(key == nepMM){
					$('select#nMM').append('<option selected="selected" value="'+key+'">'+val+'</option');
				}else{
					$('select#nMM').append('<option value="'+key+'">'+val+'</option');
				}
			});	

			nepY = $('select#nYY').val();
			nepM = $('select#nMM').val();
			//console.log(mnth_lenth);
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
			nYear = bs[nepY];
			nMonthLength = nYear[parseInt(nepM) + parseInt(1)];
			//console.log(nepM + 1);

			for(nm_days = 1; nm_days <= nMonthLength; nm_days++){
				if(nm_days == nepDD){
					$('select#nDD').append('<option selected="selected" value="'+nm_days+'">'+this._engToNepDigit(nm_days)+'</option');
				}else{
					$('select#nDD').append('<option value="'+nm_days+'">'+this._engToNepDigit(nm_days)+'</option');
				}
			}
		},
		_getCurrent: function(y,m,d){
			newNDate = this._englishToNepali(this._countDaysAD(y,m,d));
			return newNDate;
		},
		_engToNepDigit: function (num) {
		    num = "" + num;
		    for (var e = "", s = 0; num.length > s; s++) e += this.options.nNum[num[s]];
		    return e;
		},
		//Public Functions,
		
		convertToBS: function(y,m,d){
			newNDate = this._englishToNepali(this._countDaysAD(y,m,d));
			var resultnDate = this._engToNepDigit(newNDate[0])+', '+this.options.nMonth[newNDate[1] - 1]+', '+this._engToNepDigit(newNDate[2])+' - '+ this.options.nweekDays[newNDate[3]];
		
			return resultnDate;
			//console.log(a);
		},
		convertToAD: function(y,m,d){
			//this._countDaysBS(y,m,d)
			//console.log(this._countDaysBS(y,m,d));
			newEDate = this._nepaliToEnglish(this._countDaysBS(y,m,d));
			//return a;
			var resulteDate = newEDate[0]+', '+this.options.eMonth[newEDate[1]]+', '+newEDate[2]+' - '+ this.options.weekDays[newEDate[3]];
		
			return resulteDate;
			//console.log(a);
		}
	}

	$.fn.myConverter = function( ){
		var instance = $.data( this, 'converter' );

		this.each(function() {
				
				if ( instance ) {

					instance._init();
				
				}
				else {

					instance = $.data( this, 'converter', new $.Converter( this ) );
				
				}

			});

		return instance;
	}

}(jQuery));