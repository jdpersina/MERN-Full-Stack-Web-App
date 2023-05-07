'use strict';

const express = require('express');
const app = express();
const PORT = 3000;
const petProducts = require('./products.js').products;

app.use(express.urlencoded({
    extended: true
}));

//app.post("/completedForms", (req, res) => {
    //console.log(req.body);
    ////res.send(req.body);
//});

app.use(express.static('public'));

let htmlTop = `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="robots" content="nofollow, noindex">
    <title>Dan Persina</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel='stylesheet' type='text/css' media='screen' href='main.css'>
    <script src='main.js'></script>
</head>
<body>
    <header>
        <h1>Dan Persina</h1>
    </header>
    <nav>
        <a href="index.html">Home</a>
        <a href="gallery.html">Gallery</a>
        <a href="contact.html">Contact</a>
    </nav>
    <main>
`;

let htmlBottom = `
</main>
    <footer>
        <p>&copy; 2023 Dan Persina, Junior at Oregon State.<br> This website is a project for CS 290.</p>
    </footer>
</body>
</html>
`;

app.post("/completedForms", (req, res) => {
    const name = req.body.firstlastname;
    const email = req.body.email;
    const find = req.body.find;
    const likes = req.body.likes;
    const thoughts = req.body.thoughts;
    const mailingList = req.body.mailingList;

    res.send(`${htmlTop}
        <h2>Hey there ${name}</h2>
        <p>Thank you so much for your feedback on my site. I recorded that you learned of this site through <strong>${find}</strong>, 
        and I've recorded your email as <strong>${email}</strong> in case I need to reach out to you. You liked 
        <strong>${likes}</strong> about this site, and we recorded your thoughts for our consideration as well:</p>
        <p><strong>${thoughts}</strong></p>
        <p>You responded <strong>${mailingList}</strong> to subscribing for site updates.</p>
        <p>Thank you for your time, and I hope you'll visit again soon.</p>
        ${htmlBottom}`);   
});

app.post("/completedOrders", (req, res) => {
    const name = req.body.firstlastname;
    const email = req.body.email;
    const address = req.body.address;
    const instructions = req.body.delivInstructions;
    const product = req.body.product;
    const quantity = req.body.quantity;

    res.send(`${htmlTop}
        <h2>Hey there ${name}</h2>
        <p>Thank you sfor your order of. I recorded that you learned of this site through <strong>${find}</strong>, 
        and I've recorded your email as <strong>${email}</strong> in case I need to reach out to you. You liked 
        <strong>${likes}</strong> about this site, and we recorded your thoughts for our consideration as well:</p>
        <p><strong>${thoughts}</strong></p>
        <p>You responded <strong>${mailingList}</strong> to subscribing for site updates.</p>
        <p>Thank you for your time, and I hope you'll visit again soon.</p>
        ${htmlBottom}`);   
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});