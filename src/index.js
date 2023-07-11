import JSUTIL from './js_helper';

class Page{
    constructor(){
        this.init()
    }
    init(){ 
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
            get Browser
        */
        var browsers = ['chrome','safari','firefox','ie','edge']
        browsers.forEach(element => {
            var li = document.createElement("li");
            li.appendChild(document.createTextNode(`is this browser ${element}? ${jsutil.getBrowser(element)} `))
            document.getElementById('browserList').appendChild(li);
        });

        var devices = ['touch','android','ios']
        devices.forEach(element => {
            var li = document.createElement("li");
            li.appendChild(document.createTextNode(`is this ${element}? ${jsutil.getTypeDevice(element)} `))
            document.getElementById('detectdevice').appendChild(li);
        });

       
      
        if (jsutil.matches(document.querySelector('.test'), ['asd','toto'])) {
          console.log("element has class highlight");
        } else{
            console.log('it doesnt')
        }

      
        if (jsutil.matches(document.getElementById("customElement"), ["custom-value", "other-value"], 'data-custom-attribute')) {
            console.log("Element matches the specified custom attribute values");
          } else {
            console.log("Element does not match the specified custom attribute values");
        }

        document.getElementById('triggerfilter').addEventListener('input', (event)=> {
            jsutil.filterHTML(document.getElementById('list'),'li',event.target.value);
        });

    }
}
export default Page;

new Page()
