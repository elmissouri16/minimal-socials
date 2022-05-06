// function reddenPage() {
//     document.body.style.backgroundColor = 'red';
// }

function hideInstagramStories() {
    var stories = document.getElementsByClassName('zGtbP IPQK5 VideM');
    for (var i = 0; i < stories.length; i++) {
        stories[i].remove();
    }
}

