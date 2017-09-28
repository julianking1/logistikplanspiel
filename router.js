/* Router: Dieses File stellt URLs zur Verfügung.
*  Für die generierung des Inhaltes sind die controler verantwortlich.
*  Momentan sind noch keine Controler mit URLs verknüpft.
* */
var express = require('express');
var router = express.Router();
var profilechoice = require('./controllers/profilechoice.js');
var profile = require('./controllers/profile.js');
var dbtest = require('./controllers/dbtest.js');
var lagerbestandRechner = require('./controllers/lagerbestandRechner.js');
var formularSpeichern = require('./controllers/formularSpeichern');
var getterFunctions = require('./helpers/getterFunctions');

//Einstieg
router.get('/', profilechoice.rendering);                       // localhost:3000/

//Profile
router.get('/kunde', profile.renderingDefault);                 // localhost:3000/kunde
router.get('/lieferant', profile.renderingDefault);             // localhost:3000/lieferant
router.get('/beschaffung', profile.renderingDefault);           // /localhost:3000/beschaffung
router.get('/vorfertigung', profile.renderingDefault);            // /localhost:3000/teilelager
router.get('/endmontage', profile.renderingDefault);            // /localhost:3000/endmontage
router.get('/lieferabwicklung', profile.renderingDefault);      // /localhost:3000/lieferabwicklung
router.get('/distributioncenter', profile.renderingDefault);    // /localhost:3000/distributioncenter
router.get('/ordermanagement', profile.renderingDefault);       // /localhost:3000/ordermanagement

//Inhalt laden (nach profil und type)
router.post(/.*loadContent$/, function(req, res) {
    profile.rendering(req, res);
});
//Inhalt laden (nach profil und type)
router.post(/.*save$/, function(req, res) {
    //in db schreiben
    console.log(req.body.data);
    profile.rendering(req, res);
});

//Startseite
router.get('/startseite', function(req, res, next) {
    res.render('startseite');
});


//Spielleiter
router.get('/spielleiter', function(req, res, next) {
    res.render('gameadmin', {text: ""});
});

router.post(/.*loadGame$/, function(req, res, next){
    //hier dann ID speichern
    res.send(req.body.name);
});

router.post(/.*saveGame$/, function(req, res, next){
    //hier dann speichern einfügen

    res.render('gameadmin', {text: req.body.name + " erfolgreich gespeichert"});
});

//Test Urls
router.get('/dbtestCreate', dbtest.createOrder); // /localhost:3000/dbtestCreate
router.get('/dbtestGet', dbtest.getOrder); // /localhost:3000/dbtestGet
router.get('/dbtestUpdate', dbtest.updateOrder); // /localhost:3000/dbtestGet
router.get('/createlagerBestand',lagerbestandRechner.createLagerbestandEingangspruefung); // /localhost:3000/createlagerBestand
router.get('/sumBestand', lagerbestandRechner.sumbestandschwarz); // /localhost:3000/sumBestand
router.get('/dbtestgetAll', dbtest.getAllOrders); // /localhost:3000/sumBestand


//Formular Tests
router.post(/.*mailbox$/, function(req, res) {
        formularSpeichern.saveInDB(req, res);
});

//POST Test
router.post(/.*post$/, function(req, res) {

    //setterFunctions.createLieferantenBestellung(124,3,1,'schwarz',3,12);
    getterFunctions.getlieferantenBestellung(1, 1, function (data) {

        var versuch = [

            {takt: '1', white: 'w1', black: 'b1', red: 'r1'},
            {takt: '2', white: 'w2', black: 'b2', red: 'r2'},
            {takt: '3', white: 'w3', black: 'b3', red: 'r3'},
            {takt: '4', white: 'w4', black: 'b4', red: 'r4'},
            {takt: '5', white: 'w5', black: 'b5', red: 'r5'},
            {takt: '6', white: 'w6', black: 'b6', red: 'r6'}

        ];

        res.render('janatest', {pParam: req.body.profilParam, tParam: req.body.toolParam, dbParam: data.artikel, testDaten: versuch});
    });

});

module.exports = router;