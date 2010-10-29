ProtoJS.Test.Runner.addTestUnit( 

	ProtoJS.Test.extend( {
		getScope: function() { return "Test"; },

		test001TestPositiveAssertions: function() {
			var test = ProtoJS.Test.extend( { 
				getScope: function() { return "test"; },
				test001AssertTrue :    function() { this.assertTrue    (true    ); },
				test002AssertFalse:    function() { this.assertFalse   (false   ); },
				test003AssertEqual:    function() { this.assertEqual   (123, 123); },
				test003AssertNotEqual: function() { this.assertNotEqual(123, 456); }
			} );
			var runner = new ProtoJS.Test.RunDriver();
			runner.addTestUnit(test).withoutDetails().start();
			this.assertEqual( runner.getResults().total,      4 );
			this.assertEqual( runner.getResults().failed,     0 );
			this.assertEqual( runner.getResults().successful, 4 );
		},

		test002TestNegtaiveAssertions: function() {
			var test = ProtoJS.Test.extend( { 
				getScope: function() { return "test"; },
				test001AssertTrue :    function() { this.assertTrue    (false   ); },
				test002AssertFalse:    function() { this.assertFalse   (true    ); },
				test003AssertEqual:    function() { this.assertEqual   (123, 456); },
				test003AssertNotEqual: function() { this.assertNotEqual(123, 123); }
			} );
			var runner = new ProtoJS.Test.RunDriver();
			runner.addTestUnit(test).withoutDetails().start();
			this.assertEqual( runner.getResults().total,      4 );
			this.assertEqual( runner.getResults().failed,     4 );
			this.assertEqual( runner.getResults().successful, 0 );
		},

		test003TestUsingSuccess: function() {
			var runner = new ProtoJS.Test.RunDriver();
			runner.withoutDetails()
			  .test( function(data, msg, result) {
			    return { result: data == result, info: "" };
		    } )
		    .using( [ { name : "001", data : "ok", result: "ok" } ] );
			this.assertEqual( runner.getResults().total,      1 );
			this.assertEqual( runner.getResults().failed,     0 );
			this.assertEqual( runner.getResults().successful, 1 );
	  },

		test004TestUsingFail: function() {
			var runner = new ProtoJS.Test.RunDriver();
			runner.withoutDetails()
			  .test( function(data, msg, result) {
			    return { result: data == result, info: "" };
		    } )
		    .using( [ { name : "001", data : "ok", result: "NOT ok" } ] );
			this.assertEqual( runner.getResults().total,      1 );
			this.assertEqual( runner.getResults().failed,     1 );
			this.assertEqual( runner.getResults().successful, 0 );
	  }

	} )
);
