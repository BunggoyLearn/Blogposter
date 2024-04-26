const username = document.getElementById('user-msg');
const title = document.getElementById('title-msg');
const blog = document.getElementById('blog-msg');
const submitButton = document.getElementById('submit');
const jlButton = document.getElementById('just-lookin');

//Create object for all information to get saved into localstorage

function saveBlogData() {
    const rawblog = {
        username: username.value.trim(),
        title: title.value.trim(),
        blog: blog.value.trim(),
    };

    //Make sure that the blog is fully filled out before sending it

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

    // If it passes parse the local storage for previous posts, if there are none create an index, if not add to the index

    else {
        const myArray = JSON.parse(localStorage.getItem('myArray'));
        console.log(myArray);
        if (myArray == null) {
            const myArray = [];
            myArray.push(rawblog);
            localStorage.setItem('myArray', JSON.stringify(myArray));
            window.location.href="./blog.html"
        }

        else {
        myArray.push(rawblog);

        localStorage.setItem('myArray', JSON.stringify(myArray));
        window.location.href="./blog.html"
        }
}
}
//Listen for click on submit button, then execute code.

submitButton.addEventListener('click', function (event) {
    event.preventDefault();
    saveBlogData();
});

//Button if you want to see the feed but not add any posts

jlButton.addEventListener('click', function (event) {
    event.preventDefault();
    window.location.href="./blog.html"
});