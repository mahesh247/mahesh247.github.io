(function ($){ //Immediately invoked function expression which allow us to have our own private variables

	$.fn.myFunc = function( options ){

		//Easiest way to set default values
		var settings = $.extend({
			color: "green",
			backgroundColor: "white"
		}, options);

		this.css({
			color:settings.color,
			backgroundColor:settings.backgroundColor
		});
		return this;
	}

}(jQuery));