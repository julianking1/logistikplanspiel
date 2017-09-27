var lieferantenBestellung = require ("../models/lieferantenBestellung.js");
var schemaFunctions = require("../helpers/setterFunctions");
var getterFunctions = require("../helpers/getterFunctions");
var updateFunctions = require("../helpers/updateFunctions");
var app = require("../app");

module.exports = {
getAll: getAll
}


function getAll(rolle, tabelle, callback) {
    switch (rolle) {
        case 'kunde':
            switch (tabelle){
                case '0':
                    getterFunctions.getallkundeAuftragsuebersicht(function(data){
                        return(data);
                    })
                    break;
                case '1':
                    getterFunctions.getallkundeUmsatz(function(data){
                        return(data);
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
                        return(data);
                    });
                    break;
                case '1':
                    getterFunctions.getalllagerbestandEingangspruefung(function(data){
                        return(data);
                    });
                    break;
                case '2':
                    getterFunctions.getallbeschaffungBestelluebersicht(function(data){
                        return(data);
                    });
                    break;
            }
            break;
        case 'distributioncenter':
            switch (tabelle) {
                case '0':
                    getterFunctions.getalldistributionLagerzugang(function(data){
                        return(data);
                    });
                    break;
                case '1':
                    getterFunctions.getalldistributionLagerbestand(function(data){
                        return(data);
                    });
                    break;
                case '2':
                    getterFunctions.getalldistributionAuftragsbearbeitung(function(data){
                        return(data);
                    });
                    break;
            }
            break;
        case 'endmontage':
            switch (tabelle){
                case '0':
                    getterFunctions.getallendmontageFertigungsplan(function(data){
                        return(data);
                    });
                    break;
                case '1':
                    getterFunctions.getallendmontageLagerbestand(function(data){
                        return(data);
                    });
                    break;
                case '2':
                    getterFunctions.getallendmontageLagerzugang(function(data){
                        return(data);
                    });
                    break;
            }
            break;
        case 'vorfertigung':
            switch (tabelle){
                case '0':
                    getterFunctions.getallvorfertigungFertigungsplan(function(data){
                        return(data);
                    });
                    break;
                case '1':
                    getterFunctions.getallvorfertigungLagerbestand(function(data){
                        return(data);
                    });
                    break;
                case '2':
                    getterFunctions.getallvorfertigungLagerzugang(function(data){
                        return(data);
                    });
            }
            break;
        case 'ordermanagement':
            getterFunctions.getallorderManagement(function(data){
                return(data);
            });
            break;
        case 'lieferabwicklung':
            switch (tabelle){
                case '0':
                    getterFunctions.getalllieferabwicklungLagerzugang(function(data){
                        return(data);
                    });
                    break;
                case '1':
                    getterFunctions.getalllieferabwicklungLagerbestand(function(data){
                        return(data);
                    });
                    break;
                case '2':
                    getterFunctions.getalllieferabwicklungBestelluebersicht(function(data){
                        return(data);
                    });
            }
            break;
        case 'lieferant':
            getterFunctions.getalllieferantenBestellung(function(data){
                return(data);
            });
    }
}