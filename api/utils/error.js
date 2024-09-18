export const ErrorHandler = (statusCode,message) =>{
const error = new Error()
error.statusCode = statuscode
error.message = message
return error
}