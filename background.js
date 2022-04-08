console.log("background.js started");

// let HTML = document.documentElement;
let det = chrome.tabs.query({active: true, currentWindow: true});

det.then( function(tabs){
    var myTabId = tabs[0].id;
    console.log(tabs);
    
});