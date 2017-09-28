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
var spielstand = require("../models/spielstand");
var interneBestellung = require("../models/interneBestellung");
var kundeBestellung= require("../models/kundeBestellung");
var kundeLieferverzugskosten = require("../models/kundeLieferverzugskosten");
var dateformat = require('dateformat');

//schreibt Datensatz mit allen obligatorischen Attributen in DB
function createLieferantenBestellung(spielID, nr, ausstellungstakt, artikel, wunschtakt, wunschmenge,callback) {
    var data = new lieferantenBestellung({spielID:spielID,
        nr:nr, austellungstakt:ausstellungstakt, artikel:artikel, wunschtakt:wunschtakt,
        wunschmenge:wunschmenge});
    data.save(function (err,data) {
        if (err) throw err;
        return callback(data);
    });
}

function createKundeBestellung(spielID, nr, ausstellungstakt, artikel, wunschtakt, wunschmenge,callback) {
    var data = new kundeBestellung({spielID:spielID,
        nr:nr, austellungstakt:ausstellungstakt, artikel:artikel, wunschtakt:wunschtakt,
        wunschmenge:wunschmenge});
    data.save(function (err,data) {
        if (err) throw err;
        return callback(data);
    });
}

function createInterneBestellung(spielID, nr, ausstellungstakt, artikel, wunschtakt, wunschmenge,callback) {
    var data = new interneBestellung({spielID:spielID,
        nr:nr, austellungstakt:ausstellungstakt, artikel:artikel, wunschtakt:wunschtakt,
        wunschmenge:wunschmenge});
    data.save(function (err,data) {
        if (err) throw err;
        return callback(data);
    });
}



function createBeschaffungsBestandswert(spielID,periode,inSummeschwarz,inSummeweiss,
                                       inSummerot,vorSummeschwarz,vorSummeweiss,vorSummerot,callback) {
    var data = new beschaffungsBestandswert({spielID:spielID,periode:periode,
        inSummeschwarz:inSummeschwarz,inSummeweiss:inSummeweiss,inSummerot:inSummerot,
        vorSummeschwarz:vorSummeschwarz,vorSummeweiss: vorSummeweiss,vorSummerot:vorSummerot});
    data.save(function (err,data) {
        if (err) throw err;
         return callback (data);
    });
}

//Methoden zum Ergänzen der optionalen Attribute


function createBeschaffungsBestelluebersicht(spielID,periode,takt,artikel,bestellnr,
                                             menge,plantakt,callback) {
    var data = new beschaffungBestelluebersicht({spielID:spielID,periode:periode,
        takt:takt,artikel:artikel,bestellnr:bestellnr,
        menge:menge,plantakt:plantakt});
    data.save(function (err,data) {
        if (err) throw err;
        return callback(data);
    });
}

function createBeschaffungsKPI(spielID,periode,callback) {
    var data = new beschaffungKPI({spielID:spielID,periode:periode});
    data.save(function (err,data) {
        if (err) throw err;
        return callback(data);
    });
}

function createBeschaffungsUebersicht(spielID,periode,summebestSchwarz,summebestWeiss,summebestRot,callback) {
    var data = new beschaffungsUebersicht({spielID:spielID,periode:periode,
        summebestSchwarz:summebestSchwarz,summebestWeiss:summebestWeiss,summebestRot:summebestRot});
    data.save(function (err,data) {
        if (err) throw err;
        return callback(data);
    });
}

function createLagerbestandEingangspruefung(spielID,periode,takt,schwarz, weiss, rot, callback) {
    var data = new lagerbestandEingangspruefung({spielID:spielID,periode:periode,
        takt:takt, schwarz: schwarz, weiss: weiss, rot:rot});
    data.save(function (err,data) {
        if (err) throw err;
        return callback(data);
    });
}

function createLagerbestandVorEingangspruefung(spielID,periode,takt,schwarz, weiss, rot, callback) {
    var data = new lagerbestandvorEingangspruefung({spielID:spielID,periode:periode,
        takt:takt, schwarz: schwarz, weiss: weiss, rot: rot});
    data.save(function (err,data) {
        if (err) throw err;
        return callback(data);
    });
}

function createVorfertigungFertigungsplan(spielID,periode,takt,artikel,sollmenge,callback) {
    var data = new vorfertigungFertigungsplan({spielID:spielID,periode:periode,
        takt:takt,artikel:artikel,sollmenge:sollmenge});
    data.save(function (err,data) {
        if (err) throw err;
        return callback(data);
    });
}

function createVorfertigungsKPI(spielID,periode,callback) {
    var data = new vorfertigungKPI({spielID:spielID,periode:periode});
    data.save(function (err,data) {
        if (err) throw err;
        return callback(data);
    });
}

function createVorfertigungLagerbestand(spielID,periode,takt,schwarz,weiss,callback) {
    var data = new vorfertigungLagerbestand({spielID:spielID,periode:periode,
        takt:takt,schwarz:schwarz,weiss:weiss});
    data.save(function (err,data) {
        if (err) throw err;
        return callback(data);
    });
}


function createVorfertigungLagersumme(spielID,periode,bestandschwarz,zugangschwarz, bestandweiss,
                                      zugangweiss,callback) {
    var data = new vorfertigungLagersumme({spielID:spielID,periode:periode,
        bestandschwarz:bestandschwarz,zugangschwarz:zugangschwarz,bestandweiss:bestandweiss, zugangweiss:zugangweiss});
    data.save(function (err,data) {
        if (err) throw err;
        return callback(data);
    });
}

function createVorfertigungLagerzugang(spielID,periode,takt,schwarz,weiss,callback) {
    var data = new vorfertigungLagerzugang({spielID:spielID,periode:periode,
        takt:takt,schwarz:schwarz,weiss:weiss});
    data.save(function (err,data) {
        if (err) throw err;
        return callback(data);
    });
}

function createVorfertigungLosesumme(spielID,periode,artikel,summe,callback) {
    var data = new vorfertigungLosesumme({spielID:spielID,periode:periode,
        artikel:artikel,summe:summe});
    data.save(function (err,data) {
        if (err) throw err;
        return callback(data);
    });
}

function createEndmontageFertigungsplan(spielID,periode,takt,artikel,sollmenge,callback) {
    var data = new endmontageFertigungsplan({spielID:spielID,periode:periode,
        takt:takt,artikel:artikel,sollmenge:sollmenge});
    data.save(function (err,data) {
        if (err) throw err;
        return callback(data);
    });
}

function createEndmontageKPI(spielID,periode,callback) {
    var data = new endmontageKPI({spielID:spielID,periode:periode});
    data.save(function (err,data) {
        if (err) throw err;
        return callback(data);
    });
}

function createEndmontageLagerbestand(spielID,periode,takt, schwarz, weiss, rot,callback) {
    var data = new endmontageLagerbestand({spielID:spielID,periode:periode,
        takt:takt, schwarz:schwarz,weiss:weiss, rot:rot});
    data.save(function (err,data) {
        if (err) throw err;
        return callback(data);
    });
}

function createEndmontageLagersumme(spielID,periode,bestandschwarz, bestandweiss,bestandrot,
                                    zugangschwarz, zugangweiss, zugangrot,callback) {
    var data = new endmontageLagersumme({spielID:spielID,periode:periode,
        bestandschwarz:bestandschwarz,bestandweiss:bestandweiss, bestandrot:bestandrot,
        zugangschwarz:zugangschwarz,zugangweiss:zugangweiss,zugangrot:zugangrot});
    data.save(function (err,data) {
        if (err) throw err;
        return callback(data);
    });
}

function createEndmontageLagerzugang(spielID,periode,takt,schwarz, weiss, rot,callback) {
    var data = new endmontageLagerzugang({spielID:spielID,periode:periode,
        takt:takt,schwarz:schwarz, weiss:weiss, rot:rot});
    data.save(function (err,data) {
        if (err) throw err;
        return callback(data);
    });
}

function createEndmontageLosesumme(spielID,periode,artikel,summe,callback) {
    var data = new endmontageLosesumme({spielID:spielID,periode:periode,
        artikel:artikel,summe:summe});
    data.save(function (err,data) {
        if (err) throw err;
        return callback(data);
    });
}

function createDistributionAuftragsbearbeitung(spielID,periode,takt,anzauftraege,callback) {
    var data = new distributionAuftragsbearbeitung({spielID:spielID,periode:periode,
        takt:takt,anzauftraege:anzauftraege});
    data.save(function (err,data) {
        if (err) throw err;
        return callback(data);
    });
}

function createDistributionKPI(spielID,periode,callback) {
    var data = new distributionKPI({spielID:spielID,periode:periode});
    data.save(function (err,data) {
        if (err) throw err;
        return callback(data);
    });
}

function createDistributionLagerbestand(spielID,periode,takt,schwarz,weiss,callback) {
    var data = new distributionLagerbestand({spielID:spielID,periode:periode,
        takt:takt,schwarz: schwarz, weiss: weiss});
    data.save(function (err,data) {
        if (err) throw err;
        return callback(data);
    });
}

function createDistributionSummen(spielID,periode,bestandschwarz, bestandweiss,
                                    zugangschwarz, zugangweiss, callback) {
    var data = new distributionSummen({spielID:spielID,periode:periode,
        bestandschwarz:bestandschwarz,bestandweiss:bestandweiss, zugangschwarz:zugangschwarz,
        zugangweiss:zugangweiss});
    data.save(function (err,data) {
        if (err) throw err;
        return callback(data);
    });
}

function createDistributionLagerzugang(spielID,periode,takt,schwarz,weiss,callback) {
    var data = new distributionLagerzugang({spielID:spielID,periode:periode,
        takt:takt,schwarz:schwarz, weiss: weiss});
    data.save(function (err,data) {
        if (err) throw err;
        return callback(data);
    });
}

function createKundeAuftragsuebersicht(spielID,periode,bestellnr,artikel,menge,wunschtermin,callback) {
    var data = new kundeAuftragsuebersicht({spielID:spielID,periode:periode,
        bestellnr:bestellnr,artikel:artikel,menge:menge,wunschtermin:wunschtermin});
    data.save(function (err,data) {
        if (err) throw err;
        return callback(data);
    });
}

function createKundeKPI(spielID,periode, umsatz, lieferverzugskosten, transportkosten,
                        lieferfaehigkeit, liefertreue, callback) {
    var data = new kundeKPI({spielID:spielID,periode:periode, umsatz:umsatz, transportkosten:transportkosten, lieferfaehigkeit:lieferfaehigkeit, liefertreue:liefertreue});
    data.save(function (err,data) {
        if (err) throw err;
        return callback(data);
    });
}

function createKundeUmsatz(spielID,periode,takt, callback) {
    var data = new kundeUmsatz({spielID:spielID,periode:periode,
        takt:takt});
    data.save(function (err,data) {
        if (err) throw err;
        return callback(data);
    });
}

function createLieferabwicklungBestelluebersicht(spielID,periode,bestellnr,menge,callback) {
    var data = new lieferabwicklungBestelluebersicht({spielID:spielID,periode:periode,bestellnr:bestellnr,menge:menge});
    data.save(function (err,data) {
        if (err) throw err;
        return callback(data);
    });
}

function createLieferabwicklungKPI(spielID,periode,callback) {
    var data = new lieferabwicklungKPI({spielID:spielID,periode:periode});
    data.save(function (err,data) {
        if (err) throw err;
        return callback(data);
    });
}

function createLieferabwicklungLagerbestand(spielID,periode,takt, schwarz, weiss,callback) {
    var data = new lieferabwicklungLagerbestand({spielID:spielID,periode:periode,
        takt:takt,schwarz: schwarz, weiss: weiss});
    data.save(function (err,data) {
        if (err) throw err;
        return callback(data);
    });
}

function createLieferabwicklungLagerzugang(spielID,periode,takt,schwarz, weiss,callback) {
    var data = new lieferabwicklungLagerzugang({spielID:spielID,periode:periode,
        takt:takt, schwarz: schwarz, weiss: weiss});
    data.save(function (err,data) {
        if (err) throw err;
        return callback(data);
    });
}

function createLieferabwicklungSummen(spielID,periode,bestellungen,bestandschwarz, bestandweiss,
                                  zugangschwarz, zugangweiss,callback) {
    var data = new lieferabwicklungSummen({spielID:spielID,periode:periode,bestellungen:bestellungen,
        bestandschwarz:bestandschwarz,bestandweiss:bestandweiss, zugangschwarz:zugangschwarz,
        zugangweiss:zugangweiss});
    data.save(function (err,data) {
        if (err) throw err;
        return callback(data);
    });
}

function createOrderManagement(spielID,periode,takt,artikel,callback) {
    var data = new orderManagement({spielID:spielID,periode:periode,
        takt:takt,artikel:artikel});
    data.save(function (err,data) {
        if (err) throw err;
        return callback(data);
    });
}


function createSpielstand(spielID,name,callback) {
    var currentDate = new Date();
    var datum = dateformat(currentDate, "dd.mm.yyyy");
    var data = new spielstand({spielID:spielID, periode:1, takt:1, datum:datum, name:name});
    data.save(function (err,data) {
        if (err) throw err;
        return callback(data);
    });
}

function createKundeLieferverzugskosten(spielID,periode,takt,callback) {
    var data = new kundeLieferverzugskosten({spielID:spielID,periode:periode,
        takt: takt});
    data.save(function (err,data) {
        if (err) throw err;
        return callback(data);
    });
}

//interne Bestellung Kundenbestellung fehlt noch

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
    createVorfertigungLagerzugang:createVorfertigungLagerzugang,
    createVorfertigungsKPI:createVorfertigungsKPI,
    createEndmontageFertigungsplan:createEndmontageFertigungsplan,
    createEndmontageKPI:createEndmontageKPI,
    createEndmontageLagerbestand:createEndmontageLagerbestand,
    createEndmontageLagersumme:createEndmontageLagersumme,
    createEndmontageLagerzugang:createEndmontageLagerzugang,
    createEndmontageLosesumme:createEndmontageLosesumme,
    createDistributionAuftragsbearbeitung:createDistributionAuftragsbearbeitung,
    createDistributionKPI:createDistributionKPI,
    createDistributionLagerbestand:createDistributionLagerbestand,
    createDistributionLagerzugang:createDistributionLagerzugang,
    createDistributionSummen:createDistributionSummen,
    createKundeAuftragsuebersicht:createKundeAuftragsuebersicht,
    createKundeKPI:createKundeKPI,
    createKundeUmsatz:createKundeUmsatz,
    createLieferabwicklungBestelluebersicht:createLieferabwicklungBestelluebersicht,
    createLieferabwicklungKPI:createLieferabwicklungKPI,
    createLieferabwicklungLagerbestand:createLieferabwicklungLagerbestand,
    createLieferabwicklungLagerzugang:createLieferabwicklungLagerzugang,
    createLieferabwicklungSummen:createLieferabwicklungSummen,
    createOrderManagement:createOrderManagement,
    createSpielstand:createSpielstand
    }
