//alle Schemas importieren
var lieferantenBestellung = require ("../models/lieferantenBestellung.js");

function createLieferantenBestellung(von, nr, ausstellungstakt, artikel) {
    var lieferantenBestellung = new lieferantenBestellung({von:von,
        nr:nr, austellungstakt:ausstellungstakt, artikel:artikel});
    lieferantenBestellung.save();
}

    function getLieferantenBestellung() {

    }

module.exports = {
    createLieferantenBestellung: createLieferantenBestellung
}
