var urlSplitter = require('../helpers/urlSplitter');
var setterFunctions = require("../helpers/setterFunctions.js");

module.exports = {

    saveInDB: function (req, res) {

        var urlparts = urlSplitter.splitUrl(req);
        console.log(urlparts[1]);

        switch(String(urlparts[1])){

            case 'kunde':
                //schemaFunctions.createLieferantenBestellung(req.body.)
                console.log(req.body.von + req.body.nr + req.body.ausstellungstakt + req.body.artikel);
                setterFunctions.createLieferantenBestellung(123, req.body.von, req.body.nr, req.body.ausstellungstakt,req.body.artikel);
                res.send(req.body.von + req.body.nr + req.body.ausstellungstakt + req.body.artikel);

            case 'beschaffung':
                console.log(req.body.von + req.body.nr + req.body.ausstellungstakt + req.body.artikel);
                setterFunctions.createLieferantenBestellung(123, req.body.von, req.body.nr, req.body.ausstellungstakt,req.body.artikel);
                res.send(req.body.von + req.body.nr + req.body.ausstellungstakt + req.body.artikel);
        }


    }


};