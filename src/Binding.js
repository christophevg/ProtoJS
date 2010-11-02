ProtoJS.Binding = {};

ProtoJS.Binding.Binder = Class.extend( {
  init : function() {
    this.values = [];
  },

  add : function(value) {
    if( ! (value instanceof ProtoJS.Binding.Bindable) ) {
      value = this.prepareNonBindable(value);
    }
    if( value == null || typeof value == "undefined" ) {
      console.log( "Cannot add non-Bindable or non-HTMLElement(id)." );
      return this;
    }
    value.on( "change", this.handleChange.scope(this) );
    this.values.push(value);
    return this;
  },

  prepareNonBindable: function(value) {
    if( typeof value == "string" ) {  // strings can be the id of an element
      value = document.getElementById(value);
    }
    if( typeof value == "object" ) { // known element ?
      // mix in Bindable functionality
      ProtoJS.mix( ProtoJS.Binding.Bindable.prototype, value, true );
      // map native event to ProtoJS event handling
      ProtoJS.Event.observe(value, "change", function(event) {
        this.fireEvent( "change", 
        event.srcElement ? event.srcElement : event.target);
      }.scope(value) );
    }
    return value;
  },

  handleChange : function(value) {
    if( this.updating === true ) { return; } // no snowball please
    this.updating = true;
    var newValue = value.get();
    this.values.iterate( function(element) {
      if( element != value ) { element.set(newValue); } // skip origin
    } );
    this.updating = false;
  }
} );

ProtoJS.Binding.Bindable = Class.extend({
  set : function(newValue) {
    this.value = newValue;
    this.fireEvent( "change", this );
    return this;
  },
  get : function() {
    return this.value;
  }
});

ProtoJS.Event.enable( ProtoJS.Binding.Bindable.prototype );
