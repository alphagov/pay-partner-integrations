module.exports = function () {

    function home(req, res, next) {
        res.render('home');
    }

    return {
        home: home
    };
};