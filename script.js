const rootDiv = document.getElementById('root'); //step 3

function renderSignUp() { // step 4
    rootDiv.innerHTML = `
        <h1>Sign Up</h1>
        <form id="signupForm">
            <label for="name">Name:</label>
            <input type="text" id="name" placeholder="Enter your name"><br>
            <label for="email">Email:</label>
            <input type="email" id="email" placeholder="Enter your email"><br>
            <label for="password">Password:</label>
            <input type="password" id="password" placeholder="Enter your password"><br>
            <button type="button" class="button" onclick="handleSignUp()">Sign Up</button>
        </form>
    `;
}


let userName = '';  // step 5
function handleSignUp() {
    const nameInput = document.getElementById('name').value;
    const emailInput = document.getElementById('email').value;
    const passwordInput = document.getElementById('password').value;
    if (nameInput && emailInput && passwordInput) {
        userName = nameInput; // Store the user's name in a global variable
        renderHomePage();     // Move to the next step in the app
    } else {
        alert('Please fill out all fields');
    }
}

function renderHomePage() {  //step 6  added editPost() button
    rootDiv.innerHTML = `
        <h1>Welcome, ${userName}!</h1>
        <h2>Create a Post</h2>
        <div id="postContainer">
            <textarea id="postContent" placeholder="What's on your mind?"></textarea><br>
            <button type="button" class="button" onclick="handleCreatePost()">Post</button>
        </div>
        <div>
            <label for="numberText">Enter post number to edit:</label>
            <input type="text" id="numberTextBox" size="2">
            <button type="button" class="button" onclick="editPost()">Edit previous posts, leave blank to delete</button>
        </div>
        <h3>Your Posts</h3>
        <ul id="postList"></ul>
    `;
}

let posts = []; //step 7
function handleCreatePost() {
    const postContent = document.getElementById('postContent').value;
    
    if (postContent) {
        posts.push(postContent); // Add the new post to the posts array
        renderPostList();        // Update the displayed post list
    } else {
        alert('Post content cannot be empty');
    }
}

function editPost(){
    const postNumber = parseInt(document.getElementById('numberTextBox').value) - 1;
    const postContent = document.getElementById('postContent').value;
    posts[postNumber] = postContent;
    renderPostList();
}

function renderPostList() { //step 8
    const postListElement = document.getElementById('postList');
    postListElement.innerHTML = ''; // Clear the current list
    posts.forEach((post) => {
        const postItem = document.createElement('li');
        postItem.textContent = post;
        postListElement.appendChild(postItem);
    });
}




renderSignUp();

