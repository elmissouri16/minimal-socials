document.addEventListener('DOMContentLoaded', documentEvents, false);



function documentEvents() {
    const stories_checkbox = document.getElementById('enable_stories');
    const suggestions_checkbox = document.getElementById('enable_suggestions');
    // load checkbox value from chrome storage
    chrome.storage.local.get(['enable_stories', 'enable_suggestions'], function (result) {
        console.log(result);

        stories_checkbox.checked = result.enable_stories;
        suggestions_checkbox.checked = result.enable_suggestions;
        passMessage('enable_stories', result.enable_stories);
        passMessage('enable_suggestions', result.enable_suggestions);

    }
    );

    stories_checkbox.addEventListener('change',
        function () {
            chrome.storage.local.set({
                enable_stories: stories_checkbox.checked
            }, function (result) {

            });
            passMessage('enable_stories', stories_checkbox.checked);
        });
    suggestions_checkbox.addEventListener('change',
        function () {
            chrome.storage.local.set({
                enable_suggestions: suggestions_checkbox.checked
            }, function (result) {


            });
            passMessage("enable_suggestions", suggestions_checkbox.checked);

        });

    // you can add listeners for other objects ( like other buttons ) here
}

function passMessage(message, value) {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id,
            {
                message: message,
                value: value
            }, function (response) { })
    }

    )
}
function setStorage(key, value) {
    chrome.storage.local.set({
        [key]: value
    }, function (result) { }
    );
}
function getStorage([keys]) {
    chrome.storage.local.get(keys, function (result) {
        console.log(result);
        return result;
    }
    );

}