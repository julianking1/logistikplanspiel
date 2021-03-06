//alle Schemas importieren
var lieferantenBestellung = require ("../models/lieferantenBestellung.js");
var beschaffungBestandswert = require("../models/beschaffungBestandswert");
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
var kundeBestellung= require("../models/kundeBestellung");
var kundeLieferverzugskosten = require("../models/kundeLieferverzugskosten");
var lieferabwicklungBestelluebersicht= require("../models/lieferabwicklungBestelluebersicht");
var lieferabwicklungKPI= require("../models/lieferabwicklungKPI");
var lieferabwicklungLagerbestand= require("../models/lieferabwicklungLagerbestand");
var lieferabwicklungLagerzugang= require("../models/lieferabwicklungLagerzugang");
var lieferabwicklungSummen= require("../models/lieferabwicklungSummen");
var orderManagement= require("../models/orderManagement");
var spielstand = require("../models/spielstand");
var interneBestellung = require("../models/interneBestellung");


function getallbeschaffungBestandswert(callback) {
    beschaffungBestandswert.find({}, function (err, data) {
        if (err) return handleError(err);
        return callback(data);
    });
}

function getallbeschaffungBestelluebersicht(callback){
    var test = [];
    beschaffungBestelluebersicht.find({'artikel': 'schwarz'}, function (err, data) {
        if (err) return handleError(err);
        test.push(data);

        return beschaffungBestelluebersicht.find({'artikel': 'weiß'}, function (err, data) {
                if (err) return handleError(err);
                test.push(data);

                 return beschaffungBestelluebersicht.find({'artikel': 'rot'}, function (err, data) {
                    if (err) return handleError(err);
                    test.push(data);
                    return callback(test);
                })

            }
        );

    });
}

function getallbeschaffungKPI(callback){
    beschaffungKPI.find({}, function (err, data){
        if (err) return handleError(err);
        return callback(data);
    });
}

function getallbeschaffungsUebersicht(callback){
    beschaffungsUebersicht.find({}, function (err, data){
        if(err) return handleError(err);
        return callback(data);
        });
}

function getalldistributionAuftragsbearbeitung(callback){
    distributionAuftragsbearbeitung.find({}, function (err, data) {
        if (err) return handleError(err);
        return callback(data);
    });
}

function getalldistributionKPI(callback){
    distributionKPI.find({}, function (err, data) {
        if (err) return handleError(err);
        return callback(data);
    });
}

function getalldistributionLagerbestand(callback){
    distributionLagerbestand.find({}, function (err, data) {
        if (err) return handleError(err);
        return callback(data);
    });
}

function getalldistributionLagerzugang(callback){
    distributionLagerzugang.find({}, function (err, data) {
        if (err) return handleError(err);
        return callback(data);
    });
}

function getalldistributionSummen(callback){
    distributionSummen.find({}, function (err, data) {
        if (err) return handleError(err);
        return callback(data);
    });
}

function getallendmontageFertigungsplan(callback){
    var test = [];
    return endmontageFertigungsplan.find({'artikel': 'schwarz'}, function (err, data) {
        if (err) return handleError(err);
        test.push(data);

        return endmontageFertigungsplan.find({'artikel': 'weiß'}, function (err, data) {
                if (err) return handleError(err);
                test.push(data);

                return callback(test);
            }
        );
    });
}

function getallendmontageKPI(callback){
    endmontageKPI.find({}, function (err, data) {
        if (err) return handleError(err);
        return callback(data);
    });
}

function getallendmontageLagerbestand(callback){
    endmontageLagerbestand.find({}, function (err, data) {
        if (err) return handleError(err);
        return callback(data);
    });
}

function getallendmontageLagersumme(callback){
    endmontageLagersumme.find({}, function (err, data) {
        if (err) return handleError(err);
        return callback(data);
    });
}

function getallendmontageLagerzugang(callback){
    endmontageLagerzugang.find({}, function (err, data) {
        if (err) return handleError(err);
        return callback(data);
    });
}

function getallendmontageLosesumme(callback){
    endmontageLosesumme.find({}, function (err, data) {
        if (err) return handleError(err);
        return callback(data);
    });
}

function getallkundeAuftragsuebersicht(callback){
    kundeAuftragsuebersicht.find({}, function (err, data) {
        if (err) return handleError(err);
        return callback(data);
    });

}

function getallkundeKPI(callback){
    kundeKPI.find({}, function (err, data) {
        if (err) return handleError(err);
        return callback(data);
    });
}

function getallkundeUmsatz(callback){
    kundeUmsatz.find({}, function (err, data) {
        if (err) return handleError(err);
        return callback(data);
    });
}

function getalllagerbestandEingangspruefung(callback){
    lagerbestandEingangspruefung.find({}, function (err, data) {
        if (err) return handleError(err);
        return callback(data);
    });
}

function getalllagerbestandvorEingangspruefung(callback){
    lagerbestandvorEingangspruefung.find({}, function (err, data) {
        if (err) return handleError(err);
        return callback(data);
    });
}

function getalllieferabwicklungBestelluebersicht(callback){
    lieferabwicklungBestelluebersicht.find({}, function (err, data) {
        if (err) return handleError(err);
        return callback(data);
    });
}

function getalllieferabwicklungKPI(callback){
    lieferabwicklungKPI.find({}, function (err, data) {
        if (err) return handleError(err);
        return callback(data);
    });
}

function getalllieferabwicklungLagerbestand(callback){
    lieferabwicklungLagerbestand.find({}, function (err, data) {
        if (err) return handleError(err);
        return callback(data);
    });
}

function getalllieferabwicklungLagerzugang(callback){
    lieferabwicklungLagerzugang.find({}, function (err, data) {
        if (err) return handleError(err);
        return callback(data);
    });
}

function getalllieferabwicklungSummen(callback){
    lieferabwicklungSummen.find({}, function (err, data) {
        if (err) return handleError(err);
        return callback(data);
    });
}

function getalllieferantenBestellung(callback){
    lieferantenBestellung.find({}, function (err, data) {
        if (err) return handleError(err);
        return callback(data);
    });
}

function getallkundeBestellung(callback){
    kundeBestellung.find({}, function (err, data) {
        if (err) return handleError(err);
        return callback(data);
    });
}

function getallkundeLieferverzugskosten(callback){
    kundeLieferverzugskosten.find({}, function (err, data) {
        if (err) return handleError(err);
        return callback(data);
    });
}

function getallinterneBestellung(callback){
    interneBestellung.find({}, function (err, data) {
        if (err) return handleError(err);
        return callback(data);
    });
}

function getallorderManagement(callback){
    var test = [];
    orderManagement.find({'artikel': 'schwarz'}, function (err, data) {
        if (err) return handleError(err);
        test.push(data);

        return orderManagement.find({'artikel': 'weiß'}, function (err, data) {
                if (err) return handleError(err);
                test.push(data);

                return callback(test);
            }
        );

    });
}

function getallvorfertigungFertigungsplan(callback){
    var test = [];
    return vorfertigungFertigungsplan.find({'artikel': 'schwarz'}, function (err, data) {
        if (err) return handleError(err);
        test.push(data);

        return vorfertigungFertigungsplan.find({'artikel': 'weiß'}, function (err, data) {
                if (err) return handleError(err);
                test.push(data);

                return callback(test);
            }
        );
    });
}

function getallvorfertigungKPI(callback){
    vorfertigungKPI.find({}, function (err, data) {
        if (err) return handleError(err);
        return callback(data);
    });
}

function getallvorfertigungLagerbestand(callback){
    vorfertigungLagerbestand.find({}, function (err, data) {
        if (err) return handleError(err);
        return callback(data);
    });
}

function getallvorfertigungLagersumme(callback){
    vorfertigungLagersumme.find({}, function (err, data) {
        if (err) return handleError(err);
        return callback(data);
    });
}

function getallvorfertigungLagerzugang(callback){
    vorfertigungLagerzugang.find({}, function (err, data) {
        if (err) return handleError(err);
        return callback(data);
    });
}

function getallvorfertigungLosesumme(callback){
    vorfertigungLosesumme.find({}, function (err, data) {
        if (err) return handleError(err);
        return callback(data);
    });
}

function getAllSpielstaende(callback) {
    spielstand.find({}, function (err,data) {
        if(err) return handleError(err);
        return callback(data);
    });
}

function getNeueSpielID(callback) {
    spielstand.find({},'spielID', function (err,data) {
        if(err) return handleError(err);
        var spielID=1;
        for (var i=0;i<data.length;i++){
            if (data[i].spielID > spielID){
                spielID = data[i].spielID;
            }
        }
        //um 1 erhöhen, da neue SpielID 1 größer sein muss
        spielID++;
        return callback(spielID);
    });
}

//Methoden, die einzelne Datensätze rückgeben

function getbeschaffungBestandswert(spielID, periode, callback) {
    beschaffungBestandswert.findOne({'spielID':spielID, 'periode': periode}, function (err, data) {
        if(err) return handleError (err);
        return callback(data);
    });

}

function getbeschaffungBestelluebersicht(spielID, periode, takt, artikel, callback) {
    beschaffungBestelluebersicht.findOne({'spielID':spielID, 'periode': periode, 'takt':takt, 'artikel': artikel}, function (err, data) {
        if(err) return handleError (err);
        return callback(data);
    });

}


function getbeschaffungKPI(spielID, periode, callback) {
    beschaffungKPI.findOne({'spielID':spielID, 'periode': periode}, function (err, data) {
        if(err) return handleError (err);
        return callback(data);
    });

}

function getbeschaffungsUebersicht(spielID, periode, callback) {
    beschaffungsUebersicht.findOne({'spielID':spielID, 'periode': periode}, function (err, data) {
        if(err) return handleError (err);
        return callback(data);
    });

}

function getdistributionAuftragsbearbeitung(spielID, periode, takt, callback) {
    distributionAuftragsbearbeitung.findOne({'spielID':spielID, 'periode': periode, 'takt':takt}, function (err, data) {
        if(err) return handleError (err);
        return callback(data);
    });

}

function getdistributionKPI(spielID, periode, callback){
    distributionKPI.findOne({'spielID': spielID, 'periode': periode}, function(err, data){
        if(err) return handleError (err);
        return callback(data);
    });
}

function getdistributionLagerbestand(spielID, periode, takt, callback){
    distributionLagerbestand.findOne({'spielID': spielID, 'periode': periode,'takt':takt}, function(err, data){
        if(err) return handleError (err);
        return callback(data);
    });
}

function getdistributionLagerzugang(spielID, periode, takt, callback){
    distributionLagerzugang.findOne({'spielID': spielID, 'periode': periode,'takt':takt}, function(err, data){
        if(err) return handleError (err);
        return callback(data);
    });
}

function getdistributionSummen(spielID, periode, callback){
    distributionSummen.findOne({'spielID': spielID, 'periode': periode}, function(err, data){
        if(err) return handleError (err);
        return callback(data);
    });
}

function getendmontageFertigungsplan(spielID, periode, takt, artikel, callback){
    endmontageFertigungsplan.findOne({'spielID': spielID, 'periode': periode, 'takt':takt, 'artikel':artikel}, function(err, data){
        if(err) return handleError (err);
        return callback(data);
    });
}

function getendmontageKPI(spielID, periode, callback){
    endmontageKPI.findOne({'spielID': spielID, 'periode': periode}, function(err, data){
        if(err) return handleError (err);
        return callback(data);
    });
}

function getendmontageLagerbestand(spielID, periode, takt, callback) {
    endmontageLagerbestand.findOne({'spielID':spielID, 'periode': periode, 'takt':takt}, function (err, data) {
        if(err) return handleError (err);
        return callback(data);
    });

}

function getendmontageLagersumme(spielID, periode, callback) {
    endmontageLagersumme.findOne({'spielID':spielID, 'periode': periode}, function (err, data) {
        if(err) return handleError (err);
        return callback(data);
    });

}

function getendmontageLagerzugang(spielID, periode, takt, callback) {
    endmontageLagerzugang.findOne({'spielID':spielID, 'periode': periode, 'takt':takt}, function (err, data) {
        if(err) return handleError (err);
        return callback(data);
    });

}

function getendmontageLosesumme(spielID, periode, artikel, callback) {
    endmontageLosesumme.findOne({'spielID':spielID, 'periode': periode, 'artikel': artikel}, function (err, data) {
        if(err) return handleError (err);
        return callback(data);
    });

}

function getkundeAuftragsuebersicht(spielID, periode, bestellnr, callback) {
    kundeAuftragsuebersicht.findOne({'spielID':spielID, 'periode': periode, 'bestellnr': bestellnr}, function (err, data) {
        if(err) return handleError (err);
        return callback(data);
    });
}

function getkundeKPI(spielID, periode, callback) {
    kundeKPI.findOne({'spielID':spielID, 'periode': periode}, function (err, data) {
        if(err) return handleError (err);
        return callback(data);
    });
}

function getkundeUmsatz(spielID, periode, takt, callback) {
    kundeUmsatz.findOne({'spielID':spielID, 'periode': periode, 'takt':takt}, function (err, data) {
        if(err) return handleError (err);
        return callback(data);
    });
}










// liefert den letzten Bestand aus der Eingangsprüfung zurück
function getlagerbestandEingangspruefung(spielID, periode, takt, callback) {
    lagerbestandEingangspruefung.findOne({'spielID':spielID, 'periode': periode, 'takt':takt}, function (err, data) {
        if(err) return handleError (err);
        return callback(data);
    });

    };

function getlagerbestandvorEingangspruefung(spielID, periode, takt, callback){
    lagerbestandvorEingangspruefung.findOne({'spielID': spielID, 'periode': periode, 'takt':takt}, function(err, data){
        if(err) return handleError (err);
        return callback(data);
    });
};

function getlieferabwicklungBestelluebersicht(spielID, periode, bestellnr, callback){
    lieferabwicklungBestelluebersicht.findOne({'spielID': spielID, 'periode': periode, 'bestellnr': bestellnr}, function(err, data){
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

function getlieferabwicklungLagerbestand(spielID, periode, takt, callback){
    lieferabwicklungLagerbestand.findOne({'spielID': spielID, 'periode': periode,'takt':takt}, function(err, data){
        if(err) return handleError (err);
        return callback(data);
    });
};

function getlieferabwicklungLagerzugang(spielID, periode, takt, callback){
    lieferabwicklungLagerzugang.findOne({'spielID': spielID, 'periode': periode,'takt':takt}, function(err, data){
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

function getvorfertigungLagerbestand(spielID, periode, takt, callback) {
    vorfertigungLagerbestand.findOne({'spielID': spielID, 'periode': periode, 'takt': takt}, function(err, data){
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

function getvorfertigungLagerzugang(spielID, periode, takt,callback) {
    vorfertigungLagerzugang.findOne({'spielID': spielID, 'periode': periode, 'takt': takt}, function(err, data){
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

function getSpielstand(spielID, callback) {
    spielstand.findOne({'spielID':spielID},function (err, data) {
        if (err) return handleError (err);
        return callback(data);
    });
}

function getSpielstand(name, datum, callback) {
    spielstand.findOne({'name':name, 'datum':datum},function (err,data) {
        if (err) return handleError (err);
        return callback(data);
    });
}

function getkundeBestellung(spielID, nr, callback) {
    kundeBestellung.findOne({'spielID': spielID, 'nr': nr}, function(err, data){
        if (err) return handleError (err);
        return callback(data);
    });
};

function getinterneBestellung(spielID, nr, callback) {
    interneBestellung.findOne({'spielID': spielID, 'nr': nr}, function(err, data){
        if (err) return handleError (err);
        return callback(data);
    });
};

function getkundeLieferverzugskosten(spielID, periode, takt, callback) {
    kundeLieferverzugskosten.findOne({'spielID': spielID, 'periode': periode, 'takt':takt}, function(err, data){
        if (err) return handleError (err);
        return callback(data);
    });
};

module.exports = {
    getallbeschaffungBestandswert:getallbeschaffungBestandswert,
    getallbeschaffungBestelluebersicht: getallbeschaffungBestelluebersicht,
    getallbeschaffungKPI: getallbeschaffungKPI,
    getallbeschaffungsUebersicht: getallbeschaffungsUebersicht,
    getalldistributionAuftragsbearbeitung:getalldistributionAuftragsbearbeitung,
    getalldistributionKPI:getalldistributionKPI,
    getalldistributionLagerbestand:getalldistributionLagerbestand,
    getalldistributionLagerzugang:getalldistributionLagerzugang,
    getalldistributionSummen:getalldistributionSummen,
    getallendmontageFertigungsplan:getallendmontageFertigungsplan,
    getallendmontageKPI:getallendmontageKPI,
    getallendmontageLagerbestand:getallendmontageLagerbestand,
    getallendmontageLagersumme:getallendmontageLagersumme,
    getallendmontageLagerzugang:getallendmontageLagerzugang,
    getallendmontageLosesumme:getallendmontageLosesumme,
    getallkundeAuftragsuebersicht:getallkundeAuftragsuebersicht,
    getallkundeKPI: getallkundeKPI,
    getallkundeUmsatz: getallkundeUmsatz,
    getalllagerbestandEingangspruefung: getalllagerbestandEingangspruefung,
    getalllagerbestandvorEingangspruefung: getalllagerbestandvorEingangspruefung,
    getalllieferabwicklungBestelluebersicht:getalllieferabwicklungBestelluebersicht,
    getalllieferabwicklungKPI:getalllieferabwicklungKPI,
    getalllieferabwicklungLagerbestand:getalllieferabwicklungLagerbestand,
    getalllieferabwicklungLagerzugang:getalllieferabwicklungLagerzugang,
    getalllieferabwicklungSummen:getalllieferabwicklungSummen,
    getalllieferantenBestellung:getalllieferantenBestellung,
    getallorderManagement:getallorderManagement,
    getallvorfertigungFertigungsplan:getallvorfertigungFertigungsplan,
    getallvorfertigungKPI:getallvorfertigungKPI,
    getallvorfertigungLagerbestand:getallvorfertigungLagerbestand,
    getallvorfertigungLagersumme:getallvorfertigungLagersumme,
    getallvorfertigungLagerzugang:getallvorfertigungLagerzugang,
    getallvorfertigungLosesumme:getallvorfertigungLosesumme,
    getAllSpielstaende:getAllSpielstaende,
    getallkundeBestellung:getallkundeBestellung,
    getallinterneBestellung:getallinterneBestellung,
    getallkundeLieferverzugskosten: getallkundeLieferverzugskosten,
    getNeueSpielID:getNeueSpielID,

    getdistributionAuftragsbearbeitung:getdistributionAuftragsbearbeitung,
    getdistributionKPI:getdistributionKPI,
    getdistributionLagerbestand:getdistributionLagerbestand,
    getdistributionLagerzugang:getdistributionLagerzugang,
    getdistributionSummen: getdistributionSummen,
    getendmontageFertigungsplan: getendmontageFertigungsplan,
    getendmontageKPI: getendmontageKPI,
    getendmontageLagerbestand: getendmontageLagerbestand,
    getendmontageLagersumme: getendmontageLagersumme,
    getendmontageLagerzugang: getendmontageLagerzugang,
    getendmontageLosesumme: getendmontageLosesumme,
    getkundeAuftragsuebersicht: getkundeAuftragsuebersicht,
    getkundeKPI: getkundeKPI,
    getkundeUmsatz: getkundeUmsatz,
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
    getbeschaffungsUebersicht: getbeschaffungsUebersicht,
    getSpielstand:getSpielstand,
    getkundeBestellung:getkundeBestellung,
    getinterneBestellung:getinterneBestellung,
    getkundeLieferverzugskosten:getkundeLieferverzugskosten
}