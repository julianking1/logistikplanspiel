
module.exports = {
    createOrder:createOrder,
    getOrder:getOrder
}

    function createOrder(req, res) {
        //normalerweise Werte aus req laden (Body-Parser)
        var lieferantenBestellung = require ("./logistikplanspiel/models/lieferantenBestellung");
        var bestellung1 = new lieferantenBestellung({von:'W', nr:1, austellungstakt:1, artikel:'schwarz'});
        bestellung1.save(function (err) {
            if (err) return handleError(err);
        })
    }

    function getOrder(req, res) {
        //normalerweise ID aus req
        var query = lieferantenBestellung.find({'von': 'W'});
        query.select('nr')
        res.send("Datenbank Testseite")
        res.send (nr)
    }
