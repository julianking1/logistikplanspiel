module.exports = {

    rendering: function (req, res, next) {

        //get parameter
        var url = req.url;
        var helper = url.split("?");
        helper = helper[0];
        var urlparts = helper.split("/");

        //render according to parameter of tools
        switch(String(urlparts[2])){
            case 'mailbox':
                res.render('mailbox', {paramProfil: urlparts[1], paramTool: urlparts[2]});
                break;

            case 'checklist'  :
                var data = ['1Aufgabe' + url, '2Aufgabe' + url]; //Ausgabe der Checkliste aus DB je nach Profil
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

        var url = req.url;
        var helper = url.split("?");
        helper = helper[0];
        var urlparts = helper.split("/");

        var data = ['1Aufgabe' + url, '2Aufgabe' + url]; //Ausgabe der Checkliste aus DB je nach Profil
        res.render('checklist', {paramProfil: urlparts[1], paramTool: 'checklist', rows: data});
    }
};