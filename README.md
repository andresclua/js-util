The need within several projects in which I have worked has been the kick of this project.
Basic operations that we use daily in web development.

## How does it work?
```sh
npm install @andresclua/jsutil
```

## include the library in file
```sh
import JSUTIL from '@andresclua/jsutil/src/js_helper';
```
and voila, it is ready to use!
# Example

#### Add Class
```sh
var js_ui = new JSUTIL()
js_ui.addClass(document.getElementById('bar'),'foo')
```

#### Remove Class
```sh
var js_ui = new JSUTIL()
js_ui.removeClass(document.getElementById('bar'),'foo')
```

#### Remove Class
```sh
var js_ui = new JSUTIL()
js_ui.toggleClass(document.getElementById('bar'),'foo')
```
