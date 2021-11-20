let userInput: unknown;
// We don't know what it will be
let userName: string;
userInput = 5;
userInput = 'hello'

if(typeof userInput === 'string') {
  userName = userInput
}

function generateError(message: string, code: number) {
  throw { message: message, errorCode: code }
}

generateError('An error occured! ', 500)