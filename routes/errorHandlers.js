/*
* 404 and Global Error Handlers
*/

// Error handler for handling non-existent routes
const pageNotFound = (req, res, next) => {
  console.log('Handling 404 error...'); 
  const err = new Error('err'); 
  err.status = 404; 
  err.message = 'Yikes! Looks like the page does not exist. Please try another URL'; 
  next(err)
}; 

// Global error handler
const handleAllErrors = (err, req, res, next) => {
  console.log('Handling A Global Error...'); 
  console.log(err); 

  console.log('Handling a global error');
  console.log(err);
  // Set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.send(err.message);
};

module.exports = {pageNotFound, handleAllErrors}; 