ProtoJS.Ajax = Class.extend( {
  init: function() {
    this.xmlhttp = null;
    if (window.XMLHttpRequest) {
      // code for IE7+, Firefox, Chrome, Opera, Safari
      this.xmlhttp=new XMLHttpRequest();
    } else if (window.ActiveXObject) {
      // code for IE6, IE5
      this.xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    } else {
      alert("Your browser does not support XMLHTTP!");
    }
  },

  fetch: function(url, callback) {
    this.xmlhttp.open("GET", url, false);
    if(callback) {
      this.xmlhttp.onreadystatechange = function() {
        callback.call(this, this.xmlhttp);
      }.scope(this);
    }
    this.xmlhttp.send(null);
    return this.xmlhttp.responseText;
  },
});
