var lieferantenBestellung = require ("../models/lieferantenBestellung.js");
var schemaFunctions = require("../helpers/setterFunctions");
var getterFunctions = require("../helpers/getterFunctions");
var updateFunctions = require("../helpers/updateFunctions");

module.exports = {

    createOrder: createOrder,
    getOrder: getOrder,
    updateOrder: updateOrder,
    getAll : getAll
}

    function createOrder(req, res) {
        //normalerweise Werte aus req laden (Body-Parser)
        schemaFunctions.createLieferantenBestellung(1,2000,1,"schwarz",1,1);
        schemaFunctions.createBeschaffungsBestandswert(1,1,1,1,1,1,1,1);
        schemaFunctions.createBeschaffungsBestelluebersicht(1,1,1,"weiss",23,22,10,10);
        schemaFunctions.createBeschaffungsKPI(1,1);
        schemaFunctions.createBeschaffungsUebersicht(1,1,1,1,1);
        schemaFunctions.createLagerbestandEingangspruefung(1,1,1,"schwarz",20);
        schemaFunctions.createLagerbestandVorEingangspruefung(1,1,1,"schwarz",1);
        schemaFunctions.createVorfertigungFertigungsplan(1,1,1,"weiss",1);
        schemaFunctions.createVorfertigungLagerbestand(1,1,1,"schwarz",1);
        schemaFunctions.createVorfertigungLagersumme(1,1,1,1,1,1);
        schemaFunctions.createVorfertigungLosesumme(1,1,"schwarz", 50);
        schemaFunctions.createVorfertigungsKPI(1, 1, 20, 40, 60);
        schemaFunctions.createEndmontageFertigungsplan(1,1,1,"weiß",20);
        schemaFunctions.createEndmontageKPI(1,1);
        schemaFunctions.createEndmontageLagerbestand(1,1,1,"weiß",20);
        schemaFunctions.createEndmontageLagersumme(1,1,"weiß",2,2,2,2,2,2);
        schemaFunctions.createEndmontageLagerzugang(1,1,1,"weiß",30);
        schemaFunctions.createEndmontageLosesumme(1,1,"weis",30);
        schemaFunctions.createLieferabwicklungBestelluebersicht(1,1,1,102,5,3,3);
        schemaFunctions.createLieferabwicklungKPI(1,1,30,20,30);
        schemaFunctions.createLieferabwicklungLagerbestand(1,1,2,"weiss",18);
        schemaFunctions.createLieferabwicklungLagerzugang(1,1,2,"weiss",18);
        schemaFunctions.createLieferabwicklungSummen(1, 1, 5, 4, 4, 3, 3);
        schemaFunctions.createOrderManagement(1,1,1,"schwarz",18, 5, 4, 3, 2, 20);
        schemaFunctions.createVorfertigungLagersumme(1, 1, 4,3,4,3);
        schemaFunctions.createVorfertigungLagerzugang(1, 1, 1,"schwarz",4);

    }

    function  getAll(req, res){
    getterFunctions.getalllieferabwicklungLagerzugang(function(data){
        console.log(data);
    });
    }


    function getOrder(req, res) {
        //normalerweise ID aus req

        getterFunctions.getbeschaffungBestandswert(1, 1, function(data){
            console.log(data.inSummeschwarz);
        });

        getterFunctions.getbeschaffungBestelluebersicht(1, 1, 1, "weiss", function(data){
            console.log(data.bestellnr);
        });

        getterFunctions.getbeschaffungKPI(1, 1, function(data){
            console.log(data.lagerwert);
        });

        getterFunctions.getbeschaffungsUebersicht(1, 1, function(data){
            console.log(data.summebestSchwarz);
        });

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

        getterFunctions.getlieferabwicklungLagerbestand(1, 1, 2, "weiss", function(data){
            console.log(data.anzahl);
        });

        getterFunctions.getlieferabwicklungLagerzugang(1, 1, 2, "weiss", function(data){
            console.log(data.zugang);
        });

        getterFunctions.getlieferabwicklungSummen(1, 1, function(data){
            console.log(data.bestellungen);
        });

        getterFunctions.getorderManagement(1, 1, 1, "schwarz", function(data){
            console.log(data);
        });

        getterFunctions.getvorfertigungFertigungsplan(1, 1, 1, "weiss", function(data){
            console.log(data.sollmenge);
        });

        getterFunctions.getvorfertigungKPI(1, 1, function(data){
            console.log(data.ruestkosten);
        });

        getterFunctions.getvorfertigungLagerbestand(1, 1, 1, "schwarz", function(data){
            console.log(data.anzahl);
        });

        getterFunctions.getvorfertigungLagersumme(1, 1, function(data){
            console.log(data.bestandschwarz);
        });

        getterFunctions.getvorfertigungLagerzugang(1, 1, 1, "schwarz", function(data){
            console.log(data.anzahl);
        });

        getterFunctions.getvorfertigungLosesumme(1, 1, "schwarz", function(data){
            console.log(data.summe);
        });



        /*lieferantenBestellung.findOne({'nr': '200'}, function (err, data) {
            if(err) return handleError(err)
            res.send("Bestellung von "  + data.von + ", ausgestellt in Takt " + data.austellungstakt+
            ", Artikel: " + data.artikel);
        });*/

    }

    function updateOrder(req, res) {
        getterFunctions.getlieferantenBestellung(1,2000,function (data) {
            updateFunctions.updateLieferantenBestellung(data._id,"bestaetigterTakt", 1);
        })
    }
