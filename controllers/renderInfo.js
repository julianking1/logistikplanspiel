var infoInfo = require("../models/info.js");
//var getterFunctions = require("../helpers/getterFunctions.js");

module.exports = {

    getContent: function (res, profile) {

        var info = infoInfo.getBeschreibung(profile);
        var name = info[0];
        var beschreibung = info[1];

        res.render('info', {paramProfil: profile, nameParam: name, beschreibungParam: beschreibung});
    }
};