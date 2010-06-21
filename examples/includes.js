var scripts = [ 
  "src/ProtoJS.js", 
  "src/Mixin.js", 
  "src/Object.js", 
  "src/String.js", 
  "src/Number.js", 
  "src/Class.js", 
  "src/Array.js", 
  "src/Hash.js",    
  "src/Function.js",
  "src/Event.js"
];

function addScript(url) {
  document.writeln( "<script type=\"text/javascript\" src=\"" + url + "\"></script>" );
}

function loadScripts(prefix) {
  for( var i=0; i<scripts.length; i++ ) {
    addScript(prefix + scripts[i]);
  }
}

if( typeof window.loadingPrefix == "undefined" ) {
  window.loadingPrefix = "../";
}

loadScripts(window.loadingPrefix);
