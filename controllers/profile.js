var helperMailbox = require('../controllers/mailbox.js');
var checklisten = require('../models/checklisten');
var urlSplitter = require('../helpers/urlSplitter');

module.exports = {

    rendering: function (req, res, next) {

        var urlparts = urlSplitter.splitUrl(req);

        //render according to parameter of tools
        switch(String(urlparts[2])){
            case 'mailbox':
                helperMailbox.getContent(res, urlparts[1],  urlparts[2]);
                break;

            case 'checklist'  :
                var data = checklisten.getDataArray(urlparts[1]);
                res.render('checklist', {paramProfil: urlparts[1], paramTool: urlparts[2], rows:data});
                break;

            case 'tabellen':
                res.render('tables', {paramProfil: urlparts[1], paramTool: urlparts[2]});
                break;

            case 'info':
                res.render('info', {paramProfil: urlparts[1], paramTool: urlparts[2]});
                break;
        }

    },

    //default
    renderingDefault: function (req, res, next) {

        var urlparts =  urlSplitter.splitUrl(req);
        var data = checklisten.getDataArray(urlparts[1]);
        res.render('checklist', {paramProfil: urlparts[1], paramTool: 'checklist', rows: data});
    }
};

