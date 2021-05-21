import JSUTIL from './js_helper';

class Page{
    constructor(){
        this.init()
    }
    init(){
        var jsutil = new JSUTIL()
        jsutil.addClass(document.getElementById('utilities'),'toto')
    }
}
export default Page;

new Page()