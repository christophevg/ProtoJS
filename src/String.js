ProtoJS.String = {
    contains : function( needle ) {
	return this.indexOf( needle ) > 0;
    },

    isArray   : function() { return false; },
    isHash    : function() { return false; },
    isFunction: function() { return false; },
    isString  : function() { return true;  },
    isNumber  : function() { return false; }
};

ProtoJS.mix( ProtoJS.String, String.prototype );
