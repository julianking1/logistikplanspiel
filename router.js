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
router.get('/kunde', profile.renderingDefault); // localhost:3000/kunde
router.get('/lieferant', profile.renderingDefault); // localhost:3000/lieferant
router.get('/beschaffung', profile.renderingDefault); // /localhost:3000/beschaffung
router.get('/teilelager', profile.renderingDefault); // /localhost:3000/teilelager
router.get('/endmontage', profile.renderingDefault); // /localhost:3000/endmontage
router.get('/lieferabwicklung', profile.renderingDefault); // /localhost:3000/lieferabwicklung
router.get('/distributioncenter', profile.renderingDefault); // /localhost:3000/distributioncenter
router.get('/ordermanagement', profile.renderingDefault); // /localhost:3000/ordermanagement

//Toolbox in Profil-Ansicht
router.get(/.*mailbox$/, profile.rendering); // /localhost:3000/*profil*/mailbox
router.get(/.*tabellen$/, profile.rendering); // /localhost:3000/*profil*/tabellen
router.get(/.*info$/, profile.rendering); // /localhost:3000/*profil*/info
router.get(/.*checklist$/, profile.rendering); // /localhost:3000/*profil*/checklist




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