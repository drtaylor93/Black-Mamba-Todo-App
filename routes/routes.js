const express = require('express');
var passport = require('passport');
const router = express.Router();
const db = require('../src/config/database');
const Task = require('../models/task');
const Quote = require('../models/quotes');
require('../passport');

// **CRUD API**

//List all tasks
router.get('/home', (req, res) => {
    Task.findAll({
        //Returns model as it appears in the db, cutting out additional sequelize info
        raw:true,
        //Newest tasks will appear at the bottom of the list
        order: [['createdAt', 'ASC']]
    })
    .then(tasks => {
        //Auto Refreshing the new page after every call to show changes
        res.render('landing', {tasks})
    })
    .catch(err => console.log(err))
});

//Add a task
router.post('/task/add', (req, res) => {
    let {description} = req.body;
    Task.create({
        description,
    })
    .then(task => res.redirect('/home'))
    .catch(err => console.log(err));
});

//Delete a task
router.delete('/task/delete/:id', (req, res) => {
    let id = req.params.id;
    Task.destroy({
        where: {id: id}
    })

    .then(task => res.redirect('/home'))
    .catch(err => console.log(err));
});

//Update a task
router.patch('/task/patch/:id', (req, res) => {
    Task.findOne({
        where: { id: req.params.id }
    })
    .then(task => {
        /*Case 1: When user clicks on the task checkbox, move to completed section. HTML button cannot pass
                  a request body so we check for an undefined body to detect the button click. Not idea, but works
                  for the limited scope of this app without burdening the user of knowing the id of each task
        */
       if(req.body.description == undefined) {
        task.update(
            {completed: true}
        )
    //Case 2: User updates task description
    } else {
        task.update(
            {description: req.body.description}
        )
    }  
    })
    .then(task => res.redirect('/home'))
});

// **Routing Endpoints**

//Link to my personal bio
router.get('/home/aboutme', (req, res) =>
    res.render('dre')
);

//Link to a Kobe's page
router.get('/home/kobe', (req, res) =>
    res.render('mamba')
);

//Future: Logout route to be used in future user authentication
router.get('/logout', (req, res) => {
    req.session = null;
    req.logout();
    res.redirect('/home');
});

//Future: show a daily quote on the login page
router.get('/', (req, res) => {
    Quote.findAll({
        raw:true,
    })
    .then(quotes => {
        res.render('login', {quotes})
    })
    .catch(err => console.log(err))
});


router.get('/badlogin', (req, res) => {
    res.send('Login Failed!')
})

// **OAUTH2 Endpoints** 

router.get('/auth/github',
  passport.authenticate('github', { scope: [ 'user:email' ] }));

router.get('/auth/github/callback', 
  passport.authenticate('github', { failureRedirect: '/badlogin' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/home');
  });


module.exports = router;