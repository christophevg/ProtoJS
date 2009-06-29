ProtoJS.Array = {
    has: function(needle) {
	return this.indexOf(needle) > -1;
    },

    iterate: function(handler, context) {
	for(var i=0, length=this.length; i<length; i++ ) {
	    handler.call(context, this[i]);
	}
    }
}

ProtoJS.mix( ProtoJS.Array, Array.prototype );
