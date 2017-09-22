module.exports = {

    rendering: function (req, res, next) {

        //get parameter
        var url = req.url;
        var helper = url.split("?");
        helper = helper[0];
        var urlparts = helper.split("/");

        switch(String(urlparts[2])){
            case 'mailbox':
                res.render('mailbox', {param1: urlparts[1], param2: urlparts[2]});
                break;

            case 'checklist'  :
                var data = ['1Aufgabe' + url, '2Aufgabe' + url]; //Ausgabe der Checkliste aus DB je nach Profil
                res.render('checklist', {param1: urlparts[1], param2: urlparts[2], rows:data});
                break;

            case 'tabellen':
                res.render('tables', {param1: urlparts[1], param2: urlparts[2]});
                break;

            case 'info':
                res.render('info', {param1: urlparts[1], param2: urlparts[2]});
                break;
        }

    },

    renderingDefault: function (req, res, next) {

        var url = req.url;
        var helper = url.split("?");
        helper = helper[0];
        var urlparts = helper.split("/");

        var data = ['1Aufgabe' + url, '2Aufgabe' + url]; //Ausgabe der Checkliste aus DB je nach Profil

        //rendering der Website, momentan noch Test
        res.render('checklist', {param1: urlparts[1], paramTool: 'checklist', rows: data});
    }
};