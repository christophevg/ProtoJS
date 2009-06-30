ProtoJS.Number = {
    isArray   : function() { return false; },
    isHash    : function() { return false; },
    isFunction: function() { return false; },
    isString  : function() { return false; },
    isNumber  : function() { return true;  }
};

ProtoJS.mix( ProtoJS.Number, Number.prototype );
