/*
* 404 and Global Error Handlers
*/

// Error handler for handling non-existent routes
const pageNotFound = (req, res, next) => {
  const err = new Error('err'); 
  err.status = 404;  
  err.message = 'Yikes! We do not have a page that matches your search. Sorry, not sure what to say from here...'
  next(err)
}; 

// Global error handler
const handleAllErrors = (err, req, res, next) => {
if (err.status === 404 ){ 
  res.status(404); 
  res.render('page-not-found', { err }); 
  console.log('Handling a 404 error...it might be a while'); 
} else {
  err.status = 500; 
  err.message = 'Uh not sure what happened...Google the error below?'; 
  res.status(err.status); 
  res.render('error', { err });
  console.log('Handling A Global Error...')
}
};

module.exports = {pageNotFound, handleAllErrors}; 