ProtoJS.Test.Runner.addTestUnit( 

	ProtoJS.Test.extend( {
		getScope: function() { return "Object"; },

		test001TypeChecks: function() {
			// TODO: test ALL combo's ;-)
			this.assertTrue( "123".isString() );
			this.assertTrue( Object.isString( "123" ) );

			this.assertTrue( [ 1, 2, 3 ].isArray() );
			this.assertFalse( "123".isArray() );

			this.assertFalse( (123).isString() );
			this.assertTrue( (123).isNumber() );

			this.assertTrue( Object.isArray( [ 1, 2 ] ) );
			this.assertFalse( Object.isArray( { 1:1, 2:2 } ) );
		}
	} )

);
