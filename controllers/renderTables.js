var tableInfo = require("../models/tables.js");
var getallFunctions = require("./getallFunctions.js");

module.exports = {

    getContent: function (res, profile, type, tableNum) {


        var names = tableInfo.getNames(profile);

        getallFunctions.getAll(profile, tableNum, function (data) {
            console.log(data);

            var daten = data.sort(function(a, b){
               return a.bestellnr - b.bestellnr;
            });

            res.render('tables', {numTable: tableNum, paramType: type, paramProfil: profile, nameTables: names, currentTable: daten});
        });


    }
};