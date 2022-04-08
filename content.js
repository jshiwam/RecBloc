//all_frames in manifest:- what is a frame?
// Frames within a tab can be identified by a frame ID. 
// The frame ID of the main frame is always 0, the ID of child frames is a positive number. 
// Once a document is constructed in a frame, its frame ID remains constant during the lifetime of the document.
            
console.log("content.js started");

let HTML = document.documentElement;

chrome.storage.local.get((result)=>{
        let value = result.ytd_browse ?? "false";
        console.log(result,value);
        HTML.setAttribute("ytd_browse",value);
    });
chrome.runtime.onMessage.addListener((data,sender) => {
    console.log("message received here", data,sender);
    data.forEach(({key, ytd_browse_val})=>{
        HTML.setAttribute(key, ytd_browse_val);
        console.log(key, ytd_browse_val);
    }
    );
});
// console.log(chrome.tabs);
// console.log(chrome.webNavigation);
// console.log(chrome.runtime);

// let key ='1';
// let val = 2;
// chrome.storage.local.set({key:val},()=>{
//     console.log('Value is '+ val);
// });
// chrome.storage.local.get((result)=>{
//     console.log("This is.. ",result.key);
// });