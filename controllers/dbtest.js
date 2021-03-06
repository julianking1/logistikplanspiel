var lieferantenBestellung = require ("../models/lieferantenBestellung.js");
var schemaFunctions = require("../helpers/setterFunctions");
var getterFunctions = require("../helpers/getterFunctions");
var updateFunctions = require("../helpers/updateFunctions");
var app = require("../app");
var dbDefaultValues = require("../helpers/dbDefaultValues");
var getallFunctions = require("../controllers/getallFunctions");
spielID = app.spielID;

module.exports = {

    createOrder: createOrder,
    getOrder: getOrder,
    updateOrder: updateOrder,
    getAllOrders : getAllOrders
}

    function createOrder(req, res) {
        //normalerweise Werte aus req laden (Body-Parser)
        /*schemaFunctions.createLieferantenBestellung(1,2000,1,"schwarz",1,1);
        schemaFunctions.createBeschaffungsBestandswert(1,1,1,1,1,1,1,1);
        schemaFunctions.createBeschaffungsBestelluebersicht(1,1,1,"weiss",23,22,10,10);
        schemaFunctions.createBeschaffungsKPI(1,1);
        schemaFunctions.createBeschaffungsUebersicht(1,1,1,1,1);
        schemaFunctions.createDistributionAuftragsbearbeitung(1,1,1,5);
        schemaFunctions.createDistributionKPI(1,1);
        schemaFunctions.createDistributionLagerbestand(1,1,1,"schwarz",20);
        schemaFunctions.createDistributionLagerzugang(1,1,1,"weiss",18);
        schemaFunctions.createDistributionSummen(1,1,5,4,3,2,10);
        schemaFunctions.createLagerbestandEingangspruefung(1,1,1,"schwarz",20);
        schemaFunctions.createLagerbestandVorEingangspruefung(1,1,1,"schwarz",1);
        schemaFunctions.createVorfertigungFertigungsplan(1,1,1,"weiss",1);
        schemaFunctions.createVorfertigungLagerbestand(1,1,1,"schwarz",1);
        schemaFunctions.createVorfertigungLagersumme(1,1,1,1,1,1);
        schemaFunctions.createVorfertigungLosesumme(1,1,"schwarz", 50);
        schemaFunctions.createVorfertigungsKPI(1, 1, 20, 40, 60);
        schemaFunctions.createEndmontageFertigungsplan(1,1,1,"weiss",20);
        schemaFunctions.createEndmontageKPI(1,1);
        schemaFunctions.createEndmontageLagerbestand(1,1,1,"schwarz",20);
        schemaFunctions.createEndmontageLagersumme(1,1,2,2,2,2,2,2);
        schemaFunctions.createEndmontageLagerzugang(1,1,1,"schwarz",30);
        schemaFunctions.createEndmontageLosesumme(1,1,"weiss",30);
        schemaFunctions.createKundeAuftragsuebersicht(1,1,1,"schwarz",20,3);
        schemaFunctions.createKundeKPI(1,1,50,30,20,80,80);
        schemaFunctions.createKundeUmsatz(1,1,1,"schwarz");
        schemaFunctions.createLieferabwicklungBestelluebersicht(1,1,102,5,3,3);
        schemaFunctions.createLieferabwicklungKPI(1,1,30,20,30);
        schemaFunctions.createLieferabwicklungLagerbestand(1,1,2,"weiss",18);
        schemaFunctions.createLieferabwicklungLagerzugang(1,1,2,"weiss",18);
        schemaFunctions.createLieferabwicklungSummen(1, 1, 5, 4, 4, 3, 3);
        schemaFunctions.createOrderManagement(1,1,1,"schwarz", 5, 4, 3, 2);
        schemaFunctions.createVorfertigungLagersumme(1, 1, 4,3,4,3);
        schemaFunctions.createVorfertigungLagerzugang(1, 1, 1,"schwarz",4);*/

        dbDefaultValues.generateDefaultValuesInDB();
        
        schemaFunctions.createLagerbestandEingangspruefung(spielID,1,1,10,4,3,function () {});
        schemaFunctions.createLagerbestandEingangspruefung(spielID,1,2,10,4,3,function () {});

        schemaFunctions.createLagerbestandVorEingangspruefung(spielID,1,1,10,4,3,function () {});
        schemaFunctions.createLagerbestandVorEingangspruefung(spielID,1,2,10,4,3,function () {});

        schemaFunctions.createDistributionLagerbestand(spielID,1,1,40,12,function () {});
        schemaFunctions.createDistributionLagerbestand(spielID,1,2,40,12,function () {});
        
        schemaFunctions.createLieferabwicklungLagerbestand(spielID,1,1,2,3,function () {})
        schemaFunctions.createLieferabwicklungLagerzugang(spielID,1,1,2,5,function () {});
        schemaFunctions.createVorfertigungLagerbestand(spielID,1,1,10,20,function () {})
        schemaFunctions.createVorfertigungLagerbestand(spielID,1,2,10,20,function () {})

        schemaFunctions.createVorfertigungLagerzugang(spielID,1,1,10,20,function () {})
        schemaFunctions.createVorfertigungLagerzugang(spielID,1,2,50,20,function () {})
        schemaFunctions.createVorfertigungLagerzugang(spielID,1,3,70,20,function () {})

        schemaFunctions.createEndmontageLagerbestand(spielID,1,1,10,20,30,function () {})
        schemaFunctions.createEndmontageLagerbestand(spielID,1,2,10,20,30,function () {})
        schemaFunctions.createEndmontageLagerbestand(spielID,1,3,10,20,30,function () {})


        schemaFunctions.createEndmontageLagerzugang(spielID,1,1,10,20,30,function () {})
        schemaFunctions.createEndmontageLagerzugang(spielID,1,2,10,20,30,function () {})
        schemaFunctions.createEndmontageLagerzugang(spielID,1,3,10,20,30,function () {})

        schemaFunctions.createKundeBestellung(spielID,1,3,"schwarz",20,30,function () {})
        schemaFunctions.createKundeBestellung(spielID,2,2,"schwarz",20,30,function () {})
        schemaFunctions.createKundeBestellung(spielID,3,5,"schwarz",20,30,function () {})

        schemaFunctions.createDistributionAuftragsbearbeitung(spielID,1,1,5,function () {})
        schemaFunctions.createDistributionAuftragsbearbeitung(spielID,1,2,10,function () {})

        schemaFunctions.createDistributionLagerzugang(spielID,1,1,12,13,function () {})
        schemaFunctions.createDistributionLagerzugang(spielID,1,2,12,13,function () {})

        schemaFunctions.createKundeUmsatz(spielID,1,1,function (data) {
            updateFunctions.updateKundeUmsatz(data._id,"schwarz",20);
            updateFunctions.updateKundeUmsatz(data._id,"weiss",30)
        })
        schemaFunctions.createKundeUmsatz(spielID,1,2,function (data) {
            updateFunctions.updateKundeUmsatz(data._id,"schwarz",40);
            updateFunctions.updateKundeUmsatz(data._id,"weiss",6)
        })


        schemaFunctions.createSpielstand(5,"WI 2015", function () {});
        schemaFunctions.createSpielstand(2,"Test2", function () {});
        schemaFunctions.createSpielstand(3,"Test3", function () {});
        schemaFunctions.createSpielstand(4,"Test4", function () {});
        res.send("created");

    }

    function  getAllOrders(req, res){

        getallFunctions.getAll("beschaffung",'2',function(data){
            console.log(data[1]);
            res.send(data);
        })
        ;
    }

    /*
    var test = [];
    kundeAuftragsuebersicht.find({'artikel': 'schwarz'}, function (err, data) {
        if (err) return handleError(err);
        test.push(data);

        kundeAuftragsuebersicht.find({'artikel': 'weiß'}, function (err, data) {
            if (err) return handleError(err);
            test.push(data);

            kundeAuftragsuebersicht.find({'artikel': 'rot'}, function (err, data) {
                if (err) return handleError(err);
                test.push(data);
                return callback(test);
            })

            return callback(test);
        }
        );
     return callback(test);
    });

*/


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

        getterFunctions.getdistributionAuftragsbearbeitung(1, 1, 1, function(data){
            console.log(data.anzauftraege);
        });

        getterFunctions.getdistributionKPI(1, 1, function(data){
            console.log(data.transportkosten);
        });

        getterFunctions.getdistributionLagerbestand(1, 1, 1, "schwarz" ,function(data){
            console.log(data.anzahl);
        });

        getterFunctions.getdistributionLagerzugang(1, 1, 1, "weiss" ,function(data){
            console.log(data.zugang);
        });

        getterFunctions.getdistributionSummen(1, 1, function(data){
            console.log(data.anzauftraege);
        });

        getterFunctions.getendmontageFertigungsplan(1, 1, 1, "weiss", function(data){
            console.log(data.sollmenge);
        });

        getterFunctions.getendmontageKPI(1, 1, function(data){
            console.log(data.lagerwert);
        });

        getterFunctions.getendmontageLagerbestand(1, 1, 1, "schwarz", function(data){
            console.log(data.anzahl);
        });

        getterFunctions.getendmontageLagersumme(1, 1, function(data){
            console.log(data.bestandweiss);
        });

        getterFunctions.getendmontageLagerzugang(1, 1, 1, "schwarz", function(data){
            console.log(data.zugang);
        });

        getterFunctions.getendmontageLosesumme(1, 1, "weiss", function(data){
            console.log(data.summe);
        });

        getterFunctions.getkundeAuftragsuebersicht(1, 1, 1, function(data){
            console.log(data.menge);
        });

        getterFunctions.getkundeKPI(1, 1, function(data){
            console.log(data.lieferverzugskosten);
        });

        getterFunctions.getkundeAuftragsuebersicht(1, 1, 1, function(data){
            console.log(data.anzahl);
        });




        var lagerbestandEingangspruefung = getterFunctions.getlagerbestandEingangspruefung(1, 1, 1, function(data){
          console.log(data.artikel);
        });
        var lagerbestandvorEingangspruefung = getterFunctions.getlagerbestandvorEingangspruefung(1, 1, 1, function(data){
            console.log(data.artikel);
        });
        var lieferabwicklungBestelluebersicht = getterFunctions.getlieferabwicklungBestelluebersicht(1, 1, 102, function(data){
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

        getterFunctions.getvorfertigungLagerbestand(1, 1, 1, function(data){
            console.log(data.anzahl);
        });

        getterFunctions.getvorfertigungLagersumme(1, 1, function(data){
            console.log(data.bestandschwarz);
        });

        getterFunctions.getvorfertigungLagerzugang(1, 1, 1, function(data){
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
