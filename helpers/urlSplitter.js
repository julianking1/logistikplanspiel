module.exports = {

    splitUrl: function(req){
        var url = req.url;
        var helper = url.split("?");
        helper = helper[0];
        var urlparts = helper.split("/");
        return urlparts;
    }

};