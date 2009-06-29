ProtoJS.Function = {
    scope: function scope(context) { 
	var method = this;
	return function() { return method.apply( context, arguments ) } 
    }
}

ProtoJS.mix( ProtoJS.Function, Function.prototype );
