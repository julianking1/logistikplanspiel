var renderMailbox = require('./renderMailbox.js');
var checklisten = require('../models/checklisten');
var urlSplitter = require('../helpers/urlSplitter');
var renderTables = require('./renderTables.js');
var renderInfo = require('./renderInfo.js');

module.exports = {

    rendering: function (req, res, next) {

        var profile = req.body.profilParam;
        var type = req.body.typeParam;
        var contentNum = req.body.contentNum;


        switch(type) {
            case 'mailbox':
                renderMailbox.getContent(res, profile, type);
                break;

            case 'checklist'  :
                var data = checklisten.getDataArray(profile);
                res.render('checklist', {paramProfil: profile, paramTool: type, rows: data});
                break;

            case 'tabellen':
                renderTables.getContent(res, profile, type, contentNum);
                break;

            case 'info':
                renderInfo.getContent(res, profile, type, false);
        }

    },

    //default
    renderingDefault: function (req, res, next) {
        var urlparts =  urlSplitter.splitUrl(req);
        var profile = urlparts[1];
        renderInfo.getContent(res, profile, "info",  true);
    }
};

