
Hello everyone! 
This is my first project within npm, I hope it will be of great use to the community.
The need within several projects in which I have worked has been the kick of this project.
Basic operations that we use daily in web development.
On the examples everything is done with ID, but it works with queryselector and queryselectorall

## How does it work?
```sh
npm install @andresclua/jsutil
```

## include the library in file
```sh
import JSUTIL from '@andresclua/jsutil';
```
and voila, it is ready to use!
# Example

#### Add Class
```sh
var JSUTIL = new JSUTIL()
JSUTIL.addClass(document.getElementById('bar'),'foo')
```

#### Remove Class
```sh
var JSUTIL = new JSUTIL()
JSUTIL.removeClass(document.getElementById('bar'),'foo')
```

#### Toggle Class
```sh
var JSUTIL = new JSUTIL()
JSUTIL.toggleClass(document.getElementById('bar'),'foo')
```

####  Add Style
```sh
var JSUTIL = new JSUTIL()
JSUTIL.addStyle(document.getElementById('add-style-trigger'),'background-color','orange');
JSUTIL.addStyle(document.getElementById('add-style-trigger'),'padding','10px');
```

####  Hide Element
```sh
var JSUTIL = new JSUTIL()
document.getElementById('hide-trigger').addEventListener('click', (e)=>{
    e.preventDefault()
    JSUTIL.hide(document.getElementById('hide-trigger'));
});
```

####  Show Element
```sh
var JSUTIL = new JSUTIL()
document.getElementById('show-trigger').addEventListener('click', (e)=>{
    e.preventDefault()
    JSUTIL.show(document.getElementById('content-to-show'));
});
```

#### Matches
```sh
var JSUTIL = new JSUTIL()
// selector can be querySelector or ID
// class could be defined as string or array
// You can also use it with custom attributes
jsutil.matches(document.querySelector('.test'), ['lorem','ipsum']))
jsutil.matches(document.getElementById("customElement"), ["custom-value", "other-value"], 'data-custom-attribute')


```

#### Filter
```sh
var JSUTIL = new JSUTIL()
document.getElementById('triggerfilter').addEventListener('input', (event)=> {
    JSUTIL.filterHTML(document.getElementById('list'),'li',event.target.value);
});

```

### StringToBoolean
```sh
console.log(JSUTIL.stringToBoolean('True'));  // Output: true
console.log(JSUTIL.stringToBoolean('false')); // Output: false
console.log(JSUTIL.stringToBoolean('1'));     // Output: true
console.log(JSUTIL.stringToBoolean('0'));     // Output: false
```



### setAttr & setAttr
```sh
const name = JSUTIL.getAttr(myElement, 'data-name');
const age = JSUTIL.setAttr(myElement, 'data-age');
```

### visibleOnLoad

function is designed to check whether a specified HTML element is visible in the viewport when a page loads. It provides the flexibility to customize the visibility criteria by accepting an `options` object with parameters.

#### Parameters

- `options` (Object): An object containing the following properties:
  - `element` (HTMLElement): The HTML element to check for visibility within the viewport.
  - `additionalPixels` (number, optional, default: 20): The number of additional pixels to consider when calculating visibility. This allows you to expand or contract the visibility threshold.

#### Returns

- `true` (boolean): Indicates that the element is not visible in the viewport when the page loads, considering the specified `additionalPixels` value.

- `false` (boolean): Indicates that the element is visible in the viewport when the page loads, considering the specified `additionalPixels` value.


```
const detectdevice = jsutil.isElementVisibleOnLoad({ element: document.getElementById('detectdevice'), additionalPixels: 2330 });;

if (detectdevice) {
    console.log(detectdevice)
console.log('detectdevice is  visible on load.');
} else {
console.log('detectdevice is not visible on load.');
}
```




####  Get Browser
Available options:
 - chrome
 - safari
 - firefox
 - ie
 - edge

Returns Boolean

Example: 
```sh
var JSUTIL = new JSUTIL()
JSUTIL.getBrowser('chrome')
```


####  Get Device Type

Available options:
 - touch
 - android
 - ios

Returns Boolean

Example: 
```sh
var JSUTIL = new JSUTIL()
JSUTIL.getTypeDevice('touch')
```

#  For Nuxt Projects
```sh
npm install @andresclua/jsutil
```
```sh
  plugins: [
    { src: "~/plugins/jsutil.js", ssr: false },
  ],
```
```sh
import JSUTIL from '@andresclua/jsutil';
export default ({ app },inject) => {
    inject('JSUTIL', () => new JSUTIL() );
};
```
```sh
<template>
    <p ref="test">this is a test</p>
</template>
<script>
export default {
    mounted() {
        if (process.client) {
                this.$JSUTIL().addClass(this.$refs.test,'foo');
                console.log( 'is chrome?',this.$JSUTIL().getBrowser('chrome') );
        }
    },
}
</script>
```
![awesome](https://media.giphy.com/media/LeikbswJKXOMM/giphy.gif)

[Github Profile](https://github.com/andresclua/)