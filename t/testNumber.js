ProtoJS.Test.Runner.addTestUnit( 

	ProtoJS.Test.extend( {
		getScope: function() { return "Number"; },

		test001toHex: function() {
    	this.assertEqual(  (1).toHex(), "1" );
    	this.assertEqual( (15).toHex(), "F" );
    	this.assertEqual( (16).toHex(), "10" );
    	this.assertEqual( (128*128+123).toHex(), "407B" );
		}
	} )
	
);
