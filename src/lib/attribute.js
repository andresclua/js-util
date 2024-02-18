import { getElements } from "./utilities";
function u_getAttr(selectorOrElement, attrName) {
    const element = getElements(selectorOrElement)[0]; // Retrieve the first matching element
    if (!element) return null; // Return null if no element is found
    return element.getAttribute(attrName); // Get the value of the specified attribute
}

function u_setAttr(selectorOrElement, attrName, attrValue) {
    const elements = getElements(selectorOrElement); // Retrieve all matching elements
    elements.forEach(element => {
        element.setAttribute(attrName, attrValue); // Set the specified attribute to the given value
    });
}

export {u_getAttr, u_setAttr}