"use strict";
let userInput;
// We don't know what it will be
let userName;
userInput = 5;
userInput = 'hello';
if (typeof userInput === 'string') {
    userName = userInput;
}
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
generateError('An error occured! ', 500);

console.log('asdljhas');
