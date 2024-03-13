import {u_hide,u_show,u_style,u_addClass,u_removeClass,u_toggleClass} from './lib/ui.js';
import {u_matches} from './lib/matches.js';
import { u_getAttr, u_setAttr } from './lib/attribute.js';
import { u_stringToBoolean,u_stringToNumber } from './lib/validate.js';
import { u_browser,u_system } from './lib/system.js';
import { u_take_your_time } from './js_util.js';

// basic ui
u_hide('.js--u_hide');
u_show('.js--u_show');
u_style('.js--u_style', [{color: '#00ff00'}]);
u_style('body', [{ pointerEvents: 'none' }, { backgroundColor: 'red' }])
u_addClass('.js--u_addClass', 'hola mundo');
u_removeClass('.js--u_removeClass', 'hola mundo');
u_toggleClass('.js--u_toggleClass', 'f--color-a');

// matches
console.log(u_matches('.js--u_matches', 'test  '));

// attribute set & get
console.log(u_getAttr('.js--u_get', 'data-name'));
u_setAttr('.js--u_set', 'data-name', 'test')

// 
const numberFromString = u_stringToNumber("123.45");
console.log(numberFromString); // Outputs: 123.45

const booleanFromStringTrue = u_stringToBoolean("true");
console.log(booleanFromStringTrue); // Outputs: true

console.log('is chrome',u_browser('chrome'));

console.log('is IOS',u_system('ios'));
console.log('is mac',u_system('mac'));

(async () => {
    const result = await u_take_your_time(1200);
    console.log('done');
})()


