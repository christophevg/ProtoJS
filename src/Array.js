ProtoJS.Array =  {
  compare: function(other) {
    if (this.length != other.length) { return false; }
    for (var i = 0; i < other.length; i++) {
      if (this[i].compare) { 
        if (!this[i].compare(other[i])) { return false; }
      }
      if (this[i] !== other[i]) { return false; }
    }
    return true;
  },

  has: function(needle) {
    return this.indexOf(needle) > -1;
  },

  unique: function unique() {
    var old = this.dup();
    this.clear();
    old.iterate( function(item) { 
      if( !this.has(item) ) { this.push(item); }
    }.scope(this) );
    return this;
  },

  iterate: function(handler, context) {
    for(var i=0, length=this.length; i<length; i++ ) {
      handler.call(context, this[i], i);
    }
  },

  dup: function() {
    return [].concat(this);
  },

  clear: function() {
    this.length = 0;
    return this;
  },

  remove: function() {
    var needles = $A(arguments);
    var old = this.dup();
    this.clear();
    old.iterate( function(item) { 
      if( !needles.has(item) ) { this.push(item); }
    }.scope(this) );
    return this;
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
  while (length--) { results[length] = object[length]; }
  return results;
}
