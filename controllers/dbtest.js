var lieferantenBestellung = require ("../models/lieferantenBestellung.js");
var schemaFunctions = require("../helpers/setterFunctions");
var getterFunctions = require("../helpers/getterFunctions");

module.exports = {

    createOrder: createOrder,
    getOrder: getOrder,
    updateOrder: updateOrder
}

    function createOrder(req, res) {
        //normalerweise Werte aus req laden (Body-Parser)
        schemaFunctions.createLieferantenBestellung(1,1,1,"schwarz",1,1);
        schemaFunctions.createBeschaffungsBestandswert(1,1,1,1,1,1,1,1);
        schemaFunctions.createBeschaffungsBestelluebersicht(1,1,1,"weiß",23,22,10,10);
        schemaFunctions.createBeschaffungsKPI(1,1);
        schemaFunctions.createBeschaffungsUebersicht(1,1,1,1,1);
        schemaFunctions.createLagerbestandEingangspruefung(1,1,1,"schwarz",20);
        schemaFunctions.createLagerbestandVorEingangspruefung(1,1,1,"schwarz",1);
        schemaFunctions.createVorfertigungFertigungsplan(1,1,1,"weiß",1);
        schemaFunctions.createVorfertigungLagerbestand(1,1,1,"schwarz",1);
        schemaFunctions.createVorfertigungLagersumme(1,1,1,1,1,1);
        schemaFunctions.createVorfertigungLosesumme(1,1,"schwarz", 50);
        schemaFunctions.createVorfertigungsKPI(1,4);
        schemaFunctions.createEndmontageFertigungsplan(1,1,1,"weiß",20);
        schemaFunctions.createEndmontageKPI(1,1);
        schemaFunctions.createEndmontageLagerbestand(1,1,1,"weiß",20);
        schemaFunctions.createEndmontageLagersumme(1,1,"weiß",2,2,2,2,2,2);
        schemaFunctions.createEndmontageLagerzugang(1,1,1,"weiß",30);
        schemaFunctions.createEndmontageLosesumme(1,1,"weis",30);
        schemaFunctions.createLieferabwicklungBestelluebersicht(1,1,1,102,5,3,3);
    }


    function getOrder(req, res) {
        //normalerweise ID aus req
        var lagerbestandEingangspruefung = getterFunctions.getlagerbestandEingangspruefung(1, 1, 1, "schwarz", function(data){
          console.log(data.artikel);
        });
        var lagerbestandvorEingangspruefung = getterFunctions.getlagerbestandvorEingangspruefung(1, 1, 1, "schwarz", function(data){
            console.log(data.artikel);
        });
        var lieferabwicklungBestelluebersicht = getterFunctions.getlieferabwicklungBestelluebersicht(1, 1, 1, 102, function(data){
            console.log(data.menge);
        });
        var lieferabwicklungKPI = getterFunctions.getlieferabwicklungKPI(1, 1, function(data){
            console.log(data.lagerwert);
        });
        var lieferantenBestellung = getterFunctions.getlieferantenBestellung(1, 200, function(data){
            console.log(data.nr);
        });




        /*lieferantenBestellung.findOne({'nr': '200'}, function (err, data) {
            if(err) return handleError(err)
            res.send("Bestellung von "  + data.von + ", ausgestellt in Takt " + data.austellungstakt+
            ", Artikel: " + data.artikel);
        });*/

    }

    function updateOrder(req, res) {


    }
