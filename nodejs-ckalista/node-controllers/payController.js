var config = require('config');
var superagent = require("superagent");

module.exports = function (app) {

    function pay(req, res, next) {
        // PAYMENTS PLATFORM INTEGRATION
        console.log("Pay")
    }

    return {
        pay: pay
    };
};