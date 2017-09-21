/* Router: Dieses File stellt URLs zur Verfügung.
*  Für die generierung des Inhaltes sind die controler verantwortlich.
*  Momentan sind noch keine Controler mit URLs verknüpft.
*
* */

var express = require('express');
var router = express.Router();
var profilechoice = require('./controllers/profilechoice.js');
var profile = require('./controllers/profile.js');

// / (homepage)
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

// /users
router.get('/users', function(req, res, next) {
    res.send('respond with a resource');
});

//Profilansichten
router.get('/profilechoice', profilechoice.rendering); // localhost:3000/profilechoice
router.get('/kunde', profile.rendering); // localhost:3000/kunde
router.get('/lieferant', profile.rendering); // localhost:3000/lieferant
router.get('/beschaffung', profile.rendering); // /localhost:3000/beschaffung
router.get('/teilelager', profile.rendering); // /localhost:3000/teilelager
router.get('/endmontage', profile.rendering); // /localhost:3000/endmontage
router.get('/lieferabwicklung', profile.rendering); // /localhost:3000/lieferabwicklung
router.get('/distributioncenter', profile.rendering); // /localhost:3000/distributioncenter
router.get('/ordermanagement', profile.rendering); // /localhost:3000/ordermanagement



// Test URLS
// /localhost:3000/dbtests
router.get('/dbtests', function(req, res, next) {
    res.send('dbtests');
});

// /localhost:3000/janatests
router.get('/janatests', function(req, res, next) {
    res.render('janatests');
});

module.exports = router;