var tableInfo = require("../models/tables.js");
var getterFunctions = require("../helpers/getterFunctions.js");

module.exports = {

    getContent: function (res, profile, tableNum) {
        console.log(tableNum);

        var names = tableInfo.getNames(profile);

        //var tables = getterFunctions.getAll(profile, tableNum);

        res.render('tables', {paramProfil: profile, nameTables: names, currentTables: ""});
    }
};