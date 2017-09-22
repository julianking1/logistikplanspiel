var lagerbestandEingangspruefung = require("../models/lagerbestandEingangspruefung.js");

function createLagerbestandEingangspruefung (req, res){
    var lagbest = new lagerbestandEingangspruefung ({spielID: 0, periode: 0, takt: 0, artikel: 'schwarz', bestand: 10});
    lagbest.save(function (err) {
        if (err) throw err;
        res.send("Saved")
    });
}
