var tableInfo = require("../models/tables.js");
var getallFunctions = require("./getallFunctions.js");

module.exports = {

    getContent: function (res, profile, type, tableNum) {
        //console.log(tableNum);

        var names = tableInfo.getNames(profile);

        //var tables = getallFunctions.getAll(profile, tableNum, callback);

        res.render('tables', {numTable: tableNum, paramType: type, paramProfil: profile, nameTables: names, currentTable: ""});
    }
};