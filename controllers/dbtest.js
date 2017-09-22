var lieferantenBestellung = require ("../models/lieferantenBestellung.js");
var schemaFunctions = require("../helpers/schemaFunctions");

module.exports = {

    createOrder: createOrder,
    getOrder: getOrder
}

    function createOrder(req, res) {
        //normalerweise Werte aus req laden (Body-Parser)

        schemaFunctions.createLieferantenBestellung('W',200,1,'schwarz');
        var bestellung1 = new lieferantenBestellung({von:'W', nr:1, austellungstakt:1, artikel:'weiß'});
        bestellung1.save(function (err) {
            if (err) throw err;
            res.send("Saved")
        });
    }

    function getOrder(req, res) {
        //normalerweise ID aus req

        lieferantenBestellung.findOne({'nr': '1'}, function (err, data) {
            if(err) return handleError(err)
            res.send("Bestellung von "  + data.von + ", ausgestellt in Takt " + data.austellungstakt+
            ", Artikel: " + data.artikel);
        })

    }
