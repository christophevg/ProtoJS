ProtoJS.Test.Runner.addTestUnit( 
  ProtoJS.Test.extend( {
    getScope: function() { return "Binding"; },
    test001Variables: function() {
      var myValue1 = new ProtoJS.Binding.Bindable();
      var myValue2 = new ProtoJS.Binding.Bindable();
      var myValue3 = new ProtoJS.Binding.Bindable();
      var binder = new ProtoJS.Binding.Binder();
      binder.add( myValue1 );
      binder.add( myValue2 );
      binder.add( myValue3 );
      myValue1.set(123);
      this.assertEqual( myValue2.get(), 123 );
      this.assertEqual( myValue3.get(), 123 );
    },

    test002HTMLInputElement: function() {
      var myInput1 = document.createElement("INPUT");
      var myInput2 = document.createElement("INPUT");
      var myInput3 = document.createElement("INPUT");
      var binder = new ProtoJS.Binding.Binder();
      binder.add( myInput1 );
      binder.add( myInput2 );
      binder.add( myInput3 );
      myInput1.set(123);
      this.assertEqual( myInput2.get(), 123 );
      this.assertEqual( myInput3.get(), 123 );
    },

    test003Mixed: function() {
      var myInput = document.createElement("INPUT");        
      var myValue = new ProtoJS.Binding.Bindable();
      var binder = new ProtoJS.Binding.Binder();
      binder.add( myInput );
      binder.add( myValue );
      myInput.set(123);
      this.assertEqual( myValue.get(), 123 );
      myValue.set("abc");
      this.assertEqual( myInput.get(), "abc" );
    }
  } )
);
