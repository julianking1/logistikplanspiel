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


//schreibt Datensatz mit allen obligatorischen Attributen in DB
function createLieferantenBestellung(spielID, von, nr, ausstellungstakt, artikel) {
    var data = new lieferantenBestellung({spielID:spielID,von:von,
        nr:nr, austellungstakt:ausstellungstakt, artikel:artikel});
    data.save(function (err) {
        if (err) throw err;
        console.log("Saved: LieferantenBestellung");
    });
}

//Methoden zum Ergänzen der optionalen Attribute

//TODO: (Getter), für jedes optionale Attribut jedes Schemas eine MEthode zum Updaten des Datensatzes

function addWunschmengeToLieferantenBestellung (id, wunschmenge){
    //mittels Getter Objekt aus der Datenbank holen + Atribute ergänzen

}

function createBeschaffungsBestandswert(spielID,periode,inSummeschwarz,inSummeweiss,
                                       inSummerot,vorSummeschwarz,vorSummeweiss,vorSummerot) {
    var data = new beschaffungsBestandswert({spielID:spielID,periode:periode,
        inSummeschwarz:inSummeschwarz,inSummeweiss:inSummeweiss,inSummerot:inSummerot,
        vorSummeschwarz:vorSummeschwarz,vorSummeweiss: vorSummeweiss,vorSummerot:vorSummerot});
    data.save(function (err) {
        if (err) throw err;
        console.log("Saved: beschaffungsBestandswert");
    });
}

//Methoden zum Ergänzen der optionalen Attribute



function createBeschaffungsBestelluebersicht(spielID,periode,takt,artikel,bestellnr,
                                        menge,plantakt,isttakt) {
    var data = new beschaffungBestelluebersicht({spielID:spielID,periode:periode,
        takt:takt,artikel:artikel,bestellnr:bestellnr,
        menge:menge,plantakt:plantakt,isttakt:isttakt});
    data.save(function (err) {
        if (err) throw err;
        console.log("Saved: beschaffungsBestelluebersicht");
    });
}

function createBeschaffungsBestelluebersicht(spielID,periode,takt,artikel,bestellnr,
                                             menge,plantakt,isttakt) {
    var data = new beschaffungBestelluebersicht({spielID:spielID,periode:periode,
        takt:takt,artikel:artikel,bestellnr:bestellnr,
        menge:menge,plantakt:plantakt,isttakt:isttakt});
    data.save(function (err) {
        if (err) throw err;
        console.log("Saved: beschaffungsBestelluebersicht");
    });
}

function createBeschaffungsKPI(spielID,periode) {
    var data = new beschaffungKPI({spielID:spielID,periode:periode});
    data.save(function (err) {
        if (err) throw err;
        console.log("Saved: BeschaffungsKPI");
    });
}

function createBeschaffungsUebersicht(spielID,periode,summebestSchwarz,summebestWeiss,summebestRot) {
    var data = new beschaffungsUebersicht({spielID:spielID,periode:periode,
        summebestSchwarz:summebestSchwarz,summebestWeiss:summebestWeiss,summebestRot:summebestRot});
    data.save(function (err) {
        if (err) throw err;
        console.log("Saved: Beschaffungsuebersicht");
    });
}

function createLagerbestandEingangspruefung(spielID,periode,takt,artikel,bestand) {
    var data = new lagerbestandEingangspruefung({spielID:spielID,periode:periode,
        takt:takt,artikel:artikel,bestand:bestand});
    data.save(function (err) {
        if (err) throw err;
        console.log("Saved: Lagerbestand Eingangsprüfung");
    });
}

function createLagerbestandVorEingangspruefung(spielID,periode,takt,artikel,bestand) {
    var data = new lagerbestandvorEingangspruefung({spielID:spielID,periode:periode,
        takt:takt,artikel:artikel,bestand:bestand});
    data.save(function (err) {
        if (err) throw err;
        console.log("Saved: Lagerbestand Vor Eingangsprüfung");
    });
}

function createVorfertigungFertigungsplan(spielID,periode,takt,artikel,sollmenge) {
    var data = new vorfertigungFertigungsplan({spielID:spielID,periode:periode,
        takt:takt,artikel:artikel,sollmenge:sollmenge});
    data.save(function (err) {
        if (err) throw err;
        console.log("Saved: Vorfertigung Fertigungsplan");
    });
}

function createVorfertigungsKPI(spielID,periode) {
    var data = new vorfertigungKPI({spielID:spielID,periode:periode});
    data.save(function (err) {
        if (err) throw err;
        console.log("Saved: Vorfertigungs KPI");
    });
}

function createVorfertigungLagerbestand(spielID,periode,takt,artikel,anzahl) {
    var data = new vorfertigungLagerbestand({spielID:spielID,periode:periode,
        takt:takt,artikel:artikel,anzahl:anzahl});
    data.save(function (err) {
        if (err) throw err;
        console.log("Saved: Vorfertigung Lagerbestand");
    });
}


function createVorfertigungLagersumme(spielID,periode,artikel,bestand, zugang) {
    var data = new vorfertigungLagersumme({spielID:spielID,periode:periode,
        artikel:artikel,bestand:bestand,zugang:zugang});
    data.save(function (err) {
        if (err) throw err;
        console.log("Saved: Vorfertigung Lagersumme");
    });
}

function createVorfertigungLagerzugang(spielID,periode,takt,artikel,anzahl) {
    var data = new vorfertigungLagerzugang({spielID:spielID,periode:periode,
        takt:takt,artikel:artikel,anzahl:anzahl});
    data.save(function (err) {
        if (err) throw err;
        console.log("Saved: Vorfertigung Lagerzugang");
    });
}

function createVorfertigungLosesumme(spielID,periode,artikel,summe) {
    var data = new vorfertigungLosesumme({spielID:spielID,periode:periode,
        artikel:artikel,summe:summe});
    data.save(function (err) {
        if (err) throw err;
        console.log("Saved: Vorfertigung Losesumme");
    });
}



//Getter um jedes Dokument anhand (Kombinatio) eindeutiger bekannter Attribute aus DB zu holen
// TODO: Kombinationen überlegen, Getter schreiben




module.exports = {
    createLieferantenBestellung: createLieferantenBestellung,
    createBeschaffungsBestandswert: createBeschaffungsBestandswert,
    createBeschaffungsBestelluebersicht:createBeschaffungsBestelluebersicht,
    createBeschaffungsKPI:createBeschaffungsKPI,
    createBeschaffungsUebersicht:createBeschaffungsUebersicht,
    createLagerbestandEingangspruefung:createLagerbestandEingangspruefung,
    createLagerbestandVorEingangspruefung:createLagerbestandVorEingangspruefung,
    createVorfertigungFertigungsplan:createVorfertigungFertigungsplan,
    createVorfertigungLagerbestand:createVorfertigungLagerbestand,
    createVorfertigungLagersumme:createVorfertigungLagersumme,
    createVorfertigungLosesumme:createVorfertigungLosesumme,
    createVorfertigungsKPI:createVorfertigungsKPI
}
