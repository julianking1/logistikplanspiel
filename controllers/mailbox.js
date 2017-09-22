var lieferantenBestellung = require ("../models/lieferantenBestellung.js");


module.exports ={

    getContent: function(res, p1, p2){

        lieferantenBestellung.findOne({'nr': '1'}, function (err, data) {
            if (err) return handleError(err)
            res.render('mailbox', {paramProfil: p1, paramTool: p2, content: data});
        });

    }

};