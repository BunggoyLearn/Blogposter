const username = document.getElementById('user-msg');
const title = document.getElementById('title-msg');
const blog = document.getElementById('blog-msg');
const submitButton = document.getElementById('submit');

//Create object for all information to get saved into localstorage

function saveBlogData() {
    const rawblog = {
        username: username.value.trim(),
        title: title.value.trim(),
        blog: blog.value.trim(),
    };

    if (!rawblog.username) {
        alert('Username required!')
        return;
    }

    else if (!rawblog.title) {
        alert('Title required!')
        return;
    }

    else if (!rawblog.blog) {
        alert("You can't write nothing!")
        return;
    }
    else {
    const myArray = [];

    myArray.push(rawblog);

    localStorage.setItem('myArray', JSON.stringify(myArray));
}
}

submitButton.addEventListener('click', function (event) {
    event.preventDefault();
    saveBlogData();
    window.location.href="./blog.html"
});