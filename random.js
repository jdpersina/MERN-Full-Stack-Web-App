'use strict'

// Will show rows of data in a table using tbody id "randomUser"

function showUserTable(user) {
    randomUser.innerHTML += `
        <tr>
        <td><img src=${user.picture.thumbnail} alt="Random Portrait" /></td>
        <td>
            <a href="mailto:${user.email}">
            ${user.name.first}
            ${user.name.last}</a>
        </td>
        <td>${user.phone}</td>
        <td>${user.location.city}</td>
        </tr>
        `;
}

async function getRandomUser(event) {
    event.preventDefault();
    const targetId = event.target.getAttribute('id');

    const url = targetId ==='fromBrowser' ? "https://randomuser.me/api"
        : "/random-user"
    try {
        const response = await fetch(url);
        const data = await response.json();

        if(response.status == 200) {
            showUserTable(data.results[0]);
        }
    } catch (error) {
        console.error(error)
    }
}

// adding link listener
document.addEventListener('DOMContentLoaded', () => {
    const fromBrowserLink = document.getElementById('fromBrowser');
    fromBrowserLink.addEventListener('click', getRandomUser);

    const fromServerLink = document.getElementById('fromServer');
    fromServerLink.addEventListener('click', getRandomUser);
});