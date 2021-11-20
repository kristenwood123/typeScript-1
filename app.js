var userInput;
// We don't know what it will be
var userName;
userInput = 5;
userInput = 'hello';
if (typeof userInput === 'string') {
    userName = userInput;
}
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
generateError('An error occured! ', 500);
