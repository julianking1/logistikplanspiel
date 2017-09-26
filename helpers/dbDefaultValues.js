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

    //

}


module.exports = {
    generateDefaultValuesInDB:generateDefaultValuesInDB
}