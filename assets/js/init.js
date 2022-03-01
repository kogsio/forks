
// ----------------------------------------------------
//                LOAD LIBRARIES START
// ----------------------------------------------------

// resolve path for local and server development
var path = document.currentScript.getAttribute('src');
if (path.includes('../assets/js')){
  var index = path.indexOf('assets/js');
  path = path.substring(0,index);
  console.log('path:',path);
}
else{
  path = '';
}

var styles = [  
  'https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css',
  `${path}assets/css/styles.css`,
  `${path}assets/css/all.css` 
];

var scripts = [
  'https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js',
  `${path}assets/js/components.js` 
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
s4.href = `${path}assets/img/favicon.ico`;
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
  //  promises.push(loadScript(scripts[i]));
  // }
  // await Promise.all(promises);
  console.log('Pong!');
}
console.log('Ping!');

runner().then(() => {
  document.documentElement.style.display = 'block'; 
  countVideos()  
  console.log('Ping Pong!')
});

// ----------------------------------------------------
//                LOAD LIBRARIES END
// ----------------------------------------------------


// ----------------------------------------------------
//                COUNT VIDEOS START
// ----------------------------------------------------

function countVideos(){
  var elements = document.querySelectorAll("mit-submodule");
  if (elements){
    var count = document.querySelectorAll("mit-submodule").length;
    var element = document.getElementById("videoCount");
    if (element){
      document.getElementById("videoCount").innerHTML = count;        
    }
  }
}

// ----------------------------------------------------
//                COUNT VIDEOS END
// ----------------------------------------------------
