var mongoose = requires('mongoose');

module.exports = {

    sending: function(req, res, next) {

        var bestellung1 = mongoose.model("lieferantenBestellung");
        //hier die Tests reinschreiben


        res.send('Datenbank Testseite'); //Hier die Testausgabe einfügen
    }
}