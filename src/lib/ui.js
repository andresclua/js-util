import { getElements } from "./utilities";

function u_hide(selectorOrElement) {
    const elements = getElements(selectorOrElement);
    // Oculta todos los elementos encontrados
    for (let i = 0; i < elements.length; i++) {
        elements[i].style.display = "none";
    }
}

function u_show(selectorOrElement) {
    const elements = getElements(selectorOrElement);
    // Oculta todos los elementos encontrados
    for (let i = 0; i < elements.length; i++) {
        elements[i].style.display = "block";
    }
}

function u_style(selector, styles = null){
  
    const elements = getElements(selector);
    elements.forEach((element) => {
        styles.forEach((style) => {
            for (const property in style) {
                const value = style[property];
                element.style[property] = typeof value === 'number' ? `${value}px` : value;
            }
        });
    });
}

function u_addClass(selectorOrElement, classNames) {
    const elements = getElements(selectorOrElement);
    const classesToAdd = classNames.split(' ');

    // Adds each class from the split classNames to all found elements
    for (let i = 0; i < elements.length; i++) {
        classesToAdd.forEach(className => {
            if (elements[i].classList)
                elements[i].classList.add(className);
            else
                elements[i].className += ' ' + className; // Fallback for older browsers
        });
    }
}

function u_removeClass(selectorOrElement, classNames) {
    const elements = getElements(selectorOrElement);
    const classesToAdd = classNames.split(' ');

    // Adds each class from the split classNames to all found elements
    for (let i = 0; i < elements.length; i++) {
        classesToAdd.forEach(className => {
            if (elements[i].classList)
                elements[i].classList.remove(className);
            else
                elements[i].className += ' ' + className; // Fallback for older browsers
        });
    }
}

function u_toggleClass(selectorOrElement, classNames) {
    const elements = getElements(selectorOrElement);
    // Split classNames by spaces to support toggling multiple classes separated by spaces
    const classesToToggle = classNames.split(' ');

    // Toggles each class from the split classNames for all found elements
    for (let i = 0; i < elements.length; i++) {
        classesToToggle.forEach(className => {
            elements[i].classList.toggle(className);
        });
    }
}



export {u_hide,u_show,u_style,u_addClass,u_removeClass,u_toggleClass}