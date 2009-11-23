// this is a very minimalistic first stab
ProtoJS.Event = {
  observe: function(element, eventName, handler) {
    if(!element) { 
      console.log( "WARN: passed invalid element to ProtoJS.Event.observe." );
    } else {
      if (element.addEventListener) {
        element.addEventListener(eventName, handler, false);
      } else {
        element.attachEvent("on" + eventName, handler);
      }
    }
    return element;
  }
}
