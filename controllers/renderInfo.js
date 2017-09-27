var infoInfo = require("../models/info.js");
//var getterFunctions = require("../helpers/getterFunctions.js");

module.exports = {

    getContent: function (res, profile, def) {

        var info = infoInfo.getBeschreibung(profile);
        var name = info[0];
        var beschreibung = info[1];

        if(def){
            res.render('default', {paramProfil: profile, nameParam: name, beschreibungParam: beschreibung});
        }else{
            res.render('info', {paramProfil: profile, nameParam: name, beschreibungParam: beschreibung});
        }

    }
};