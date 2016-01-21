module.exports = function(router, controllers) {

	// Pages
	router.get('/', controllers.home.home);

	// Controllers
	router.post('/pay', controllers.pay.pay);
};