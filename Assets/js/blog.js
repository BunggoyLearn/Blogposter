function renderBlogData() {
    const myArray = JSON.parse(localStorage.getItem('myArray'));

    let lastIndex = (myArray.length - 1);

    console.log(lastIndex);

   for (lastIndex; lastIndex > -1; lastIndex--) {
    const cookedblog = myArray[lastIndex];

    if (cookedblog !== null) {
        document.getElementById('saved-user').innerHTML = cookedblog.username;
        document.getElementById('saved-title').innerHTML = cookedblog.title;
        document.getElementById('saved-blog').innerHTML = cookedblog.blog;
    }
    }
}

function init() {
    renderBlogData();
}

init();

