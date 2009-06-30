ProtoJS.Object = {
  isArray: function(object) {
      object = object || this;
      return object != null && typeof object == "object" &&
	  'splice' in object && 'join' in object;
  },
    
  isHash: function(object) {
      object = object || this;
      return object instanceof Hash;
  },
    
  isFunction: function(object) {
      object = object || this;
      return typeof object == "function";
  },
    
  isString: function(object) {
      object = object || this;
      return typeof object == "string";
  },
    
  isNumber: function(object) {
      object = object || this;
      return typeof object == "number";
  },
    
  isUndefined: function(object) {
      return typeof object == "undefined";
  }
};

ProtoJS.mix( ProtoJS.Object, Object );
