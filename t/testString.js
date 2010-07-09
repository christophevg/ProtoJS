ProtoJS.Test.Runner.addTestUnit( 

	ProtoJS.Test.extend( {
		getScope: function() { return "String"; },

		test001Contains: function() {
    	this.assertTrue( "123".contains( "2" ) );
		},
		
		test002ContainsOneOf: function() {
    	this.assertTrue(  "123".containsOneOf( [ "a", "2", "b" ] ) );
    	this.assertFalse( "123".containsOneOf( [ "a", "b", "c" ] ) );
		},
		
		test003Trim : function() {
    	this.assertEqual( " 123 ".trim(), "123" );
    	this.assertEqual( ProtoJS.String.trim( " 123\n\t "), "123");
		}
	} )

);
