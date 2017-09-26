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

//schreibt Datensatz mit allen obligatorischen Attributen in DB
function createLieferantenBestellung(spielID, nr, ausstellungstakt, artikel, wunschtakt, wunschmenge) {
    var data = new lieferantenBestellung({spielID:spielID,
        nr:nr, austellungstakt:ausstellungstakt, artikel:artikel, wunschtakt:wunschtakt,
        wunschmenge:wunschmenge});
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
                                             menge,plantakt) {
    var data = new beschaffungBestelluebersicht({spielID:spielID,periode:periode,
        takt:takt,artikel:artikel,bestellnr:bestellnr,
        menge:menge,plantakt:plantakt});
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


function createVorfertigungLagersumme(spielID,periode,bestandschwarz,zugangschwarz, bestandweiss, zugangweiss) {
    var data = new vorfertigungLagersumme({spielID:spielID,periode:periode,
        bestandschwarz:bestandschwarz,zugangschwarz:zugangschwarz,bestandweiss:bestandweiss, zugangweiss:zugangweiss});
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

function createEndmontageFertigungsplan(spielID,periode,takt,artikel,sollmenge) {
    var data = new endmontageFertigungsplan({spielID:spielID,periode:periode,
        takt:takt,artikel:artikel,sollmenge:sollmenge});
    data.save(function (err) {
        if (err) throw err;
        console.log("Saved: Endmontage Fertigungsplan");
    });
}

function createEndmontageKPI(spielID,periode) {
    var data = new endmontageKPI({spielID:spielID,periode:periode});
    data.save(function (err) {
        if (err) throw err;
        console.log("Saved: Endmontage KPI");
    });
}

function createEndmontageLagerbestand(spielID,periode,takt,artikel,anzahl) {
    var data = new endmontageLagerbestand({spielID:spielID,periode:periode,
        takt:takt,artikel:artikel,anzahl:anzahl});
    data.save(function (err) {
        if (err) throw err;
        console.log("Saved: Endmontage Lagerbestand");
    });
}

function createEndmontageLagersumme(spielID,periode,bestandschwarz, bestandweiss,bestandrot,
                                    zugangschwarz, zugangweiss, zugangrot) {
    var data = new endmontageLagersumme({spielID:spielID,periode:periode,
        bestandschwarz:bestandschwarz,bestandweiss:bestandweiss, bestandrot:bestandrot,
        zugangschwarz:zugangschwarz,zugangweiss:zugangweiss,zugangrot:zugangrot});
    data.save(function (err) {
        if (err) throw err;
        console.log("Saved: Endmontage Lagersumme");
    });
}

function createEndmontageLagerzugang(spielID,periode,takt,artikel,zugang) {
    var data = new endmontageLagerzugang({spielID:spielID,periode:periode,
        takt:takt,artikel:artikel,zugang:zugang});
    data.save(function (err) {
        if (err) throw err;
        console.log("Saved: Endmontage Lagerzugang");
    });
}

function createEndmontageLosesumme(spielID,periode,artikel,summe) {
    var data = new endmontageLosesumme({spielID:spielID,periode:periode,
        artikel:artikel,summe:summe});
    data.save(function (err) {
        if (err) throw err;
        console.log("Saved: Endmontage Losesumme");
    });
}

function createDistributionAuftragsbearbeitung(spielID,periode,takt,anzauftraege) {
    var data = new distributionAuftragsbearbeitung({spielID:spielID,periode:periode,
        takt:takt,anzauftraege:anzauftraege});
    data.save(function (err) {
        if (err) throw err;
        console.log("Saved: Distrubition Auftragsbearbeitung");
    });
}

function createDistributionKPI(spielID,periode) {
    var data = new distributionKPI({spielID:spielID,periode:periode});
    data.save(function (err) {
        if (err) throw err;
        console.log("Saved: Distribution KPI");
    });
}

function createDistributionLagerbestand(spielID,periode,takt,artikel,anzahl) {
    var data = new distributionLagerbestand({spielID:spielID,periode:periode,
        takt:takt,artikel:artikel,anzahl:anzahl});
    data.save(function (err) {
        if (err) throw err;
        console.log("Saved: Distribution Lagerbestand");
    });
}

function createDistributionSummen(spielID,periode,bestandschwarz, bestandweiss,
                                    zugangschwarz, zugangweiss, anzauftraege) {
    var data = new distributionSummen({spielID:spielID,periode:periode,
        bestandschwarz:bestandschwarz,bestandweiss:bestandweiss, zugangschwarz:zugangschwarz,
        zugangweiss:zugangweiss, anzauftraege:anzauftraege});
    data.save(function (err) {
        if (err) throw err;
        console.log("Saved: Distribution Summen");
    });
}

function createDistributionLagerzugang(spielID,periode,takt,artikel,zugang) {
    var data = new distributionLagerzugang({spielID:spielID,periode:periode,
        takt:takt,artikel:artikel,zugang:zugang});
    data.save(function (err) {
        if (err) throw err;
        console.log("Saved: Distribution Lagerzugang");
    });
}

function createKundeAuftragsuebersicht(spielID,periode,bestellnr,artikel,menge,wunschtermin,
                                       bestaetigertermin,erhalttermin) {
    var data = new kundeAuftragsuebersicht({spielID:spielID,periode:periode,bestellnr:bestellnr,artikel:artikel,menge:menge,wunschtermin:wunschtermin,
        bestaetigtertermin:bestaetigertermin,erhalttermin:erhalttermin});
    data.save(function (err) {
        if (err) throw err;
        console.log("Saved: Kunde Auftragsuebersicht");
    });
}

function createKundeKPI(spielID,periode, umsatz, lieferverzugskosten, transportkosten, lieferfaehigkeit, liefertreue) {
    var data = new kundeKPI({spielID:spielID,periode:periode, umsatz:umsatz, transportkosten:transportkosten, lieferfaehigkeit:lieferfaehigkeit, liefertreue:liefertreue});
    data.save(function (err) {
        if (err) throw err;
        console.log("Saved: Kunde KPI");
    });
}

function createKundeUmsatz(spielID,periode,takt,artikel) {
    var data = new kundeUmsatz({spielID:spielID,periode:periode,
        takt:takt,artikel:artikel});
    data.save(function (err) {
        if (err) throw err;
        console.log("Saved: Kunde Umsatz");
    });
}

function createLieferabwicklungBestelluebersicht(spielID,periode,bestellnr,menge) {
    var data = new lieferabwicklungBestelluebersicht({spielID:spielID,periode:periode,bestellnr:bestellnr,menge:menge});
    data.save(function (err) {
        if (err) throw err;
        console.log("Saved: Lieferabwicklung Bestellübersicht");
    });
}

function createLieferabwicklungKPI(spielID,periode) {
    var data = new lieferabwicklungKPI({spielID:spielID,periode:periode});
    data.save(function (err) {
        if (err) throw err;
        console.log("Saved: Lieferabwicklung KPI");
    });
}

function createLieferabwicklungLagerbestand(spielID,periode,takt,artikel,anzahl) {
    var data = new lieferabwicklungLagerbestand({spielID:spielID,periode:periode,
        takt:takt,artikel:artikel,anzahl:anzahl});
    data.save(function (err) {
        if (err) throw err;
        console.log("Saved: Lieferabwicklung Lagerbestand");
    });
}

function createLieferabwicklungLagerzugang(spielID,periode,takt,artikel,zugang) {
    var data = new lieferabwicklungLagerzugang({spielID:spielID,periode:periode,
        takt:takt,artikel:artikel,zugang:zugang});
    data.save(function (err) {
        if (err) throw err;
        console.log("Saved: Lieferabwicklung Lagerzugang");
    });
}

function createLieferabwicklungSummen(spielID,periode,bestellungen,bestandschwarz, bestandweiss,
                                  zugangschwarz, zugangweiss) {
    var data = new lieferabwicklungSummen({spielID:spielID,periode:periode,bestellungen:bestellungen,
        bestandschwarz:bestandschwarz,bestandweiss:bestandweiss, zugangschwarz:zugangschwarz,
        zugangweiss:zugangweiss});
    data.save(function (err) {
        if (err) throw err;
        console.log("Saved: Lieferabwicklung Summen");
    });
}

function createOrderManagement(spielID,periode,takt,artikel) {
    var data = new orderManagement({spielID:spielID,periode:periode,
        takt:takt,artikel:artikel});
    data.save(function (err) {
        if (err) throw err;
        console.log("Saved: Order Management");
    });
}

//Getter um jedes Dokument anhand (Kombinatio) eindeutiger bekannter Attribute aus DB zu holen
// TODO: Kombinationen überlegen, Getter schreiben


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
    createOrderManagement:createOrderManagement
    }
