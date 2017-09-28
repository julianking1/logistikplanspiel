var tableInfo = require("../models/tables.js");
var getallFunctions = require("./getallFunctions.js");

//Commit

module.exports = {

    getContent: function (res, profile, type, tableNum) {


        var names = tableInfo.getNames(profile);

        getallFunctions.getAll(profile, tableNum, function (data) {
            res.render('tables', {numTable: tableNum, paramType: type, paramProfil: profile, nameTables: names, currentTable: data});
        });


    }
};