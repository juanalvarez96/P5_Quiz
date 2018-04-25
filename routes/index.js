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
            const questions = [];
            const answers=[];
            quizzes.forEach(quiz =>{
                questions.push(quiz.question);
                answers.push(quiz.answer);
            });
            res.render('quizzes',{questions:questions, answers:answers});
        })
        .catch(error =>{
            console.log(error);
        })



});

module.exports = router;
