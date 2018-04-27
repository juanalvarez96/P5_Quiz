var express = require('express');
const {models} = require('../models/index');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Quiz' });
});

/* GET credits page. */
router.get('/credits.ejs', function (req, res, next) {
    res.render('credits');
});

/* GET quizzes page. */
router.get('/quizzes.ejs', function (req, res, next) {
    models.quiz.findAll()
        .then(quizzes =>{
            var JsonQuizzes=JSON.stringify(quizzes);
            res.render('quizzes',{quizzes:JsonQuizzes});
            })
        .catch(error =>{
            console.log(error);
        })

});

module.exports = router;
