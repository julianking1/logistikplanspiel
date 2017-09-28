var lieferantenBestellung = require ("../models/lieferantenBestellung.js");
var setterFunctions = require("../helpers/setterFunctions.js");
var getallFunctions = require("../controllers/getallFunctions");



module.exports ={

    getContent: function(res, profile, type, contentNum) {

        getallFunctions.getMailbox(profile, contentNum, function (data) {
console.log(data);
            res.render('mailbox', {paramProfil: profile, paramTool: type, mailboxNum: contentNum,  currentMailbox: data});

        });
    }

};