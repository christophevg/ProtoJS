ProtoJS.Function = {
    scope: function scope(context) { 
	var method = this;
	return function() { return method.apply( context, arguments ) } 
    },

    isArray   : function() { return false; },
    isHash    : function() { return false; },
    isFunction: function() { return true;  },
    isString  : function() { return false; },
    isNumber  : function() { return false; }
}

ProtoJS.mix( ProtoJS.Function, Function.prototype );
