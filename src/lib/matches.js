import { getElements } from "./utilities";

function u_matches(selectorOrElement, identifier, attribute = 'class') {
    const elements = getElements(selectorOrElement);
    let isMatch = false;

    // Split identifier into an array if it's a string with spaces for class attribute
    if (typeof identifier === 'string' && attribute === 'class' && identifier.includes(' ')) {
        identifier = identifier.split(' ');
    }

    elements.forEach(element => {
        if (!isMatch) { // Only check if no match has been found yet
            if (Array.isArray(identifier)) {
                if (attribute === 'class') {
                    const classListArray = Array.from(element.classList);
                    isMatch = identifier.every(className => classListArray.includes(className));
                } else {
                    const attributeValue = element.getAttribute(attribute);
                    isMatch = identifier.some(value => value === attributeValue);
                }
            } else {
                if (attribute === 'class') {
                    isMatch = element.classList.contains(identifier);
                } else {
                    const attributeValue = element.getAttribute(attribute);
                    isMatch = attributeValue === identifier;
                }
            }
        }
    });

    return isMatch;
}
export {u_matches}