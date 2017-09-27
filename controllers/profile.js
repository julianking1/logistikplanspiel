var helperMailbox = require('../controllers/mailbox.js');
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
                helperMailbox.getContent(res, profile, type);
                break;

            case 'checklist'  :
                var data = checklisten.getDataArray(profile);
                res.render('checklist', {paramProfil: profile, paramTool: type, rows: data});
                break;

            case 'tabellen':
                renderTables.getContent(res, profile, contentNum);
                break;

            case 'info':
                renderInfo.getContent(res, profile);
        }

    },

    //default
    renderingDefault: function (req, res, next) {

        var urlparts =  urlSplitter.splitUrl(req);
        var data = checklisten.getDataArray(urlparts[1]);
        res.render('default', {paramProfil: urlparts[1], paramTool: 'checklist', rows: data});
    }
};

