// Object.create() : Polyfill
if (typeof Object.create != 'function') {
    Object.create = (function(undefined) {
        var Temp = function() {};
        return function (prototype, propertiesObject) {
        if(prototype !== Object(prototype)) {
            throw TypeError(
            'Argument must be an object, or null'
            );
        }
        Temp.prototype = prototype || {};
        var result = new Temp();
        Temp.prototype = null;
        if (propertiesObject !== undefined) {
            Object.defineProperties(result, propertiesObject); 
        } 
        
        // to imitate the case of Object.create(null)
        if(prototype === null) {
            result.__proto__ = null;
        } 
        return result;
        };
    })();
}

//String.endsWith(searchString, position) 
if (!String.prototype.endsWith) {
    String.prototype.endsWith = function(searchString, position) {
        var subjectString = this.toString();
        if (typeof position !== 'number' || !isFinite(position) || Math.floor(position) !== position || position > subjectString.length) {
            position = subjectString.length;
        }
        position -= searchString.length;
        var lastIndex = subjectString.lastIndexOf(searchString, position);
        return lastIndex !== -1 && lastIndex === position;
    };
}

// iE8 지원   
// Node.textContent  속성  innerHTML
if (Object.defineProperty 
  && Object.getOwnPropertyDescriptor 
  && Object.getOwnPropertyDescriptor(Element.prototype, "textContent") 
  && !Object.getOwnPropertyDescriptor(Element.prototype, "textContent").get) {
  (function() {
    var innerText = Object.getOwnPropertyDescriptor(Element.prototype, "innerText");
    Object.defineProperty(Element.prototype, "textContent",
     {
       get: function() {
         return innerText.get.call(this);
       },
       set: function(s) {
         return innerText.set.call(this, s);
       }
     }
   );
  })();
}