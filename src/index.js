

import {u_hide,u_show,u_style,u_addClass,u_removeClass,u_toggleClass} from './lib/ui.js';
import {u_matches} from './lib/matches.js';
import { u_getAttr, u_setAttr } from './lib/attribute.js';
import { u_stringToBoolean,u_stringToNumber } from './lib/convert.js';
import { u_browser,u_get_browser,u_is_touch, u_get_system} from './lib/system.js';
import { u_take_your_time } from './lib/promise.js';

/**
 * Basic UI
 */
u_hide('.js--u_hide');
u_show('.js--u_show');
u_style('.js--u_style', [{color: '#00ff00'}]);
u_style('.js--u_style-card', [{ pointerEvents: 'none' }, { backgroundColor: 'red' }])
u_addClass('.js--u_addClass', 'added-class');
u_removeClass('.js--u_removeClass', 'remove-class');
u_toggleClass('.js--u_toggleClass', 'f--color-d');




// matches
var matchesClass = document.querySelector('.js--u_matches-class')
matchesClass.innerHTML = u_matches('.js--u_matches-class', 'test');

var matchesAttribute = document.querySelector('.js--u_matches-atrribute')
matchesAttribute.innerHTML = u_matches('.js--u_matches-attribute', 'developer', 'custom-attribute-match');


// attribute get & set
var getAttribute = document.querySelector('.js--u_get');
document.querySelector('.getdisplay').innerHTML = u_getAttr(getAttribute, 'data-name');

var setdisplay = document.querySelector('.setdisplay').innerHTML;
u_setAttr('.js--u_set', 'data-set', setdisplay); 


// Maths and conversion
var stringToNumberValue = u_stringToNumber(document.querySelector('.stringtoNumber').innerHTML); 
console.log(stringToNumberValue);

var stringToBooleanValue = u_stringToBoolean(document.querySelector('.stringtoBoolean').innerHTML); 
console.log(stringToBooleanValue);




// Device
var isChrome = u_browser('chrome');
document.querySelector('.js--u_browser').innerHTML = isChrome;

var getBrowser = u_get_browser();
document.querySelector('.js--u_get_browser').innerHTML = getBrowser;

var isTouch = u_is_touch();
document.querySelector('.js--u_is_touch').innerHTML = isTouch;

const systems = u_get_system();
console.log(systems);




(async () => {
    const result = await u_take_your_time(1200);
    console.log('done');
})()


