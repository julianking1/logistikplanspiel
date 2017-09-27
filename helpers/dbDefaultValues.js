var setterFunctions = require("../helpers/setterFunctions");
var updateFunctions = require("../helpers/updateFunctions");
var getterFunctions = require("../helpers/getterFunctions");

var app = require("../app");

function generateDefaultValuesInDB (){
    //Lieferant
    setterFunctions.createLieferantenBestellung(app.spielID,1,-5,"schwarz",1,9);
    getterFunctions.getlieferantenBestellung(app.spielID,4,function (data) {
        updateFunctions.updateLieferantenBestellung(data._id,"bestaetigterTakt",2);
        updateFunctions.updateLieferantenBestellung(data._id,"bestaetigteMenge",9);
    });
    setterFunctions.createLieferantenBestellung(app.spielID,2,-4,"weiß",1,8);
    getterFunctions.getlieferantenBestellung(app.spielID,4,function (data) {
        updateFunctions.updateLieferantenBestellung(data._id,"bestaetigterTakt",2);
        updateFunctions.updateLieferantenBestellung(data._id,"bestaetigteMenge",9);
    });
    setterFunctions.createLieferantenBestellung(app.spielID,3,-3,"rot",1,7);
    getterFunctions.getlieferantenBestellung(app.spielID,4,function (data) {
        updateFunctions.updateLieferantenBestellung(data._id,"bestaetigterTakt",2);
        updateFunctions.updateLieferantenBestellung(data._id,"bestaetigteMenge",9);
    });
    setterFunctions.createLieferantenBestellung(app.spielID,4,-4,"schwarz",2,9);
    getterFunctions.getlieferantenBestellung(app.spielID,4,function (data) {
        updateFunctions.updateLieferantenBestellung(data._id,"bestaetigterTakt",2);
        updateFunctions.updateLieferantenBestellung(data._id,"bestaetigteMenge",9);
    });
    setterFunctions.createLieferantenBestellung(app.spielID,5,-3,"weiß",2,8);
    getterFunctions.getlieferantenBestellung(app.spielID,5,function (data) {
        updateFunctions.updateLieferantenBestellung(data._id,"bestaetigterTakt",2);
        updateFunctions.updateLieferantenBestellung(data._id,"bestaetigteMenge",8);
    });
    setterFunctions.createLieferantenBestellung(app.spielID,6,-2,"rot",2,7);
    getterFunctions.getlieferantenBestellung(app.spielID,4,function (data) {
        updateFunctions.updateLieferantenBestellung(data._id,"bestaetigterTakt",2);
        updateFunctions.updateLieferantenBestellung(data._id,"bestaetigteMenge",9);
    });
    setterFunctions.createLieferantenBestellung(app.spielID,7,-3,"schwarz",3,9);
    getterFunctions.getlieferantenBestellung(app.spielID,4,function (data) {
        updateFunctions.updateLieferantenBestellung(data._id,"bestaetigterTakt",2);
        updateFunctions.updateLieferantenBestellung(data._id,"bestaetigteMenge",9);
    });
    setterFunctions.createLieferantenBestellung(app.spielID,8,-2,"weiß",3,8);
    getterFunctions.getlieferantenBestellung(app.spielID,4,function (data) {
        updateFunctions.updateLieferantenBestellung(data._id,"bestaetigterTakt",2);
        updateFunctions.updateLieferantenBestellung(data._id,"bestaetigteMenge",9);
    });
    setterFunctions.createLieferantenBestellung(app.spielID,9,-1,"rot",3,7);
    getterFunctions.getlieferantenBestellung(app.spielID,4,function (data) {
        updateFunctions.updateLieferantenBestellung(data._id,"bestaetigterTakt",2);
        updateFunctions.updateLieferantenBestellung(data._id,"bestaetigteMenge",9);
    });
    setterFunctions.createLieferantenBestellung(app.spielID,10,-2,"schwarz",4,9);
    getterFunctions.getlieferantenBestellung(app.spielID,4,function (data) {
        updateFunctions.updateLieferantenBestellung(data._id,"bestaetigterTakt",2);
        updateFunctions.updateLieferantenBestellung(data._id,"bestaetigteMenge",9);
    });
    setterFunctions.createLieferantenBestellung(app.spielID,11,-1,"weiß",4,8);
    getterFunctions.getlieferantenBestellung(app.spielID,4,function (data) {
        updateFunctions.updateLieferantenBestellung(data._id,"bestaetigterTakt",2);
        updateFunctions.updateLieferantenBestellung(data._id,"bestaetigteMenge",9);
    });
    setterFunctions.createLieferantenBestellung(app.spielID,12,0,"rot",4,7);
    getterFunctions.getlieferantenBestellung(app.spielID,4,function (data) {
        updateFunctions.updateLieferantenBestellung(data._id,"bestaetigterTakt",2);
        updateFunctions.updateLieferantenBestellung(data._id,"bestaetigteMenge",9);
    });
    setterFunctions.createLieferantenBestellung(app.spielID,13,-1,"schwarz",5,9);
    getterFunctions.getlieferantenBestellung(app.spielID,4,function (data) {
        updateFunctions.updateLieferantenBestellung(data._id,"bestaetigterTakt",2);
        updateFunctions.updateLieferantenBestellung(data._id,"bestaetigteMenge",9);
    });
    setterFunctions.createLieferantenBestellung(app.spielID,14,0,"weiß",5,8);
    getterFunctions.getlieferantenBestellung(app.spielID,4,function (data) {
        updateFunctions.updateLieferantenBestellung(data._id,"bestaetigterTakt",2);
        updateFunctions.updateLieferantenBestellung(data._id,"bestaetigteMenge",9);
    });
    setterFunctions.createLieferantenBestellung(app.spielID,15,0,"schwarz",6,9);
    getterFunctions.getlieferantenBestellung(app.spielID,4,function (data) {
        updateFunctions.updateLieferantenBestellung(data._id,"bestaetigterTakt",2);
        updateFunctions.updateLieferantenBestellung(data._id,"bestaetigteMenge",9);
    });

    //Beschaffung Bestellübersicht
    setterFunctions.createBeschaffungsBestelluebersicht(app.spielID,1,-5,"schwarz",1,9,1);
    setterFunctions.createBeschaffungsBestelluebersicht(app.spielID,1,-4,"schwarz",4,9,2);
    setterFunctions.createBeschaffungsBestelluebersicht(app.spielID,1,-3,"schwarz",7,9,3);
    setterFunctions.createBeschaffungsBestelluebersicht(app.spielID,1,-2,"schwarz",10,9,4);
    setterFunctions.createBeschaffungsBestelluebersicht(app.spielID,1,-1,"schwarz",13,9,5);
    setterFunctions.createBeschaffungsBestelluebersicht(app.spielID,1,0,"schwarz",15,9,6);
    setterFunctions.createBeschaffungsBestelluebersicht(app.spielID,1,-4,"weiß",2,8,1);
    setterFunctions.createBeschaffungsBestelluebersicht(app.spielID,1,-3,"weiß",5,8,2);
    setterFunctions.createBeschaffungsBestelluebersicht(app.spielID,1,-2,"weiß",8,8,3);
    setterFunctions.createBeschaffungsBestelluebersicht(app.spielID,1,-1,"weiß",11,8,4);
    setterFunctions.createBeschaffungsBestelluebersicht(app.spielID,1,0,"weiß",14,8,5);
    setterFunctions.createBeschaffungsBestelluebersicht(app.spielID,1,-3,"rot",3,7,1);
    setterFunctions.createBeschaffungsBestelluebersicht(app.spielID,1,-2,"rot",6,7,2);
    setterFunctions.createBeschaffungsBestelluebersicht(app.spielID,1,-1,"rot",9,7,3);
    setterFunctions.createBeschaffungsBestelluebersicht(app.spielID,1,0,"rot",12,7,4);

    //Vorfertigung Fertigungsplan
    setterFunctions.createVorfertigungFertigungsplan(app.spielID,1,1,"schwarz",4);
    setterFunctions.createVorfertigungFertigungsplan(app.spielID,1,2,"schwarz",3);
    setterFunctions.createVorfertigungFertigungsplan(app.spielID,1,3,"schwarz",4);
    setterFunctions.createVorfertigungFertigungsplan(app.spielID,1,4,"schwarz",3);
    setterFunctions.createVorfertigungFertigungsplan(app.spielID,1,5,"schwarz",4);
    setterFunctions.createVorfertigungFertigungsplan(app.spielID,1,6,"schwarz",3);
    setterFunctions.createVorfertigungFertigungsplan(app.spielID,1,7,"schwarz",4);
    setterFunctions.createVorfertigungFertigungsplan(app.spielID,1,8,"schwarz",3);
    setterFunctions.createVorfertigungFertigungsplan(app.spielID,1,9,"schwarz",4);
    setterFunctions.createVorfertigungFertigungsplan(app.spielID,1,10,"schwarz",3);
    setterFunctions.createVorfertigungFertigungsplan(app.spielID,1,1,"weiß",4);
    setterFunctions.createVorfertigungFertigungsplan(app.spielID,1,2,"weiß",5);
    setterFunctions.createVorfertigungFertigungsplan(app.spielID,1,3,"weiß",4);
    setterFunctions.createVorfertigungFertigungsplan(app.spielID,1,4,"weiß",5);
    setterFunctions.createVorfertigungFertigungsplan(app.spielID,1,5,"weiß",4);
    setterFunctions.createVorfertigungFertigungsplan(app.spielID,1,6,"weiß",5);
    setterFunctions.createVorfertigungFertigungsplan(app.spielID,1,7,"weiß",4);
    setterFunctions.createVorfertigungFertigungsplan(app.spielID,1,8,"weiß",5);
    setterFunctions.createVorfertigungFertigungsplan(app.spielID,1,9,"weiß",4);
    setterFunctions.createVorfertigungFertigungsplan(app.spielID,1,10,"weiß",5);

    //Endmontage Fertigungsplan
    setterFunctions.createEndmontageFertigungsplan(app.spielID,1,1,"schwarz",0);
    setterFunctions.createEndmontageFertigungsplan(app.spielID,1,2,"schwarz",6);
    setterFunctions.createEndmontageFertigungsplan(app.spielID,1,3,"schwarz",0);
    setterFunctions.createEndmontageFertigungsplan(app.spielID,1,4,"schwarz",6);
    setterFunctions.createEndmontageFertigungsplan(app.spielID,1,5,"schwarz",0);
    setterFunctions.createEndmontageFertigungsplan(app.spielID,1,6,"schwarz",6);
    setterFunctions.createEndmontageFertigungsplan(app.spielID,1,7,"schwarz",0);
    setterFunctions.createEndmontageFertigungsplan(app.spielID,1,8,"schwarz",6);
    setterFunctions.createEndmontageFertigungsplan(app.spielID,1,9,"schwarz",0);
    setterFunctions.createEndmontageFertigungsplan(app.spielID,1,10,"schwarz",6);
    setterFunctions.createEndmontageFertigungsplan(app.spielID,1,1,"weiß",8);
    setterFunctions.createEndmontageFertigungsplan(app.spielID,1,2,"weiß",0);
    setterFunctions.createEndmontageFertigungsplan(app.spielID,1,3,"weiß",8);
    setterFunctions.createEndmontageFertigungsplan(app.spielID,1,4,"weiß",0);
    setterFunctions.createEndmontageFertigungsplan(app.spielID,1,5,"weiß",8);
    setterFunctions.createEndmontageFertigungsplan(app.spielID,1,6,"weiß",0);
    setterFunctions.createEndmontageFertigungsplan(app.spielID,1,7,"weiß",8);
    setterFunctions.createEndmontageFertigungsplan(app.spielID,1,8,"weiß",0);
    setterFunctions.createEndmontageFertigungsplan(app.spielID,1,9,"weiß",8);
    setterFunctions.createEndmontageFertigungsplan(app.spielID,1,10,"weiß",0);

    //Lieferabwicklung Bestellübersicht
    setterFunctions.createLieferabwicklungBestelluebersicht(app.spielID,1,101,6);
    getterFunctions.getlieferabwicklungBestelluebersicht(app.spielID,1,102,function (data) {
        updateFunctions.updateLieferabwicklungBestelluebersicht(data._id,"wunschtermin",1);
        updateFunctions.updateLieferabwicklungBestelluebersicht(data._id,"bestaetigterTermin",1);
    });
    setterFunctions.createLieferabwicklungBestelluebersicht(app.spielID,1,102,6);
    getterFunctions.getlieferabwicklungBestelluebersicht(app.spielID,1,102,function (data) {
        updateFunctions.updateLieferabwicklungBestelluebersicht(data._id,"wunschtermin",2);
        updateFunctions.updateLieferabwicklungBestelluebersicht(data._id,"bestaetigterTermin",2);
    });
    setterFunctions.createLieferabwicklungBestelluebersicht(app.spielID,1,103,8);
    getterFunctions.getlieferabwicklungBestelluebersicht(app.spielID,1,102,function (data) {
        updateFunctions.updateLieferabwicklungBestelluebersicht(data._id,"wunschtermin",3);
        updateFunctions.updateLieferabwicklungBestelluebersicht(data._id,"bestaetigterTermin",3);
    });
    setterFunctions.createLieferabwicklungBestelluebersicht(app.spielID,1,104,4);
    getterFunctions.getlieferabwicklungBestelluebersicht(app.spielID,1,102,function (data) {
        updateFunctions.updateLieferabwicklungBestelluebersicht(data._id,"wunschtermin",4);
        updateFunctions.updateLieferabwicklungBestelluebersicht(data._id,"bestaetigterTermin",4);
    });
    setterFunctions.createLieferabwicklungBestelluebersicht(app.spielID,1,105,7);
    getterFunctions.getlieferabwicklungBestelluebersicht(app.spielID,1,105,function (data) {
        updateFunctions.updateLieferabwicklungBestelluebersicht(data._id,"wunschtermin",5);
        updateFunctions.updateLieferabwicklungBestelluebersicht(data._id,"bestaetigterTermin",5);
    });
    setterFunctions.createLieferabwicklungBestelluebersicht(app.spielID,1,106,4);
    getterFunctions.getlieferabwicklungBestelluebersicht(app.spielID,1,106,function (data) {
        updateFunctions.updateLieferabwicklungBestelluebersicht(data._id,"wunschtermin",6);
        updateFunctions.updateLieferabwicklungBestelluebersicht(data._id,"bestaetigterTermin",6);
    });

    //Order Managementse
    setterFunctions.createOrderManagement(app.spielID,1,1,"schwarz");
    getterFunctions.getorderManagement(app.spielID,1,1,"schwarz", function (data) {
        updateFunctions.updateOrderManagement(data._id,"anfangsbestand",6);
        updateFunctions.updateOrderManagement(data._id,"abgangsnr",3);
        updateFunctions.updateOrderManagement(data._id,"abgang",5);
    });
    setterFunctions.createOrderManagement(app.spielID,1,2,"schwarz");
    getterFunctions.getorderManagement(app.spielID,1,2,"schwarz", function (data) {
        updateFunctions.updateOrderManagement(data._id,"zugangsnr",102);
        updateFunctions.updateOrderManagement(data._id,"zugang",6);
    });
    //mehrere Abgänge!!!

    //Kunde
    //setterFunctions.createKundeAuftragsuebersicht(app.spielID,1,)



}


module.exports = {
    generateDefaultValuesInDB:generateDefaultValuesInDB
}