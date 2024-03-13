function u_browser(browser) {
    switch (browser) {
        // CHROME 1+
        case 'chrome':
            return navigator.userAgent.indexOf("Chrome") != -1 && !navigator.userAgent.match(/edg/i) || navigator.userAgent.indexOf('CriOS') >= 0;
        // SAFARI 3.0+
        case 'safari':
            return /^((?!chrome|android).)*safari/i.test(navigator.userAgent) && !(navigator.userAgent.indexOf('CriOS') >= 0);
        // FIREFOX 1.0+
        case 'firefox':
            return typeof InstallTrigger !== 'undefined';
        // INTERNET EXPLORER 6-11
        case 'ie':
            return /*@cc_on!@*/false || !!document.documentMode;
        // EDGE 20+
        case 'edge':
            return (navigator.userAgent.match(/edg/i) || navigator.userAgent.indexOf("Edge/") != -1) ? true : false;
        default:
            return null;
    }
}

function u_system(system) {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;
    switch (system) {
        case 'touch':
            return (('ontouchstart' in window) || (navigator.maxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0));
        case 'android':
            return /android/i.test(userAgent);
        case 'ios':
            return typeof navigator.standalone === 'boolean';
        case 'windows':
            return /windows/i.test(userAgent); // This line checks if the userAgent contains 'Windows'
        case 'mac': // Added case for 'mac'
            return /mac/i.test(userAgent); // This line checks if the userAgent contains 'Mac'
        default:
            return false; // Changed to false to make the default case more logical
    }
  }
export {u_browser,u_system}

