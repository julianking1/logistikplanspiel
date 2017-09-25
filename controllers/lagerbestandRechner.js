var lagerbestandEingangspruefung = require("../models/lagerbestandEingangspruefung.js");

module.exports = {

    createLagerbestandEingangspruefung: createLagerbestandEingangspruefung,
    sumbestandschwarz: sumbestandschwarz
}



function createLagerbestandEingangspruefung (req, res){
    var lagbest = new lagerbestandEingangspruefung ({spielID: 0, periode: 0, takt: 0, artikel: 'schwarz', bestand: 10});
    lagbest.save(function (err) {
        if (err) throw err;
        res.send("Saved")
    });
}

function sumbestandschwarz (req, res){
    var query = lagerbestandEingangspruefung.find( {'artikel': 'schwarz'}, function (err, lagerbestand) {
        if (err) return handleError (err);
        var sum = 0;
        for (var i = 0; i < lagerbestand.length; i++){

            sum = sum + lagerbestand[i].bestand;


        }
        res.send("wert" +sum);




    });




}