function deleteInstagramStories() {
    var stories = document.getElementsByClassName('zGtbP IPQK5 VideM');
    for (var i = 0; i < stories.length; i++) {
        stories[i].remove();
    }
}
function deleteSuggestions() {
    var suggestions = document.getElementsByClassName('_8UZ6e');
    for (var i = 0; i < suggestions.length; i++) {
        suggestions[i].remove();
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
    deleteInstagramStories();
    deleteSuggestions();
    deleteFoters();
    removeStoriesFromProfile();
}

// on website finish loading
window.addEventListener('load', function () {
    clean();
}
    , false);


