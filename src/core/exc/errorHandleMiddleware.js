/*
Error Handling Middleware: 
Build a Node.js middleware function for Express.js that catches 
unhandled errors in your application and logs them with details (e.g., error message, stack trace) 
before sending a user-friendly error response.
*/

function errorHandler(err, req, res, next) {
  // Your code here to handle errors and send response
  const originalSend=res.send;
  res.send=(data)=>{
    console.log("Out at:",new Date().toLocaleTimeString());
    try {
      originalSend.call(res,data);
    } catch (error) {
      //error here
      originalSend.call(res,data);
      
    }
  }
  next();

}

app.use(errorHandler); // Apply middleware globally
