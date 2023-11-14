# Introducing Js Utils v3!

I'm thrilled to present Js Utils v3, born out of real-world experiences across various web development projects. You know those basic tasks we tackle day in and day out? That's precisely what this npm package is all about—making your web dev life easier.

While the examples provided here utilize HTML elements by their IDs, please note that the functionalities offered in this project can also be employed with querySelector and querySelectorAll. Additionally, it's essential to emphasize that this project allows for flexibility and adaptation, empowering users to refactor and customize its functionalities based on their specific use cases and needs.

Cheers to simpler web development with process with Js Utils!

---

## How does it work?
```sh
npm install @andresclua/jsutil
```

## include the library in file
```sh
import JSUTIL from '@andresclua/jsutil';
```

*Note: Certain functions have been relocated outside the main class to accommodate scenarios where they may be the sole operation required.*
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



### setAttr & getAttr
```sh
const name = JSUTIL.getAttr(myElement, 'data-name');
const age = JSUTIL.setAttr(myElement, 'data-age', 20);
```

### visibleOnLoad

function is designed to check whether a specified HTML element is visible in the viewport when a page loads. It provides the flexibility to customize the visibility criteria by accepting an `options` object with parameters.

###### Parameters

- `options` (Object): An object containing the following properties:
  - `element` (HTMLElement): The HTML element to check for visibility within the viewport.
  - `additionalPixels` (number, optional, default: 20): The number of additional pixels to consider when calculating visibility. This allows you to expand or contract the visibility threshold.

###### Returns

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

---

## Aditional Functions
```
import {nameoffunction} from  @andresclua/jsutil
```
### IsBrowser
```
import {isBrowser} from  @andresclua/jsutil
console.log(isBrowser('chrome')) // will return a boolean
```
Available options:
- chrome
- safari
- firefox
- ie
- edge

### isDevice
```
import {isDevice} from  @andresclua/jsutil
console.log(isDevice('touch')) // will return a boolean
```
Available options:
- touch
- android
- ios

### Take your Time (promise)
The **tyt** function is a utility that allows you to introduce a delay or pause in your JavaScript code. It's particularly useful in scenarios where you want to control the timing of certain operations, such as asynchronous calls, animations, or other timed tasks.

##### Async Await
```
import {tyt} from  @andresclua/jsutil
async function asyncTYT() {
  try {
    await tyt(500);
    console.log('Async Function: End');
  } catch (error) {
    console.error('Async Function: Error:', error.message);
  }
}
asyncTYT();
```
##### Promise Then
```
import {tyt} from  @andresclua/jsutil
async function asyncTYT() {
  try {
    await tyt(500);
    console.log('Async Function: End');
  } catch (error) {
    console.error('Async Function: Error:', error.message);
  }
}
asyncTYT();
```

### LoadAndUseScript (Promise)
Asynchronous function to load and apply a stylesheet dynamically.

##### Async Await
```
import {LoadAndUseScript} from  @andresclua/jsutil
async function asyncExampleStyle() {
  try {
    await loadAndUseStyle({
      href: 'https://example.com/styles.css',
      media: 'screen'
    });
    console.log('Async Function: End');
  } catch (error) {
    console.error('Async Function: Error loading stylesheet:', error.message);
  }
}
asyncExampleStyle();
 ```
 
### LoadAndUseStyle (Promise)
Asynchronous function to dynamically load a Styles and execute it.
```
async function asyncloadAndUseStyle() {
  try {
    await loadAndUseStyle({
      href: 'https://example.com/styles.css',
      media: 'screen'
    });
    console.log('Async Function: End');
  } catch (error) {
    console.error('Async Function: Error loading stylesheet:', error.message);
  }
}
asyncloadAndUseStyle();
 ```
---
#  For Nuxt 3 Projects
```sh
npm install @andresclua/jsutil
```
Inside plugin folder
```sh
  import JSUTIL,{isBrowser,isDevice}  from '@andresclua/jsutil';

export default defineNuxtPlugin(async(nuxtApp) => {
  nuxtApp.provide('JSUTIL', new JSUTIL())
  nuxtApp.provide('isBrowser', isBrowser)
  nuxtApp.provide('isDevice', isDevice)
})
```
```sh
<script lang="ts" setup>
  var paragraph = ref(null)
  const { $JSUTIL,$isBrowser,$isDevice,$Collapsify } = useNuxtApp(); 
  onMounted(()=>{
    if(process.client){
      console.log('collapsify : ', $Collapsify)
      $JSUTIL.addClass(paragraph.value,'foo')
      console.log('isBrowser : ',$isBrowser('safari'))
      console.log('isDevice : ',$isDevice('touch'))
    }
  })
</script>
```

---
![awesome](https://media.giphy.com/media/LeikbswJKXOMM/giphy.gif)

[Github Profile](https://github.com/andresclua/)