
// add protection to elements to make it easy to show and hide them
Element.prototype.show = function () {
    show(this);
}
Element.prototype.hide = function () {
    hide(this);
}

function hideInstagramStories() {
    var stories = document.getElementsByClassName('zGtbP IPQK5 VideM');
    for (var i = 0; i < stories.length; i++) {
        stories[i].hide();
    }
}
function showInstagramStories() {
    var stories = document.getElementsByClassName('zGtbP IPQK5 VideM');
    for (var i = 0; i < stories.length; i++) {
        stories[i].show();
    }
}
function hideSuggestions() {
    var suggestions = document.getElementsByClassName('_8UZ6e');
    for (var i = 0; i < suggestions.length; i++) {
        suggestions[i].hide();
    }
}
function showSuggestions() {
    var suggestions = document.getElementsByClassName('_8UZ6e');
    for (var i = 0; i < suggestions.length; i++) {
        suggestions[i].show();
    }
}
function deleteFoters() {
    var footers = document.getElementsByClassName('SkY6J');
    for (var i = 0; i < footers.length; i++) {
        footers[i].remove();
    }
}
function removeStoriesFromProfile() {
    var stories = document.getElementsByClassName('CfWVH');
    for (var i = 0; i < stories.length; i++) {
        stories[i].remove();
    }


}

function clean() {
    hideInstagramStories();
    hideSuggestions();
    deleteFoters();
    removeStoriesFromProfile();
}

// on website finish loading
// window.addEventListener('load', function () {
//     clean();
// }
//     , false);


// add on scroll event
// document.addEventListener('scroll', function () {
//     clean();
// }
// , false);
// create check event for checkbox

chrome.runtime.onMessage.addListener( // this is the message listener
    function (request, sender, sendResponse) {
        console.log(request);
        if (request.message === "enable_stories") {
            if (request.value) {
                showInstagramStories();
            } else {
                hideInstagramStories();
            }
        } else if (request.message === 'enable_suggestions') {
            if (request.value) {
                showSuggestions();
            }
            else {
                hideSuggestions();
            }
        }
    }
);

window.addEventListener("load", () => {
    chrome.storage.local.get(['enable_stories', 'enable_suggestions'], function (result) {
        if (result.enable_stories) {
            showInstagramStories();
        } else {
            hideInstagramStories();
        }
        if (result.enable_suggestions) {
            showSuggestions();
        }
        else {
            hideSuggestions();
        }

    }
    );
}, false);





