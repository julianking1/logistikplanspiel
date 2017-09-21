
var lieferantenBestellung = require ("../models/lieferantenBestellung.js");
module.exports = {

    createOrder: createOrder,
    getOrder: getOrder
}

    function createOrder(req, res) {
        //normalerweise Werte aus req laden (Body-Parser)

        var bestellung1 = new lieferantenBestellung({von:'W', nr:1, austellungstakt:1, artikel:'schwarz'});
        var mongoose = require(mongoose);
        bestellung1.save(function (err) {
            if (err) throw err;
            else res.send("ok");
        })

    }

    function getOrder(req, res) {
        //normalerweise ID aus req
        var query = lieferantenBestellung.find({'von': 'W'});
        var nr = query.select('nr');
        res.send (""+ nr);
        res.send("Datenbank Testseite");

    }
