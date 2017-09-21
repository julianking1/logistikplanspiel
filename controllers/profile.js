module.exports = {

    rendering: function(req, res, next) {

        //Welches Profil wird geladen?
        var url = req.url;

        //rendering der Website, momentan noch Test
        res.render('janatests',  { param: url });
    }
}