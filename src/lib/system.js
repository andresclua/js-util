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

function u_get_browser() {
    const userAgent = navigator.userAgent;

    if (userAgent.indexOf("Chrome") !== -1 && !userAgent.match(/edg/i) && userAgent.indexOf('CriOS') < 0) {
        return 'chrome';
    } else if (/^((?!chrome|android).)*safari/i.test(userAgent) && userAgent.indexOf('CriOS') < 0) {
        return 'safari';
    } else if (typeof InstallTrigger !== 'undefined') {
        return 'firefox';
    } else if (!!document.documentMode) {
        return 'ie';
    } else if (userAgent.match(/edg/i) || userAgent.indexOf("Edge/") !== -1) {
        return 'edge';
    } else {
        return null;
    }
}

function u_is_touch() {
    return ('ontouchstart' in window) || (navigator.maxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0);
}

function u_get_system() {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    const systems = [];

    if (/android/i.test(userAgent)) {
        systems.push('android');
    }
    if (/windows/i.test(userAgent)) {
        systems.push('windows');
    }

    if (/mac/i.test(userAgent)) {
        // Primero se verifica si es un dispositivo Apple
        systems.push('apple'); 
        
        // Verificamos si es un iPhone, iPad, o un Mac
        if (/iphone|ipod/i.test(userAgent)) {
            systems.push('iphone'); // Es un iPhone o iPod
        } else if (/ipad/i.test(userAgent)) {
            systems.push('ipad'); // Es un iPad
        } else {
            systems.push('mac'); // Es un Mac (MacOS)
        }
    }

    return systems.length > 0 ? systems : ['unknown']; // Devuelve 'unknown' si no se detecta ningún sistema
}


export {u_browser,u_get_browser, u_is_touch,u_get_system}

