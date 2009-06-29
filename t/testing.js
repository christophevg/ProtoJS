function test( answer, expected ) {
    if( answer === expected ) {
        document.writeln( "<span class=\"ok\">OK</span>" );
    } else {
        document.writeln( "<span class=\"failure\">FAIL" +
	                  "<pre><u>got</u>:\n" + answer + "\n" +
	                  "<u>expected</u>:\n" + expected + "</pre></span>");
    }
}
