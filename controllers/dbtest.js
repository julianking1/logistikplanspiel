var lieferantenBestellung = require ("../models/lieferantenBestellung.js");
var schemaFunctions = require("../helpers/setterFunctions");

module.exports = {

    createOrder: createOrder,
    getOrder: getOrder
}

    function createOrder(req, res) {
        //normalerweise Werte aus req laden (Body-Parser)
        schemaFunctions.createLieferantenBestellung(1,"W",200,1,"schwarz");
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
    }


    function getOrder(req, res) {
        //normalerweise ID aus req

        lieferantenBestellung.findOne({'nr': '200'}, function (err, data) {
            if(err) return handleError(err)
            res.send("Bestellung von "  + data.von + ", ausgestellt in Takt " + data.austellungstakt+
            ", Artikel: " + data.artikel);
        });

    }
