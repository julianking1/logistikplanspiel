var tableInfo = require("../models/tables.js");

module.exports = {

    getContent: function (res, profile, tableNum) {
        console.log(tableNum);

        var names = tableInfo.getInfo(profile);
        var num = names.length;

        res.render('tables', {paramProfil: profile, numTables: num, nameTables: names});
    }
};