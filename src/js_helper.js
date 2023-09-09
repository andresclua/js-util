import { tyt,loadAndUseScript,loadAndUseStyle } from "./promises/index";
import { isBrowser,isDevice } from "./utilities/index";
class JSUTIL{
    
    _getElements(id) {
        if (typeof id == "object") {
          return [id];
        } else {
          return document.querySelectorAll(id);
        }
    };

    // .hide(selector)
    hide(sel) {
        this._hideElements(this._getElements(sel));
    };
    _hideElements(elements) {
        var i, l = elements.length;
        for (i = 0; i < l; i++) {
        this._hideElement(elements[i]);
        }
    };
    _hideElement(element) {
        this._styleElement(element, "display", "none");
    };
    
    //.show(selector)
    show(sel, a) {
        var elements = this._getElements(sel);
        if (a) {this._hideElements(elements);}
        this._showElements(elements);
    };
    _showElements (elements) {
        var i, l = elements.length;
        for (i = 0; i < l; i++) {
          this._showElement(elements[i]);
        }
    };
    _showElement(element) {
        this._styleElement(element, "display", "block");
    };

    //addStyle [element, property, value]
    addStyle(sel, prop, val) {
        this._styleElements(this._getElements(sel), prop, val);
    };
    _styleElements(elements, prop, val) {
        var i, l = elements.length;
        for (i = 0; i < l; i++) {    
            this._styleElement(elements[i], prop, val);
        }
    };
    _styleElement (element, prop, val) {
        element.style.setProperty(prop, val);
    };
    
    //toggleShow(selector)
    toggleShow (sel) {
        var i, x = this._getElements(sel), l = x.length;
        for (i = 0; i < l; i++) {    
          if (x[i].style.display == "none") {
            this._styleElement(x[i], "display", "block");
          } else {
            this._styleElement(x[i], "display", "none");
          }
        }
    };

    // addClass(selector,'class')
    addClass(sel, name) {
        this._addClassElements(this._getElements(sel), name);
    };
    _addClassElements (elements, name) {
        var i, l = elements.length;
        for (i = 0; i < l; i++) {
          this._addClassElement(elements[i], name);
        }
    };
    _addClassElement (element, name) {
        var i, arr1, arr2;
        arr1 = element.className.split(" ");
        arr2 = name.split(" ");
        for (i = 0; i < arr2.length; i++) {
          if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
        }
    };

    //removeClass(selector,'class')
    removeClass(sel, name) {
        this._removeClassElements(this._getElements(sel), name);
    };
    _removeClassElements(elements, name) {
        var i, l = elements.length, arr1, arr2, j;
        for (i = 0; i < l; i++) {
          this._removeClassElement(elements[i], name);
        }
    };
    _removeClassElement  (element, name) {
        var i, arr1, arr2;
        arr1 = element.className.split(" ");
        arr2 = name.split(" ");
        for (i = 0; i < arr2.length; i++) {
          while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1);     
          }
        }
        element.className = arr1.join(" ");
    };

    //ToggleClass('class')
    toggleClass(sel, c1, c2) {
        this._toggleClassElements(this._getElements(sel), c1, c2);
    };
    _toggleClassElements(elements, c1, c2) {
        var i, l = elements.length;
        for (i = 0; i < l; i++) {    
            this._toggleClassElement(elements[i], c1, c2);
        }
    };
    _toggleClassElement (element, c1, c2) {
        var t1, t2, t1Arr, t2Arr, j, arr, allPresent;
        t1 = (c1 || "");
        t2 = (c2 || "");
        t1Arr = t1.split(" ");
        t2Arr = t2.split(" ");
        arr = element.className.split(" ");
        if (t2Arr.length == 0) {
          allPresent = true;
          for (j = 0; j < t1Arr.length; j++) {
            if (arr.indexOf(t1Arr[j]) == -1) {allPresent = false;}
          }
          if (allPresent) {
            this._removeClassElement(element, t1);
          } else {
            this._addClassElement(element, t1);
          }
        } else {
          allPresent = true;
          for (j = 0; j < t1Arr.length; j++) {
            if (arr.indexOf(t1Arr[j]) == -1) {allPresent = false;}
          }
          if (allPresent) {
            this._removeClassElement(element, t1);
            this._addClassElement(element, t2);          
          } else {
            this._removeClassElement(element, t2);        
            this._addClassElement(element, t1);
          }
        }
    };


    filterHTML(id, sel, filter) {
      
      var a, b, c, i, ii, iii, hit;
      a = this._getElements(id);
      for (i = 0; i < a.length; i++) {
        b = a[i].querySelectorAll(sel);
        for (ii = 0; ii < b.length; ii++) {
          hit = 0;
          if (b[ii].innerText.toUpperCase().indexOf(filter.toUpperCase()) > -1) {
            hit = 1;
          }
          c = b[ii].getElementsByTagName("*");
          for (iii = 0; iii < c.length; iii++) {
            if (c[iii].innerText.toUpperCase().indexOf(filter.toUpperCase()) > -1) {
              hit = 1;
            }
          }
          if (hit == 1) {
            this.addStyle(b[ii],'display','block');
          } else {
            this.addStyle(b[ii],'display','none');
          }
        }
      }
    };

    matches(element, identifier, attribute = 'class') {
      if (!element) {
        return false;
      }

      if (Array.isArray(identifier)) {
        if (attribute === 'class') {
          const classList = element.classList;
          if (classList) {
            const classListArray = Array.from(classList);
            return identifier.some(className => classListArray.includes(className));
          }
        } else {
          const attributeValue = element.getAttribute(attribute);
          return identifier.some(value => value === attributeValue);
        }
      } else {
        if (attribute === 'class') {
          const classList = element.classList;
          if (classList) {
            const classListString = Array.from(classList).join(' ');
            const regex = new RegExp(`\\b${identifier}\\b`);
            return classListString.match(regex) !== null;
          }
        } else {
          const attributeValue = element.getAttribute(attribute);
          return attributeValue === identifier;
        }
      }

      return false;
    }

    sortArray(array, type = "alphabetical") {
      if (type === "alphabetical") {
        return array.sort((a, b) => {
          const elementA = a.toLowerCase();
          const elementB = b.toLowerCase();
    
          if (elementA < elementB) {
            return -1;
          } else if (elementA > elementB) {
            return 1;
          } else {
            return 0;
          }
        });
      } else if (type === "number") {
        return array.sort((a, b) => a - b);
      } else {
        console.error("Invalid sorting type. Please choose 'alphabetical' or 'number'.");
        return array;
      }
    }

    stringToNumber(str) {
      const parsedNumber = parseFloat(str);
      if (!isNaN(parsedNumber)) {
        return parsedNumber;
      } else {
        throw new Error('Invalid input. Cannot convert to a number.');
      }
    }

    stringToBoolean(input) {
      const lowerInput = input.toLowerCase(); // Convert input to lowercase

      if (lowerInput === 'true' || lowerInput === '1') {
          return true;
      } else if (lowerInput === 'false' || lowerInput === '0') {
          return false;
      } else {
          throw new Error('Invalid input. Only "true", "false", "1", or "0" are allowed.');
      }
    }


    setAttr(element, attributeName, attributeValue) {
      if (element && attributeName) {
          element.setAttribute(attributeName, attributeValue);
      }
    }

    getAttr(element, attributeName) {
        if (element && attributeName) {
            return element.getAttribute(attributeName);
        }
        return null; // Return null if element or attributeName is not provided
    }

    isElementVisibleOnLoad(options) {
      const { element, additionalPixels = 20 } = options;

      if (!element) {
        console.log('Element does not exist.');
        // Element doesn't exist, return true to indicate it's not visible.
        return true;
      }

      const elementRect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;

      const modifiedThreshold = windowHeight + additionalPixels;

      if (elementRect.bottom < -additionalPixels || elementRect.top > modifiedThreshold) {
        return false;
      }
      return true;
    }

}
 

export default JSUTIL;
export {tyt, loadAndUseScript,loadAndUseStyle }; 
export {isBrowser,isDevice};

