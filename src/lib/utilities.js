function getElements(selectorOrElement) {
    if (typeof selectorOrElement === "object") {
        // Si es un objeto DOM, lo devuelve en un arreglo
        return [selectorOrElement];
    } else {
        // Si es un selector, devuelve los elementos encontrados
        return document.querySelectorAll(selectorOrElement);
    }
}
export {getElements}