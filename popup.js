console.log("popup.js started");
let ytd_browse = document.getElementById("ytd_browse");

document.addEventListener('DOMContentLoaded',(event)=>{
    console.log('DOM Fully loaded and parsed',event);
    chrome.storage.local.get((result)=>{
        let value = result.ytd_browse ?? "false";
        console.log("Value is ...",value, ytd_browse.value);
        ytd_browse.checked = value==="true";
    });
});

ytd_browse.addEventListener("click",event=>{
    let ytd_browse_val = event.target.checked+"";
    let key = "ytd_browse";
    let messageObj = [{ key, ytd_browse_val}];
    let saveObj = {ytd_browse: ytd_browse_val};
    chrome.storage.local.set(saveObj);
    
    chrome.tabs.query({},tabs => {
        tabs.forEach(tab => chrome.tabs.sendMessage(tab.id, messageObj));
    });
});

// console.log(ytd_browse.checked)



// function logFrameInfo(framesInfo){
//     for(frameInfo of framesInfo){
//         console.log(frameInfo);
//     }
// }
// function onError(error){
//     console.log(`Error: ${error}`);
// }
// function logAllFrames(tabs){
//     console.log(tabs);
//     let gettingAllFrames = chrome.webNavigation.getAllFrames({tabId: tabs[0].id});
//     gettingAllFrames.then(logFrameInfo, onError);
// }

// let details = chrome.tabs.query({
//     currentWindow: true,
//     active: true
// });

// details.then(logAllFrames, onError);
