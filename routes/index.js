const express = require('express');
const router = express.Router();

const { projects } = require('../data/data.json');

/* GET home page. */
router.get('/', function(req, res, next) {
  // 1. Pass all recipe data to 'index' template
  res.render('index', { projects });
});

router.get('/about', function(req,res){
    res.render('about'); 
}); 

/* GET project page. */
router.get('/project/:id', function(req, res, next) {
  const projectId = req.params.id;
  const project = projects.find( ({ id }) => id === +projectId );
  
  if (project) {
    // 2. Pass the project data to the 'project' template
    res.render('project', { project });
  } else if (!project) {
    res.statusCode = 404; 
    next(); 
  }
});

module.exports = router;