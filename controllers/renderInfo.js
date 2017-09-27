var infoInfo = require("../models/info.js");
//var getterFunctions = require("../helpers/getterFunctions.js");

module.exports = {

    getContent: function (res, profile, type, def) {

        var info = infoInfo.getBeschreibung(profile); //DB Abfrage
        var name = info[0];
        var beschreibung = info[1];

        if(def){
            res.render('default', {paramType: type, paramProfil: profile, nameParam: name, beschreibungParam: beschreibung});
        }else{
            res.render('info', {paramType: type, paramProfil: profile, nameParam: name, beschreibungParam: beschreibung});
        }

    }
};