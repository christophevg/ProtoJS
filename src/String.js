ProtoJS.String = {
  contains : function( needle ) {
    return this.indexOf( needle ) > -1;
  },

  trim : function( value ) {
    if( typeof this.replace == "function" ) { value = this; }
    return value.replace(/^\s*/, "").replace(/\s*$/, "");
  },

  isArray   : function() { return false; },
  isHash    : function() { return false; },
  isFunction: function() { return false; },
  isString  : function() { return true;  },
  isNumber  : function() { return false; }
};

ProtoJS.mix( ProtoJS.String, String.prototype );
