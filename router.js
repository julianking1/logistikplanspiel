/* Router: Dieses File stellt URLs zur Verfügung.
*  Für die generierung des Inhaltes sind die controler verantwortlich.
*  Momentan sind noch keine Controler mit URLs verknüpft.
* */

var express = require('express');
var router = express.Router();
var profilechoice = require('./controllers/profilechoice.js');
var profile = require('./controllers/profile.js');
var dbtest = require('./controllers/dbtest.js');


//Startseite
router.get('/', profilechoice.rendering); // localhost:3000/


//Profilansichten
router.get('/kunde', profile.rendering); // localhost:3000/kunde
router.get('/lieferant', profile.rendering); // localhost:3000/lieferant
router.get('/beschaffung', profile.rendering); // /localhost:3000/beschaffung
router.get('/teilelager', profile.rendering); // /localhost:3000/teilelager
router.get('/endmontage', profile.rendering); // /localhost:3000/endmontage
router.get('/lieferabwicklung', profile.rendering); // /localhost:3000/lieferabwicklung
router.get('/distributioncenter', profile.rendering); // /localhost:3000/distributioncenter
router.get('/ordermanagement', profile.rendering); // /localhost:3000/ordermanagement

//controler fehlt noch für spielleiter
router.get('/spielleiter', function(req, res, next) {
    res.render('gameadmin');
}); // /localhost:3000/spielleiter

//Test Urls
router.get('/dbtestCreate', dbtest.createOrder); // /localhost:3000/dbtests
router.get('/dbtestGet', dbtest.getOrder); // /localhost:3000/dbtests


//Router Tests
router.get('/janatests', function(req, res, next) {
    res.render('janatests');
}); // /localhost:3000/janatests


module.exports = router;