//Parses data onto new page, gathers index number by subtracting one from length

function renderBlogData() {
    const myArray = JSON.parse(localStorage.getItem('myArray'));

    let lastIndex = (myArray.length - 1);

//Basic for loop counter, counts down for each object in array. Will put more recent posts above.

   for (lastIndex; lastIndex > -1; lastIndex--) {
    const cookedblog = myArray[lastIndex];

//Extra security for the app to not break, null objects aren't allowed anyway but double up anyways...

    if (cookedblog !== null) {

//Create a new div for each object from previous loop, give it a unique id that counts up

        const newDiv = document.createElement('div');
        newDiv.setAttribute('id',`post-${lastIndex}`);
        newDiv.setAttribute('class','posts');
        document.body.appendChild(newDiv);

//Nested for loop, another basic counter this time implementing i. goes from 0-2 and places the object's children where they need to go with the styles they need.

        for(i = 0; i < 3; i++) {
            const choppedblog = i

            if (choppedblog == 0) {
               const user = document.createElement('h4');
               user.textContent = cookedblog.username;
               document.body.appendChild(user);
            }

            else if (choppedblog == 1) {
                const postTitle = document.createElement('h3');
                postTitle.textContent = cookedblog.title;
                document.body.appendChild(postTitle);
            }

            else {
                const blogtent = document.createElement('p');
                blogtent.textContent = cookedblog.blog;
                document.body.appendChild(blogtent);
            }
        }
    }
}
}

//Basic initial function that makes things happen when the page loads.

function init() {
    renderBlogData();
}

init();

