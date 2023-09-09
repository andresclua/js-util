import JSUTIL from './js_helper';
import {tyt,loadScript,loadAndUseStyle} from './js_helper.js';
import {isBrowser,isDevice} from './js_helper';

// function isBrowser(system) {
//     console.log('va')
//     var userAgent = navigator.userAgent || navigator.vendor || window.opera;
//     switch (system) {
//         case 'touch':
//             return (('ontouchstart' in window) || (navigator.maxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0));
//         case 'android':
//             return /android/i.test(userAgent);
//         case 'ios':
//             return typeof navigator.standalone === 'boolean';
//         default:
//             return null;
//     }
//   }


class Page{
    constructor(){
        this.init()
    }
    async init(){ 

        await tyt(200)

        await loadAndUseStyle({
            href: 'https://teamthunderfoot.com/wp-content/themes/thunderfoot-wp-theme/dist/css/tf_common_styles.083.css',
            media: 'screen'
        })

        
        var jsutil = new JSUTIL()
        /*
            Add Class
        */
        jsutil.addClass(document.getElementById('add-class-trigger'),'add-class')

        /*
            Remove Class
        */
        jsutil.removeClass(document.getElementById('remove-class-trigger'),'remove-class');

        /*
            Toggle Class
        */
        document.getElementById('toggle-class-trigger').addEventListener('click', ()=>{
            jsutil.toggleClass(document.getElementById('toggle-class-trigger'),'toggle-class');
        });

        /*
            add Style
        */
        jsutil.addStyle(document.getElementById('add-style-trigger'),'background-color','orange');
        jsutil.addStyle(document.getElementById('add-style-trigger'),'padding','10px');

        /*
            dispay none
        */
        document.getElementById('hide-trigger').addEventListener('click', (e)=>{
            e.preventDefault()
            jsutil.hide(document.getElementById('hide-trigger'));
        });

        /*
            display block
        */
        document.getElementById('show-trigger').addEventListener('click', (e)=>{
            e.preventDefault()
            jsutil.show(document.getElementById('content-to-show'));
        });

        /*
            Matches by class
        */
        if (jsutil.matches(document.querySelector('.test'), ['asd','toto'])) {
          console.log("element has class highlight");
        } else{
            console.log('jsutil.matches - .test div doesnt have class  "asd" or "toto"')
        }

        /*
            Matches by custom attribute
        */
        if (jsutil.matches(document.getElementById("customElement"), ["custom-value", "other-value"], 'data-custom-attribute')) {
            console.log("Element matches the specified custom attribute values");
          } else {
            console.log("Element does not match the specified custom attribute values");
        }

        /*
            Filter
        */
        document.getElementById('triggerfilter').addEventListener('input', (event)=> {
            jsutil.filterHTML(document.getElementById('list'),'li',event.target.value);
        });


        /*
            isElementVisibleOnLoad v1
        */
        const isvisibleaddclassTrigger = jsutil.isElementVisibleOnLoad({ element: document.getElementById('add-class-trigger'), additionalPixels: 30 });;
        if (isvisibleaddclassTrigger) {
        console.log('element with ID add-class-trigger is  visible on load.');
        } else {
        console.log('element with ID add-class-trigger is not visible on load.');
        }

        /*
            isElementVisibleOnLoad v2
        */
        const detectdevice = jsutil.isElementVisibleOnLoad({ element: document.getElementById('detectdevice'), additionalPixels: 120 });;
        if (detectdevice) {
            console.log('element with ID Detectdevice is  visible on load.');
        } else {
            console.log('element with ID Detectdevice is not visible on load.');
        }

        /*
            isBrowser
        */
        var browsers = ['chrome','safari','firefox','ie','edge']
        browsers.forEach(element => {
            var li = document.createElement("li");
            li.appendChild(document.createTextNode(`is this browser ${element}? ${isBrowser(element)} `))
            document.getElementById('browserList').appendChild(li);
        });


        var devices = ['touch','android','ios','laptop']
        devices.forEach(element => {
            var li = document.createElement("li");
            li.appendChild(document.createTextNode(`is this ${element}? ${isDevice(element)} `))
            document.getElementById('detectdevice').appendChild(li);
        });

    }
}
export default Page;

new Page()
