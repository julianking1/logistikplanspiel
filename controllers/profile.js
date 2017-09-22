module.exports = {

    rendering: function(req, res, next) {

        //Welches Profil wird geladen?
        var url = req.url;
        var data = ['1Aufgabe'+url, '2Aufgabe'+url]; //Ausgabe der Checkliste aus DB je nach Profil


        //rendering der Website, momentan noch Test
        res.render('checklist',  { param: url, rows:data, });
    }
}