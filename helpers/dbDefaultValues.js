var setterFunctions = require("../helpers/setterFunctions");
var updateFunctions = require("../helpers/updateFunctions");

var app = require("../app");
spielID = app.spielID;


function generateDefaultValuesInDB (){

    //Lieferant
    setterFunctions.createLieferantenBestellung(spielID,1,-5,"schwarz",1,9, function (data) {
        updateFunctions.updateLieferantenBestellung(data._id,"bestaetigterTakt",1);
        updateFunctions.updateLieferantenBestellung(data._id,"bestaetigteMenge",9);
    });

    setterFunctions.createLieferantenBestellung(spielID,2,-4,"weiß",1,8, function(data){
        updateFunctions.updateLieferantenBestellung(data._id,"bestaetigterTakt",1);
        updateFunctions.updateLieferantenBestellung(data._id,"bestaetigteMenge",9);
    });

    setterFunctions.createLieferantenBestellung(spielID,3,-3,"rot",1,7, function(data){
        updateFunctions.updateLieferantenBestellung(data._id,"bestaetigterTakt",1);
        updateFunctions.updateLieferantenBestellung(data._id,"bestaetigteMenge",9);
    });
    setterFunctions.createLieferantenBestellung(spielID,4,-4,"schwarz",2,9,function(data){
        updateFunctions.updateLieferantenBestellung(data._id,"bestaetigterTakt",2);
        updateFunctions.updateLieferantenBestellung(data._id,"bestaetigteMenge",9);
    });
    setterFunctions.createLieferantenBestellung(spielID,5,-3,"weiß",2,8,function(data){
        updateFunctions.updateLieferantenBestellung(data._id,"bestaetigterTakt",2);
        updateFunctions.updateLieferantenBestellung(data._id,"bestaetigteMenge",8);
    });
    setterFunctions.createLieferantenBestellung(spielID,6,-2,"rot",2,7,function(data){
        updateFunctions.updateLieferantenBestellung(data._id,"bestaetigterTakt",2);
        updateFunctions.updateLieferantenBestellung(data._id,"bestaetigteMenge",7);
    });
    setterFunctions.createLieferantenBestellung(spielID,7,-3,"schwarz",3,9,function(data){
        updateFunctions.updateLieferantenBestellung(data._id,"bestaetigterTakt",3);
        updateFunctions.updateLieferantenBestellung(data._id,"bestaetigteMenge",9);
    });
    setterFunctions.createLieferantenBestellung(spielID,8,-2,"weiß",3,8,function(data){
        updateFunctions.updateLieferantenBestellung(data._id,"bestaetigterTakt",3);
        updateFunctions.updateLieferantenBestellung(data._id,"bestaetigteMenge",8);
    });
    setterFunctions.createLieferantenBestellung(spielID,9,-1,"rot",3,7,function(data){
        updateFunctions.updateLieferantenBestellung(data._id,"bestaetigterTakt",3);
        updateFunctions.updateLieferantenBestellung(data._id,"bestaetigteMenge",7);
    });
    setterFunctions.createLieferantenBestellung(spielID,10,-2,"schwarz",4,9,function(data){
        updateFunctions.updateLieferantenBestellung(data._id,"bestaetigterTakt",4);
        updateFunctions.updateLieferantenBestellung(data._id,"bestaetigteMenge",9);
    });
    setterFunctions.createLieferantenBestellung(spielID,11,-1,"weiß",4,8,function(data){
    });
    setterFunctions.createLieferantenBestellung(spielID,12,0,"rot",4,7,function(data){
    });
    setterFunctions.createLieferantenBestellung(spielID,13,-1,"schwarz",5,9,function(data){
    });
    setterFunctions.createLieferantenBestellung(spielID,14,0,"weiß",5,8,function(data){
    });
    setterFunctions.createLieferantenBestellung(spielID,15,0,"schwarz",6,9,function(data){
    });

    //Beschaffung Bestellübersicht
    setterFunctions.createBeschaffungsBestelluebersicht(spielID,1,-5,"schwarz",1,9,1,function (data) {});
    setterFunctions.createBeschaffungsBestelluebersicht(spielID,1,-4,"schwarz",4,9,2,function (data) {});
    setterFunctions.createBeschaffungsBestelluebersicht(spielID,1,-3,"schwarz",7,9,3,function (data) {});
    setterFunctions.createBeschaffungsBestelluebersicht(spielID,1,-2,"schwarz",10,9,4,function (data) {});
    setterFunctions.createBeschaffungsBestelluebersicht(spielID,1,-1,"schwarz",13,9,5,function (data) {});
    setterFunctions.createBeschaffungsBestelluebersicht(spielID,1,0,"schwarz",15,9,6,function (data) {});
    setterFunctions.createBeschaffungsBestelluebersicht(spielID,1,-4,"weiß",2,8,1,function (data) {});
    setterFunctions.createBeschaffungsBestelluebersicht(spielID,1,-3,"weiß",5,8,2,function (data) {});
    setterFunctions.createBeschaffungsBestelluebersicht(spielID,1,-2,"weiß",8,8,3,function (data) {});
    setterFunctions.createBeschaffungsBestelluebersicht(spielID,1,-1,"weiß",11,8,4,function (data) {});
    setterFunctions.createBeschaffungsBestelluebersicht(spielID,1,0,"weiß",14,8,5,function (data) {});
    setterFunctions.createBeschaffungsBestelluebersicht(spielID,1,-3,"rot",3,7,1,function (data) {});
    setterFunctions.createBeschaffungsBestelluebersicht(spielID,1,-2,"rot",6,7,2,function (data) {});
    setterFunctions.createBeschaffungsBestelluebersicht(spielID,1,-1,"rot",9,7,3,function (data) {});
    setterFunctions.createBeschaffungsBestelluebersicht(spielID,1,0,"rot",12,7,4,function (data) {});

    //Vorfertigung Fertigungsplan
    setterFunctions.createVorfertigungFertigungsplan(spielID,1,1,"schwarz",4,function (data) {});
    setterFunctions.createVorfertigungFertigungsplan(spielID,1,2,"schwarz",3,function (data) {});
    setterFunctions.createVorfertigungFertigungsplan(spielID,1,3,"schwarz",4,function (data) {});
    setterFunctions.createVorfertigungFertigungsplan(spielID,1,4,"schwarz",3,function (data) {});
    setterFunctions.createVorfertigungFertigungsplan(spielID,1,5,"schwarz",4,function (data) {});
    setterFunctions.createVorfertigungFertigungsplan(spielID,1,6,"schwarz",3,function (data) {});
    setterFunctions.createVorfertigungFertigungsplan(spielID,1,7,"schwarz",4,function (data) {});
    setterFunctions.createVorfertigungFertigungsplan(spielID,1,8,"schwarz",3,function (data) {});
    setterFunctions.createVorfertigungFertigungsplan(spielID,1,9,"schwarz",4,function (data) {});
    setterFunctions.createVorfertigungFertigungsplan(spielID,1,10,"schwarz",3,function (data) {});
    setterFunctions.createVorfertigungFertigungsplan(spielID,1,1,"weiß",4,function (data) {});
    setterFunctions.createVorfertigungFertigungsplan(spielID,1,2,"weiß",5,function (data) {});
    setterFunctions.createVorfertigungFertigungsplan(spielID,1,3,"weiß",4,function (data) {});
    setterFunctions.createVorfertigungFertigungsplan(spielID,1,4,"weiß",5,function (data) {});
    setterFunctions.createVorfertigungFertigungsplan(spielID,1,5,"weiß",4,function (data) {});
    setterFunctions.createVorfertigungFertigungsplan(spielID,1,6,"weiß",5,function (data) {});
    setterFunctions.createVorfertigungFertigungsplan(spielID,1,7,"weiß",4,function (data) {});
    setterFunctions.createVorfertigungFertigungsplan(spielID,1,8,"weiß",5,function (data) {});
    setterFunctions.createVorfertigungFertigungsplan(spielID,1,9,"weiß",4,function (data) {});
    setterFunctions.createVorfertigungFertigungsplan(spielID,1,10,"weiß",5,function (data) {});

    //Endmontage Fertigungsplan
    setterFunctions.createEndmontageFertigungsplan(spielID,1,1,"schwarz",0,function (data) {});
    setterFunctions.createEndmontageFertigungsplan(spielID,1,2,"schwarz",6,function (data) {});
    setterFunctions.createEndmontageFertigungsplan(spielID,1,3,"schwarz",0,function (data) {});
    setterFunctions.createEndmontageFertigungsplan(spielID,1,4,"schwarz",6,function (data) {});
    setterFunctions.createEndmontageFertigungsplan(spielID,1,5,"schwarz",0,function (data) {});
    setterFunctions.createEndmontageFertigungsplan(spielID,1,6,"schwarz",6,function (data) {});
    setterFunctions.createEndmontageFertigungsplan(spielID,1,7,"schwarz",0,function (data) {});
    setterFunctions.createEndmontageFertigungsplan(spielID,1,8,"schwarz",6,function (data) {});
    setterFunctions.createEndmontageFertigungsplan(spielID,1,9,"schwarz",0,function (data) {});
    setterFunctions.createEndmontageFertigungsplan(spielID,1,10,"schwarz",6,function (data) {});
    setterFunctions.createEndmontageFertigungsplan(spielID,1,1,"weiß",8,function (data) {});
    setterFunctions.createEndmontageFertigungsplan(spielID,1,2,"weiß",0,function (data) {});
    setterFunctions.createEndmontageFertigungsplan(spielID,1,3,"weiß",8,function (data) {});
    setterFunctions.createEndmontageFertigungsplan(spielID,1,4,"weiß",0,function (data) {});
    setterFunctions.createEndmontageFertigungsplan(spielID,1,5,"weiß",8,function (data) {});
    setterFunctions.createEndmontageFertigungsplan(spielID,1,6,"weiß",0,function (data) {});
    setterFunctions.createEndmontageFertigungsplan(spielID,1,7,"weiß",8,function (data) {});
    setterFunctions.createEndmontageFertigungsplan(spielID,1,8,"weiß",0,function (data) {});
    setterFunctions.createEndmontageFertigungsplan(spielID,1,9,"weiß",8,function (data) {});
    setterFunctions.createEndmontageFertigungsplan(spielID,1,10,"weiß",0,function (data) {});

    //Lieferabwicklung Bestellübersicht
    setterFunctions.createLieferabwicklungBestelluebersicht(spielID,1,101,6,function(data){
        updateFunctions.updateLieferabwicklungBestelluebersicht(data._id,"wunschtermin",1);
        updateFunctions.updateLieferabwicklungBestelluebersicht(data._id,"bestaetigtertermin",1);
    });
    setterFunctions.createLieferabwicklungBestelluebersicht(spielID,1,102,6,function(data){
        updateFunctions.updateLieferabwicklungBestelluebersicht(data._id,"wunschtermin",2);
        updateFunctions.updateLieferabwicklungBestelluebersicht(data._id,"bestaetigtertermin",2);
    });
    setterFunctions.createLieferabwicklungBestelluebersicht(spielID,1,103,8,function(data){
        updateFunctions.updateLieferabwicklungBestelluebersicht(data._id,"wunschtermin",3);
        updateFunctions.updateLieferabwicklungBestelluebersicht(data._id,"bestaetigtertermin",3);
    });
    setterFunctions.createLieferabwicklungBestelluebersicht(spielID,1,104,4,function(data){
        updateFunctions.updateLieferabwicklungBestelluebersicht(data._id,"wunschtermin",4);
        updateFunctions.updateLieferabwicklungBestelluebersicht(data._id,"bestaetigtertermin",4);
    });
    setterFunctions.createLieferabwicklungBestelluebersicht(spielID,1,105,7,function(data){
        updateFunctions.updateLieferabwicklungBestelluebersicht(data._id,"wunschtermin",5);
        updateFunctions.updateLieferabwicklungBestelluebersicht(data._id,"bestaetigtertermin",5);
    });
    setterFunctions.createLieferabwicklungBestelluebersicht(spielID,1,106,4,function(data){
        updateFunctions.updateLieferabwicklungBestelluebersicht(data._id,"wunschtermin",6);
        updateFunctions.updateLieferabwicklungBestelluebersicht(data._id,"bestaetigtertermin",6);
    });

    //Order Management
    setterFunctions.createOrderManagement(spielID,1,1,"schwarz",function(data){
        updateFunctions.updateOrderManagement(data._id,"anfangsbestand",6);
        updateFunctions.updateOrderManagement(data._id,"abgangsnr1",3);
        updateFunctions.updateOrderManagement(data._id,"abgang1",5);
    });
    setterFunctions.createOrderManagement(spielID,1,2,"schwarz",function(data){
        updateFunctions.updateOrderManagement(data._id,"zugangsnr",102);
        updateFunctions.updateOrderManagement(data._id,"zugang",6);
    });
    setterFunctions.createOrderManagement(spielID,1,3,"schwarz",function(data){
        updateFunctions.updateOrderManagement(data._id,"abgangsnr1",6);
        updateFunctions.updateOrderManagement(data._id,"abgang1",3);
        updateFunctions.updateOrderManagement(data._id,"abgangsnr2",4);
        updateFunctions.updateOrderManagement(data._id,"abgang2",2);
        updateFunctions.updateOrderManagement(data._id,"abgangsnr3",10);
        updateFunctions.updateOrderManagement(data._id,"abgang3",2);
    });
    setterFunctions.createOrderManagement(spielID,1,4,"schwarz",function(data){
        updateFunctions.updateOrderManagement(data._id,"zugangsnr",104);
        updateFunctions.updateOrderManagement(data._id,"zugang",4);
    });
    setterFunctions.createOrderManagement(spielID,1,6,"schwarz",function(data){
        updateFunctions.updateOrderManagement(data._id,"zugangsnr",106);
        updateFunctions.updateOrderManagement(data._id,"zugang",4);
    });

    setterFunctions.createOrderManagement(spielID,1,1,"weiß",function(data){
        updateFunctions.updateOrderManagement(data._id,"anfangsbestand",3);
        updateFunctions.updateOrderManagement(data._id,"zugangsnr",101);
        updateFunctions.updateOrderManagement(data._id,"zugang",6);
        updateFunctions.updateOrderManagement(data._id,"abgangsnr1",5);
        updateFunctions.updateOrderManagement(data._id,"abgang1",2);
    });
    setterFunctions.createOrderManagement(spielID,1,3,"weiß",function(data){
        updateFunctions.updateOrderManagement(data._id,"zugangsnr",103);
        updateFunctions.updateOrderManagement(data._id,"zugang",8);
    });
    setterFunctions.createOrderManagement(spielID,1,5,"weiß",function(data){
        updateFunctions.updateOrderManagement(data._id,"zugangsnr",105);
        updateFunctions.updateOrderManagement(data._id,"zugang",7);
    });
    setterFunctions.createOrderManagement(spielID,1,7,"weiß",function(data){
        updateFunctions.updateOrderManagement(data._id,"zugangsnr",107);
        updateFunctions.updateOrderManagement(data._id,"zugang",6);
    });

    //Kunde
    setterFunctions.createKundeAuftragsuebersicht(spielID,1,1,"schwarz",3,1,function(data){
        updateFunctions.updateKundeAuftragsuebersicht(data._id,"bestaetigtertermin",1);
    });
    setterFunctions.createKundeAuftragsuebersicht(spielID,1,2,"schwarz",4,1,function(data){
        updateFunctions.updateKundeAuftragsuebersicht(data._id,"bestaetigtertermin",1);
    });
    setterFunctions.createKundeAuftragsuebersicht(spielID,1,3,"schwarz",5,3,function(data){
        updateFunctions.updateKundeAuftragsuebersicht(data._id,"bestaetigtertermin",3);
    });
    setterFunctions.createKundeAuftragsuebersicht(spielID,1,4,"schwarz",2,5,function(data){
        updateFunctions.updateKundeAuftragsuebersicht(data._id,"bestaetigtertermin",5);
    });
    setterFunctions.createKundeAuftragsuebersicht(spielID,1,5,"weiß",2,3,function(data){
        updateFunctions.updateKundeAuftragsuebersicht(data._id,"bestaetigtertermin",3);
    });
    setterFunctions.createKundeAuftragsuebersicht(spielID,1,6,"schwarz",3,5,function(data){
        updateFunctions.updateKundeAuftragsuebersicht(data._id,"bestaetigtertermin",5);
    });
    setterFunctions.createKundeAuftragsuebersicht(spielID,1,7,"weiß",6,1,function(data){
        updateFunctions.updateKundeAuftragsuebersicht(data._id,"bestaetigtertermin",1);
    });
    setterFunctions.createKundeAuftragsuebersicht(spielID,1,1,"schwarz",2,1,function(data){
        updateFunctions.updateKundeAuftragsuebersicht(data._id,"bestaetigtertermin",1);
    });
    setterFunctions.createKundeAuftragsuebersicht(spielID,1,8,"schwarz",3,7,function(data){
        updateFunctions.updateKundeAuftragsuebersicht(data._id,"bestaetigtertermin",2);
    });
    setterFunctions.createKundeAuftragsuebersicht(spielID,1,10,"schwarz",2,5,function(data){
        updateFunctions.updateKundeAuftragsuebersicht(data._id,"bestaetigtertermin",5);
    });
    setterFunctions.createKundeAuftragsuebersicht(spielID,1,11,"schwarz",2,7,function (data) {});
    setterFunctions.createKundeAuftragsuebersicht(spielID,1,12,"weiß",5,3,function (data) {});
}


module.exports = {
    generateDefaultValuesInDB:generateDefaultValuesInDB
}