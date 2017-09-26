var getterFunctions = require("../helpers/getterFunctions");

//alle Schemas importieren
var lieferantenBestellung = require ("../models/lieferantenBestellung.js");
// KEINE OPTIONALEN PARAMETER  var beschaffungsBestandswert = require("../models/beschaffungBestandswert");
// KEINE OPTIONALEN PARAMETER  var beschaffungBestelluebersicht = require("../models/beschaffungBestelluebersicht");
var beschaffungKPI = require("../models/beschaffungKPI");
// KEINE OPTIONALEN PARAMETER  var beschaffungsUebersicht = require("../models/beschaffungsUebersicht");
var endmontageFertigungsplan = require("../models/endmontageFertigungsplan");
var endmontageKPI = require("../models/endmontageKPI");
// KEINE OPTIONALEN PARAMETER  var endmontageLagerbestand = require("../models/endmontageLagerbestand");
// KEINE OPTIONALEN PARAMETER  var endmontageLagersumme = require("../models/endmontageLagersumme");
// KEINE OPTIONALEN PARAMETER  var endmontageLagerzugang = require("../models/endmontageLagerzugang");
// KEINE OPTIONALEN PARAMETER  var endmontageLosesumme = require("../models/endmontageLosesumme");
// KEINE OPTIONALEN PARAMETER  var lagerbestandEingangspruefung = require("../models/lagerbestandEingangspruefung");
// KEINE OPTIONALEN PARAMETER  var lagerbestandvorEingangspruefung = require("../models/lagerbestandvorEingangspruefung");
var vorfertigungFertigungsplan = require("../models/vorfertigungFertigungsplan");
var vorfertigungKPI = require("../models/vorfertigungKPI");
// KEINE OPTIONALEN PARAMETER  var vorfertigungLagerbestand = require("../models/vorfertigungLagerbestand");
// KEINE OPTIONALEN PARAMETER  var vorfertigungLagersumme = require("../models/vorfertigungLagersumme");
// KEINE OPTIONALEN PARAMETER  var vorfertigungLagerzugang = require("../models/vorfertigungLagerzugang");
// KEINE OPTIONALEN PARAMETER  var vorfertigungLosesumme = require("../models/vorfertigungLosesumme");
// KEINE OPTIONALEN PARAMETER  var distributionAuftragsbearbeitung= require("../models/distributionAuftragsbearbeitung");
var distributionKPI = require("../models/distributionKPI");
// KEINE OPTIONALEN PARAMETER  var distributionLagerbestand= require("../models/distributionLagerbestand");
var distributionSummen= require("../models/distributionSummen");
// KEINE OPTIONALEN PARAMETER  var distributionLagerzugang =require("../models/distributionLagerzugang");
var kundeAuftragsuebersicht= require("../models/kundeAuftragsuebersicht");
var kundeKPI= require("../models/kundeKPI");
var kundeUmsatz= require("../models/kundeUmsatz");
var lieferabwicklungBestelluebersicht= require("../models/lieferabwicklungBestelluebersicht");
var lieferabwicklungKPI= require("../models/lieferabwicklungKPI");
// KEINE OPTIONALEN PARAMETER  var lieferabwicklungLagerbestand= require("../models/lieferabwicklungLagerbestand");
// KEINE OPTIONALEN PARAMETER  var lieferabwicklungLagerzugang= require("../models/lieferabwicklungLagerzugang");
// KEINE OPTIONALEN PARAMETER  var lieferabwicklungSummen= require("../models/lieferabwicklungSummen");
var orderManagement= require("../models/orderManagement");


function addErhalteneMengeToLieferantenBestellung(spielid, nr, erhalteneMenge) {

    getterFunctions.getlieferantenBestellung(spielid,nr,function (data) {
        var objectID =  data._id;
        lieferantenBestellung.update({_id:objectID},{$set: {erhalteneMenge: erhalteneMenge}} , function (err) {
            if (err) return handleError()
            console.log("Objekt " + objectID + " aktualisiert")
        })
    })
}

function addErhaltenerTaktToLieferantenBestellung(spielid, nr, erhaltenerTakt) {

    getterFunctions.getlieferantenBestellung(spielid,nr,function (data) {
        var objectID =  data._id;
        lieferantenBestellung.update({_id:objectID},{$set: {erhaltenerTakt: erhaltenerTakt}} , function (err) {
            if (err) return handleError()
            console.log("Objekt " + objectID + " aktualisiert")
        })
    })
}

function addBestaetigteMengeToLieferantenBestellung(spielid, nr, bestaetigteMenge) {

    getterFunctions.getlieferantenBestellung(spielid,nr,function (data) {
        var objectID =  data._id;
        lieferantenBestellung.update({_id:objectID},{$set: {bestaetigteMenge: bestaetigteMenge}} , function (err) {
            if (err) return handleError()
            console.log("Objekt " + objectID + " aktualisiert")
        })
    })
}

function addBestaetigterTaktToLieferantenBestellung(spielid, nr, bestaetigterTakt) {

    getterFunctions.getlieferantenBestellung(spielid,nr,function (data) {
        var objectID =  data._id;
        lieferantenBestellung.update({_id:objectID},{$set: {bestaetigterTakt: bestaetigterTakt}} , function (err) {
            if (err) return handleError()
            console.log("Objekt " + objectID + " aktualisiert")
        })
    })
}

function addWunschterminToLieferabwicklungBestelluebersicht(spielid, periode,takt,bestellnr, wunschtermin) {

    getterFunctions.getlieferabwicklungBestelluebersicht(spielid,periode,takt,bestellnr,function (data) {
        var objectID =  data._id;
        lieferantenBestellung.update({_id:objectID},{$set: {wunschtermin: wunschtermin}} , function (err) {
            if (err) return handleError()
            console.log("Objekt " + objectID + " aktualisiert")
        })
    })
}

function addBestaetigterterminToLieferabwicklungBestelluebersicht(spielid, periode,takt,bestellnr, bestaetigtertermin) {

    getterFunctions.getlieferabwicklungBestelluebersicht(spielid,periode,takt,bestellnr,function (data) {
        var objectID =  data._id;
        lieferantenBestellung.update({_id:objectID},{$set: {bestaetigtertermin: bestaetigtertermin}} , function (err) {
            if (err) return handleError()
            console.log("Objekt " + objectID + " aktualisiert")
        })
    })
}






module.exports = {
    addErhalteneMengeToLieferantenBestellung:addErhalteneMengeToLieferantenBestellung
}