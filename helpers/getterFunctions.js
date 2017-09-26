//alle Schemas importieren
var lieferantenBestellung = require ("../models/lieferantenBestellung.js");
var beschaffungsBestandswert = require("../models/beschaffungBestandswert");
var beschaffungBestelluebersicht = require("../models/beschaffungBestelluebersicht");
var beschaffungKPI = require("../models/beschaffungKPI");
var beschaffungsUebersicht = require("../models/beschaffungsUebersicht");
var endmontageFertigungsplan = require("../models/endmontageFertigungsplan");
var endmontageKPI = require("../models/endmontageKPI");
var endmontageLagerbestand = require("../models/endmontageLagerbestand");
var endmontageLagersumme = require("../models/endmontageLagersumme");
var endmontageLagerzugang = require("../models/endmontageLagerzugang");
var endmontageLosesumme = require("../models/endmontageLosesumme");
var lagerbestandEingangspruefung = require("../models/lagerbestandEingangspruefung");
var lagerbestandvorEingangspruefung = require("../models/lagerbestandvorEingangspruefung");
var vorfertigungFertigungsplan = require("../models/vorfertigungFertigungsplan");
var vorfertigungKPI = require("../models/vorfertigungKPI");
var vorfertigungLagerbestand = require("../models/vorfertigungLagerbestand");
var vorfertigungLagersumme = require("../models/vorfertigungLagersumme");
var vorfertigungLagerzugang = require("../models/vorfertigungLagerzugang");
var vorfertigungLosesumme = require("../models/vorfertigungLosesumme");
var distributionAuftragsbearbeitung= require("../models/distributionAuftragsbearbeitung");
var distributionKPI = require("../models/distributionKPI");
var distributionLagerbestand= require("../models/distributionLagerbestand");
var distributionSummen= require("../models/distributionSummen");
var distributionLagerzugang =require("../models/distributionLagerzugang");
var kundeAuftragsuebersicht= require("../models/kundeAuftragsuebersicht");
var kundeKPI= require("../models/kundeKPI");
var kundeUmsatz= require("../models/kundeUmsatz");
var lieferabwicklungBestelluebersicht= require("../models/lieferabwicklungBestelluebersicht");
var lieferabwicklungKPI= require("../models/lieferabwicklungKPI");
var lieferabwicklungLagerbestand= require("../models/lieferabwicklungLagerbestand");
var lieferabwicklungLagerzugang= require("../models/lieferabwicklungLagerzugang");
var lieferabwicklungSummen= require("../models/lieferabwicklungSummen");
var orderManagement= require("../models/orderManagement");

function getalllieferabwicklungLagerzugang(callback) {
        lieferabwicklungLagerzugang.find({}, function (err, data) {
            if (err) return handleError(err);
            return callback(data);
    });
}




function getbeschaffungBestandswert(spielID, periode, callback) {
    beschaffungsBestandswert.findOne({'spielID':spielID, 'periode': periode}, function (err, data) {
        if(err) return handleError (err);
        return callback(data);
    });

};

function getbeschaffungBestelluebersicht(spielID, periode, takt, artikel, callback) {
    beschaffungBestelluebersicht.findOne({'spielID':spielID, 'periode': periode, 'takt':takt, 'artikel': artikel}, function (err, data) {
        if(err) return handleError (err);
        return callback(data);
    });

};


function getbeschaffungKPI(spielID, periode, callback) {
    beschaffungKPI.findOne({'spielID':spielID, 'periode': periode}, function (err, data) {
        if(err) return handleError (err);
        return callback(data);
    });

};

function getbeschaffungsUebersicht(spielID, periode, callback) {
    beschaffungsUebersicht.findOne({'spielID':spielID, 'periode': periode}, function (err, data) {
        if(err) return handleError (err);
        return callback(data);
    });

};



// liefert den letzten Bestand aus der Eingangsprüfung zurück
function getlagerbestandEingangspruefung(spielID, periode, takt, artikel, callback) {
    lagerbestandEingangspruefung.findOne({'spielID':spielID, 'periode': periode, 'takt':takt, 'artikel': artikel}, function (err, data) {
        if(err) return handleError (err);
        return callback(data);
    });

    };

function getlagerbestandvorEingangspruefung(spielID, periode, takt, artikel, callback){
    lagerbestandvorEingangspruefung.findOne({'spielID': spielID, 'periode': periode, 'takt':takt, 'artikel': artikel}, function(err, data){
        if(err) return handleError (err);
        return callback(data);
    });
};

function getlieferabwicklungBestelluebersicht(spielID, periode, takt, bestellnr, callback){
    lieferabwicklungBestelluebersicht.findOne({'spielID': spielID, 'periode': periode, 'takt':takt, 'bestellnr': bestellnr}, function(err, data){
        if(err) return handleError (err);
        return callback(data);
    });
};

function getlieferabwicklungKPI(spielID, periode, callback){
    lieferabwicklungKPI.findOne({'spielID': spielID, 'periode': periode}, function(err, data){
        if(err) return handleError (err);
        return callback(data);
    });
};

function getlieferabwicklungLagerbestand(spielID, periode, takt, artikel, callback){
    lieferabwicklungLagerbestand.findOne({'spielID': spielID, 'periode': periode,'takt':takt, 'artikel':artikel}, function(err, data){
        if(err) return handleError (err);
        return callback(data);
    });
};

function getlieferabwicklungLagerzugang(spielID, periode, takt, artikel, callback){
    lieferabwicklungLagerzugang.findOne({'spielID': spielID, 'periode': periode,'takt':takt, 'artikel':artikel}, function(err, data){
        if(err) return handleError (err);
        return callback(data);
    });
};

function getlieferabwicklungSummen(spielID, periode, callback){
    lieferabwicklungSummen.findOne({'spielID': spielID, 'periode': periode}, function(err, data){
        if(err) return handleError (err);
        return callback(data);
    });
};

function getlieferantenBestellung(spielID, nr, callback) {
    lieferantenBestellung.findOne({'spielID': spielID, 'nr': nr}, function(err, data){
        if (err) return handleError (err);
        return callback(data);
    });
};

function getorderManagement(spielID, periode, takt, artikel, callback) {
    orderManagement.findOne({'spielID': spielID, 'periode': periode, 'takt': takt, 'artikel': artikel}, function(err, data){
        if (err) return handleError (err);
        return callback(data);
    });
};

function getvorfertigungFertigungsplan(spielID, periode, takt, artikel, callback) {
    vorfertigungFertigungsplan.findOne({'spielID': spielID, 'periode': periode, 'takt': takt, 'artikel': artikel}, function(err, data){
        if (err) return handleError (err);
        return callback(data);
    });
};

function getvorfertigungKPI(spielID, periode, callback) {
    vorfertigungKPI.findOne({'spielID': spielID, 'periode': periode}, function(err, data){
        if (err) return handleError (err);
        return callback(data);
    });
};

function getvorfertigungLagerbestand(spielID, periode, takt, artikel, callback) {
    vorfertigungLagerbestand.findOne({'spielID': spielID, 'periode': periode, 'takt': takt, 'artikel':artikel}, function(err, data){
        if (err) return handleError (err);
        return callback(data);
    });
};

function getvorfertigungLagersumme(spielID, periode, callback) {
    vorfertigungLagersumme.findOne({'spielID': spielID, 'periode': periode}, function(err, data){
        if (err) return handleError (err);
        return callback(data);
    });
};

function getvorfertigungLagerzugang(spielID, periode, takt, artikel, callback) {
    vorfertigungLagerzugang.findOne({'spielID': spielID, 'periode': periode, 'takt': takt, 'artikel': artikel}, function(err, data){
        if (err) return handleError (err);
        return callback(data);
    });
};

function getvorfertigungLosesumme(spielID, periode, artikel, callback) {
    vorfertigungLosesumme.findOne({'spielID': spielID, 'periode': periode, 'artikel':artikel}, function(err, data){
        if (err) return handleError (err);
        return callback(data);
    });
};



module.exports = {
    getalllieferabwicklungLagerzugang:getalllieferabwicklungLagerzugang,
    getlagerbestandEingangspruefung: getlagerbestandEingangspruefung,
    getlagerbestandvorEingangspruefung: getlagerbestandvorEingangspruefung,
    getlieferabwicklungBestelluebersicht: getlieferabwicklungBestelluebersicht,
    getlieferabwicklungKPI: getlieferabwicklungKPI,
    getlieferantenBestellung:getlieferantenBestellung,
    getlieferabwicklungLagerbestand: getlieferabwicklungLagerbestand,
    getlieferabwicklungLagerzugang: getlieferabwicklungLagerzugang,
    getlieferabwicklungSummen: getlieferabwicklungSummen,
    getorderManagement: getorderManagement,
    getvorfertigungFertigungsplan: getvorfertigungFertigungsplan,
    getvorfertigungKPI: getvorfertigungKPI,
    getvorfertigungLagerbestand: getvorfertigungLagerbestand,
    getvorfertigungLagersumme: getvorfertigungLagersumme,
    getvorfertigungLagerzugang: getvorfertigungLagerzugang,
    getvorfertigungLosesumme: getvorfertigungLosesumme,
    getbeschaffungBestandswert: getbeschaffungBestandswert,
    getbeschaffungBestelluebersicht: getbeschaffungBestelluebersicht,
    getbeschaffungKPI: getbeschaffungKPI,
    getbeschaffungsUebersicht: getbeschaffungsUebersicht
}