var styles = [	
	'https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css',
	'../assets/css/styles.css',
	'../assets/css/all.css'	
];

var scripts = [
	'https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js'
];

var loadStyle = function(url){
    return new Promise(function (resolve, reject) {
		var style = document.createElement('link');
		style.type = 'text/css';
		style.rel = 'stylesheet';
		style.href = url;
        style.onload = resolve;
        style.onerror = reject;
        document.head.appendChild(style);
    });
};


function loadScript(url) {
    return new Promise(function (resolve, reject) {
        var script = document.createElement('script');
        script.src = url;
        script.onload = resolve;
        script.onerror = reject;
        document.head.appendChild(script);
    });
}

// load icon 
var s4  = document.createElement('link');
s4.rel  = 'icon';
s4.href = './assets/img/favicon.ico';
document.head.appendChild(s4);  


async function runner(){
	// load styles async
	var promises = [];
	for (var i=0; i<styles.length; i++) {
		promises.push(loadStyle(styles[i]));
	}
	await Promise.all(promises);

	// load sync scripts
	for (var i=0; i<scripts.length; i++) {
		await loadScript(scripts[i]);
	}

	// // load async scripts
	// promises = [];
	// for (var i=0; i<scripts.length; i++) {
	// 	promises.push(loadScript(scripts[i]));
	// }
	// await Promise.all(promises);
	console.log('Pong!');
}
console.log('Ping!');

export {runner};