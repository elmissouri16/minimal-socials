// function reddenPage() {
//     document.body.style.backgroundColor = 'red';
// }

function deleteInstagramStories() {
    var stories = document.getElementsByClassName('zGtbP IPQK5 VideM');
    for (var i = 0; i < stories.length; i++) {
        stories[i].remove();
    }
}

// chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
//     if (tab.url.includes('instagram.com')) {
//         if (changeInfo.status == 'complete') {
//             window.alert('Instagram Stories Deleted');
//             chrome.tabs.executeScript(tabId, {
//                 target: { tabId: tab.id },
//                 function: deleteInstagramStories
//             });
//         }
//     }
// });
chrome.action.onClicked.addListener((tab) => {
    // if (!tab.url.includes("chrome://")) {
    //     chrome.scripting.executeScript({
    //         target: { tabId: tab.id },
    //         function: deleteInstagramStories
    //     });
    // }
});
