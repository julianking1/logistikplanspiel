/* Router: Dieses File stellt URLs zur Verfügung.
*  Für die generierung des Inhaltes sind die controler verantwortlich.
*  Momentan sind noch keine Controler mit URLs verknüpft.
*
* */

var express = require('express');
var router = express.Router();

// / (homepage)
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

// /users
router.get('/users', function(req, res, next) {
    res.send('respond with a resource');
});

// localhost:3000/kunde
router.get('/kunde', function(req, res, next) {
    res.send('kunde');
});

// localhost:3000/lieferant
router.get('/lieferant', function(req, res, next) {
    res.send('lieferant');
});

// /localhost:3000/beschaffung
router.get('/beschaffung', function(req, res, next) {
    res.send('beschaffung');
});

// /localhost:3000/teilelager
router.get('/teilelager', function(req, res, next) {
    res.send('teilelager');
});

// /localhost:3000/endmontage
router.get('/endmontage', function(req, res, next) {
    res.send('endmontage');
});

// /localhost:3000/lieferabwicklung
router.get('/lieferabwicklung', function(req, res, next) {
    res.send('lieferabwicklung');
});

// /localhost:3000/distributioncenter
router.get('/distributioncenter', function(req, res, next) {
    res.send('distributioncenter');
});

// /localhost:3000/ordermanagement
router.get('/ordermanagement', function(req, res, next) {
    res.send('ordermanagement');
});



// Test URLS

// /localhost:3000/dbtests
router.get('/dbtests', function(req, res, next) {
    res.send('dbtests');
});


module.exports = router;