var Hash = Class.extend( {
    init: function init(hash) {
      this.hash = hash;
    },

    keys: function keys() {
	var keys = [];
	this.iterate( function( key, value ) {
	    keys.push( key );
	} );
	return keys;
    },

    values: function values() {
	var values = [];
	this.iterate( function( key, value ) {
	    values.push( value );
	} );
	return values;
    },

    hasKey: function has(key) {
	return this.keys().has(key);
    },

    hasValue: function has(value) {
	return this.values().has(value);
    },

    iterate: function each(handler, context) {
	for(var key in this.hash ) {
	    handler.call(context, key, this.hash[key]);
	}
    },

    isArray   : function() { return false; },
    isHash    : function() { return true;  },
    isFunction: function() { return false; },
    isString  : function() { return false; },
    isNumber  : function() { return false; }
} );

var $H = function(hash) { return new Hash(hash); }
