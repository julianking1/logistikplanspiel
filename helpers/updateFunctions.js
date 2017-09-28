var getterFunctions = require("../helpers/getterFunctions");

//alle Schemas importieren
var lieferantenBestellung = require ("../models/lieferantenBestellung.js");
var beschaffungKPI = require("../models/beschaffungKPI");
var endmontageFertigungsplan = require("../models/endmontageFertigungsplan");
var endmontageKPI = require("../models/endmontageKPI");
var vorfertigungFertigungsplan = require("../models/vorfertigungFertigungsplan");
var vorfertigungKPI = require("../models/vorfertigungKPI");
var distributionKPI = require("../models/distributionKPI");
var distributionSummen= require("../models/distributionSummen");
var kundeAuftragsuebersicht= require("../models/kundeAuftragsuebersicht");
var kundeKPI= require("../models/kundeKPI");
var kundeUmsatz= require("../models/kundeUmsatz");
var lieferabwicklungBestelluebersicht= require("../models/lieferabwicklungBestelluebersicht");
var lieferabwicklungKPI= require("../models/lieferabwicklungKPI");
var orderManagement= require("../models/orderManagement");
var spielstand = require("../models/spielstand");


function updateLieferantenBestellung(objectID, attribut, neuerWert) {
        lieferantenBestellung.findById(objectID, function (err, data) {
            if(err) throw err;
            data.set(attribut,neuerWert);
            data.save(function (err,updatedData) {
                if (err) throw err;
            })
        })
}

function updateBeschaffungKPI(objectID, attribut, neuerWert) {
    beschaffungKPI.findById(objectID, function (err, data) {
        if(err) throw err;
        data.set(attribut,neuerWert);
        data.save(function (err,updatedData) {
            if (err) throw err;
        })
    })
}

function updateEndmontageFertigungsplan(objectID, attribut, neuerWert) {
    endmontageFertigungsplan.findById(objectID, function (err, data) {
        if(err) throw err;
        data.set(attribut,neuerWert);
        data.save(function (err,updatedData) {
            if (err) throw err;
        })
    })
}

function updateEndmontageKPI(objectID, attribut, neuerWert) {
    endmontageKPI.findById(objectID, function (err, data) {
        if(err) throw err;
        data.set(attribut,neuerWert);
        data.save(function (err,updatedData) {
            if (err) throw err;
        })
    })
}

function updateVorfertigungKPI(objectID, attribut, neuerWert) {
    vorfertigungKPI.findById(objectID, function (err, data) {
        if(err) throw err;
        data.set(attribut,neuerWert);
        data.save(function (err,updatedData) {
            if (err) throw err;
        })
    })
}

function updateVorfertigungFertigungsplan(objectID, attribut, neuerWert) {
    vorfertigungFertigungsplan.findById(objectID, function (err, data) {
        if(err) throw err;
        data.set(attribut,neuerWert);
        data.save(function (err,updatedData) {
            if (err) throw err;
        })
    })
}

function updateDistributionSummen(objectID, attribut, neuerWert) {
    distributionSummen.findById(objectID, function (err, data) {
        if(err) throw err;
        data.set(attribut,neuerWert);
        data.save(function (err,updatedData) {
            if (err) throw err;
        })
    })
}

function updateDistributionKPI(objectID, attribut, neuerWert) {
    distributionKPI.findById(objectID, function (err, data) {
        if(err) throw err;
        data.set(attribut,neuerWert);
        data.save(function (err,updatedData) {
            if (err) throw err;
        })
    })
}

function updateKundeUmsatz(objectID, attribut, neuerWert) {
    kundeUmsatz.findById(objectID, function (err, data) {
        if(err) throw err;
        data.set(attribut,neuerWert);
        data.save(function (err,updatedData) {
            if (err) throw err;
        })
    })
}

function updateKundeKPI(objectID, attribut, neuerWert) {
    kundeKPI.findById(objectID, function (err, data) {
        if(err) throw err;
        data.set(attribut,neuerWert);
        data.save(function (err,updatedData) {
            if (err) throw err;
        })
    })
}

function updateKundeAuftragsuebersicht(objectID, attribut, neuerWert) {
    kundeAuftragsuebersicht.findById(objectID, function (err, data) {
        if(err) throw err;
        data.set(attribut,neuerWert);
        data.save(function (err,updatedData) {
            if (err) throw err;
        })
    })
}


function updateLieferabwicklungKPI(objectID, attribut, neuerWert) {
    lieferabwicklungKPI.findById(objectID, function (err, data) {
        if(err) throw err;
        data.set(attribut,neuerWert);
        data.save(function (err,updatedData) {
            if (err) throw err;
        })
    })
}

function updateLieferabwicklungBestelluebersicht(objectID, attribut, neuerWert) {
    lieferabwicklungBestelluebersicht.findById(objectID, function (err, data) {
        if(err) throw err;
        data.set(attribut,neuerWert);
        data.save(function (err,updatedData) {
            if (err) throw err;
        })
    })
}

function updateOrderManagement(objectID, attribut, neuerWert) {
    orderManagement.findById(objectID, function (err, data) {
        if(err) throw err;
        data.set(attribut,neuerWert);
        data.save(function (err,updatedData) {
            if (err) throw err;
        })
    })
}

function updateSpielstand(objectID,attribut,neuerWert) {
    spielstand.findByID(objectID,function (err,data) {
        if(err) throw err;
        data.set(attribut,neuerWert);
        data.save(function (err, updatedData) {
            if(err) throw err;
        })
    })
}


module.exports = {
    updateLieferantenBestellung:updateLieferantenBestellung,
    updateBeschaffungKPI:updateBeschaffungKPI,
    updateDistributionKPI:updateDistributionKPI,
    updateDistributionSummen:updateDistributionSummen,
    updateEndmontageFertigungsplan:updateEndmontageFertigungsplan,
    updateEndmontageKPI:updateEndmontageKPI,
    updateKundeAuftragsuebersicht:updateKundeAuftragsuebersicht,
    updateKundeKPI:updateKundeKPI,
    updateKundeUmsatz:updateKundeUmsatz,
    updateLieferabwicklungBestelluebersicht:updateLieferabwicklungBestelluebersicht,
    updateOrderManagement:updateOrderManagement,
    updateVorfertigungFertigungsplan:updateVorfertigungFertigungsplan,
    updateVorfertigungKPI:updateVorfertigungKPI
}


