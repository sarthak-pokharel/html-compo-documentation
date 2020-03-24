let enums = {
	mode: {
		DEV: Symbol('dev'),
		PRODUCTION: Symbol('production')
	}
}
let config = {
	mode: enums.mode.PRODUCTION
};

(function(){
	let origin = location.origin;
	if(origin == null) {
		return;
	}
	if(!('serviceWorker' in navigator)) {
		return;
	}
	if(config.mode == enums.mode.DEV) {
		return;
	}else if(config.mode != enums.mode.PRODUCTION) {
		console.log("Unknown Environment");
		return;
	}
	console.log("Registering Service Worker")
	navigator.serviceWorker.register('./sw.js').then(reg=>{
		console.log("Service Worker Registered");
	});
})();
