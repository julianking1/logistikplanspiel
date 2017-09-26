var helperMailbox = require('../controllers/mailbox.js');
var checklisten = require('../models/checklisten');
var urlSplitter = require('../helpers/urlSplitter');

module.exports = {

    rendering: function (req, res, next) {

        var profile = req.body.profilParam;
        var type = req.body.typeParam;


        switch(type) {
            case 'mailbox':
                helperMailbox.getContent(res, profile, type);
                break;

            case 'checklist'  :
                var data = checklisten.getDataArray(profile);
                res.render('checklist', {paramProfil: profile, paramTool: type, rows: data});
                break;

            case 'tabellen':

                if (profile= 'kunde')
                    var tabellenart = 'kunde.jade';
                res.render('tables', {paramProfil: profile, paramTool: type, currentTable: tabellenart});
                break;

            case 'info':
                res.render('info', {paramProfil: profile, paramTool: type});
        }

    },

    //default
    renderingDefault: function (req, res, next) {

        var urlparts =  urlSplitter.splitUrl(req);
        var data = checklisten.getDataArray(urlparts[1]);
        res.render('default', {paramProfil: urlparts[1], paramTool: 'checklist', rows: data});
    }
};

