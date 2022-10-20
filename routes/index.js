const express = require('express');
const router = express.Router();

const { projects } = require('../data/data.json');
const errorHandlers = require('../routes/errorHandlers'); 


/* GET home page. */
router.get('/', function(req, res, next) {
  // Passing all project data to 'index' template
  res.render('index', { projects });
});

router.get('/about', function(req,res){
    res.render('about'); 
}); 

//Testing Route to Render Error Page
// router.get('/doggy', function(req, res){
//     throw new Error(''); 
// }); 


/* GET project page. */
router.get('/project/:id', function(req, res, next) {
  const projectId = req.params.id;
  const project = projects.find( ({ id }) => id === +projectId );
  
  if (project) {
    res.render('project', { project });
  } else if (!project) {
     res.status(404); 
  }
});

module.exports = router;