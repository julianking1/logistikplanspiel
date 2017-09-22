module.exports = {

    rendering: function (req, res, next) {

        //get parameter
        var url = req.url;
        var helper = url.split("?");
        helper = helper[0];
        var urlparts = helper.split("/");

        switch(String(urlparts[2])){
            case 'mailbox':
                res.render('mailbox', {param: url, path: 'kunde/mailbox?'}); //auslagern und andere cases

        }

    },

    renderingChecklist: function (req, res, next) {

        //Welches Profil wird geladen?
        var url = req.url;
        var data = ['1Aufgabe' + url, '2Aufgabe' + url]; //Ausgabe der Checkliste aus DB je nach Profil


        //rendering der Website, momentan noch Test
        res.render('checklist', {param: url, rows: data});
    },
}