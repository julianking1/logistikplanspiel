var lieferantenBestellung = require ("../models/lieferantenBestellung.js");
var schemaFunctions = require("../helpers/setterFunctions");
var getterFunctions = require("../helpers/getterFunctions");
var updateFunctions = require("../helpers/updateFunctions");
var app = require("../app");

model.exports = {
getAll: getAll
}


function getAll(rolle, tabelle, callback) {
    switch (rolle) {
        case 'kunde':
            switch (tabelle){
                case '0':
                    getterFunctions.getallkundeAuftragsuebersicht(function(data){
                        console.log(data);
                    })
                    break;
                case '1':
                    getterFunctions.getallkundeUmsatz(function(data){
                        console.log(data);
                    })
                    break;
                case '2':
                   // getterFunctions.getallkunde
            }
        break;

        case 'beschaffung':
            switch (tabelle) {
                case '0':
                    getterFunctions.getalllagerbestandvorEingangspruefung(function(data){
                        console.log(data);
                    });
                    break;
                case '1':
                    getterFunctions.getalllagerbestandEingangspruefung(function(data){
                        console.log(data);
                    });
                    break;
                case '2':
                    getterFunctions.getallbeschaffungBestelluebersicht(function(data){
                        console.log(data);
                    });
                    break;
            }
            break;
        case 'distributioncenter':
            switch (tabelle) {
                case '0':
                    getterFunctions.getalldistributionLagerzugang(function(data){
                        console.log(data);
                    });
                    break;
                case '1':
                    getterFunctions.getalldistributionLagerbestand(function(data){
                        console.log(data);
                    });
                    break;
                case '2':
                    getterFunctions.getalldistributionAuftragsbearbeitung(function(data){
                        console.log(data);
                    });
                    break;
            }
            break;
        case 'endmontage':
            switch (tabelle){
                case '0':
                    getterFunctions.getallendmontageFertigungsplan(function(data){
                        console.log(data);
                    });
                    break;
                case '1':
                    getterFunctions.getallendmontageLagerbestand(function(data){
                        console.log(data);
                    });
                    break;
                case '2':
                    getterFunctions.getallendmontageLagerzugang(function(data){
                        console.log(data);
                    });
                    break;
            }
            break;
        case 'vorfertigung':
            switch (tabelle){
                case '0':
                    getterFunctions.getallvorfertigungFertigungsplan(function(data){
                        console.log(data);
                    });
                    break;
                case '1':
                    getterFunctions.getallvorfertigungLagerbestand(function(data){
                        console.log(data);
                    });
                    break;
                case '2':
                    getterFunctions.getallvorfertigungLagerzugang(function(data){
                        console.log(data);
                    });
            }
            break;
        case 'ordermanagement':
            getterFunctions.getallorderManagement(function(data){
                console.log(data);
            });
            break;
        case 'lieferabwicklung':
            switch (tabelle){
                case '0':
                    getterFunctions.getalllieferabwicklungLagerzugang(function(data){
                        console.log(data);
                    });
                    break;
                case '1':
                    getterFunctions.getalllieferabwicklungLagerbestand(function(data){
                        console.log(data);
                    });
                    break;
                case '2':
                    getterFunctions.getalllieferabwicklungBestelluebersicht(function(data){
                        console.log(data);
                    });
            }
            break;
        case 'lieferant':
            getterFunctions.getalllieferantenBestellung(function(data){
                console.log(data);
            });
    }
}