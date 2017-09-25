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



// liefert den letzten Bestand aus der Eingangsprüfung zurück
function getlagerbestandEingangspruefung(spielID, periode, takt, artikel, callback) {
    lagerbestandEingangspruefung.findOne({'spielID':spielID, 'periode': periode, 'takt':takt, 'artikel': artikel}, function (err, data) {
        if(err) throw err;
        return callback(data);


    });

    };

module.exports = {
    getlagerbestandEingangspruefung :getlagerbestandEingangspruefung
}