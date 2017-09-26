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
var setterFunctions = require('./helpers/setterFunctions');

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
router.get('/dbtestCreate', dbtest.createOrder); // /localhost:3000/dbtestCreate
router.get('/dbtestGet', dbtest.getOrder); // /localhost:3000/dbtestGet
router.get('/dbtestUpdate', dbtest.updateOrder); // /localhost:3000/dbtestGet
router.get('/createlagerBestand',lagerbestandRechner.createLagerbestandEingangspruefung); // /localhost:3000/createlagerBestand
router.get('/sumBestand', lagerbestandRechner.sumbestandschwarz); // /localhost:3000/sumBestand


//Formular Tests
router.post(/.*mailbox$/, function(req, res) {
        formularSpeichern.saveInDB(req, res);
        //res.send("ok"); //später weg bzw render
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