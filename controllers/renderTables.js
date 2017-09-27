var tableInfo = require("../models/tables.js");
var getallFunctions = require("./getallFunctions.js");

module.exports = {

    getContent: function (res, profile, type, tableNum) {
        //console.log(tableNum);

        var names = tableInfo.getNames(profile);

        console.log('test');


        var data = getallFunctions.getAll('kunde', '0', function (data) {
            var daten = data.sort(function(a, b){
                return a.bestellnr - b.bestellnr;
            });

            res.render('tables', {numTable: tableNum, paramType: type, paramProfil: profile, nameTables: names, currentTable: daten});
        });


    }
};