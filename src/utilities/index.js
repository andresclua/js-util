// BROWSER DETECTION

/**
 * Determines if the current web browser matches the specified browser type.
 *
 * @param {string} browser - The browser type to check (e.g., 'chrome', 'safari', 'firefox', 'ie', 'edge').
 * @returns {boolean|null} Returns `true` if the current browser matches the specified type,
 *                        `false` if it does not match, or `null` if the provided browser type is unsupported.
 */
function isBrowser(browser) {
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

/**
 * Determine if the current device matches the specified system type.
 *
 * @param {string} system - The system type to check (e.g., 'touch', 'android', 'ios').
 * @returns {boolean} Returns `true` if the current device matches the specified system type;
 *                    otherwise, returns `false`.
 */
function isDevice(system) {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;
    switch (system) {
        case 'touch':
            return (('ontouchstart' in window) || (navigator.maxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0));
        case 'android':
            return /android/i.test(userAgent);
        case 'ios':
            return typeof navigator.standalone === 'boolean';
        default:
            return true;
    }
  }

  export {isBrowser,isDevice};