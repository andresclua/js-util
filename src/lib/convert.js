function u_stringToBoolean(input) {
    const lowerInput = input.toLowerCase(); // Convert input to lowercase

    if (lowerInput === 'true' || lowerInput === '1') {
        return true;
    } else if (lowerInput === 'false' || lowerInput === '0') {
        return false;
    } else {
        throw new Error('Invalid input. Only "true", "false", "1", or "0" are allowed.');
    }
}

function u_stringToNumber(str) {
    const parsedNumber = parseFloat(str);
    if (!isNaN(parsedNumber)) {
        return parsedNumber;
    } else {
        throw new Error('Invalid input. Cannot convert to a number.');
    }
}

export { u_stringToBoolean, u_stringToNumber}