ProtoJS.Array =  {
    has: function(needle) {
	return this.indexOf(needle) > -1;
    },

    iterate: function(handler, context) {
	for(var i=0, length=this.length; i<length; i++ ) {
	    handler.call(context, this[i], i);
	}
    },

    isArray   : function() { return true;  },
    isHash    : function() { return false; },
    isFunction: function() { return false; },
    isString  : function() { return false; },
    isNumber  : function() { return false; }
};

ProtoJS.mix( ProtoJS.Array, Array.prototype );

function $A(object) {
    var length = object.length || 0;
    var results = new Array(length);
    while (length--) results[length] = object[length];
    return results;
}
