//import fetch from "node-fetch"; // commenting out if node js is not used here.
let dataObj = {};
function callApi(uri) {
    return new Promise((resolve, reject) => {
        fetch(uri).then((response) => resolve(response.json()));
    });
}

async function getPost() {
    try {
        dataObj.posts = await callApi("https://jsonplaceholder.typicode.com/posts");
        addDataToDOM(dataObj);
    } catch (err) {
        console.log(err);
    }
}
async function getUsers() {
    try {
        dataObj.users = await callApi("https://jsonplaceholder.typicode.com/users");
        addDataToDOM(dataObj);
    } catch (err) {
        console.log(err);
    }
}

function addDataToDOM(data) {
    if (data.users) {
        const usersTbl = document.getElementById("users");
        let rowIndex = 0;
        const newRow = usersTbl.insertRow(rowIndex);
        newRow.insertCell(0).innerHTML = "ID";
        newRow.insertCell(1).innerHTML = "Name";
        newRow.insertCell(2).innerHTML = "Email";
        data.users.forEach((user) => {
            const newRow = usersTbl.insertRow(++rowIndex);
            newRow.insertCell(0).innerHTML = user.id;
            newRow.insertCell(1).innerHTML = user.name;
            newRow.insertCell(2).innerHTML = user.email;
        });
    }

    if (data.posts) {
        const postsTbl = document.getElementById("posts");
        rowIndex = 0;
        const newRow = postsTbl.insertRow(rowIndex);
        newRow.insertCell(0).innerHTML = "ID";
        newRow.insertCell(1).innerHTML = "Title";
        newRow.insertCell(2).innerHTML = "Body";
        data.posts.forEach((post) => {
            const newRow = postsTbl.insertRow(++rowIndex);
            newRow.insertCell(0).innerHTML = post.id;
            newRow.insertCell(1).innerHTML = post.title;
            newRow.insertCell(2).innerHTML = post.body;
        });
    }
}
getPost();
getUsers();
