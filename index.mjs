'use strict';

import express from 'express';
import fetch from 'node-fetch';
import 'dotenv/config';
import asyncHandler from 'express-async-handler';
import {products} from './products.js';


const app = express();
const PORT = process.env.PORT;

app.use(express.urlencoded({
    extended: true
}));

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
        <a href="order.html">Order</a>
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

function findProductData(chosenProduct) {
    for (const item of petProducts) {
        if (item.product === chosenProduct) {
            return item;
        }
    }
}

app.post("/completedOrders", (req, res) => {
    const productOrdered = findProductData(req.body.product);
    const name = req.body.firstlastname;
    const email = req.body.email;
    const address = req.body.address;
    const instructions = req.body.delivInstructions;
    const quantity = req.body.quantity;
    const formattedPrice = productOrdered.price.toLocaleString('en-US', {style: 'currency', currency: 'USD'});
    const amountDue = req.body.quantity * productOrdered.price;
    const formattedTotal = amountDue.toLocaleString('en-US', {style: 'currency', currency: 'USD'});

    res.send(`${htmlTop}
        <h2>Thank you for your order, ${name}</h2>
        <p>Thank you for your order of <strong>${quantity}</strong> <strong>${productOrdered.product}</strong> by <strong>${productOrdered.company}</strong>.
        at a price of <strong>${formattedPrice}</strong> The amount due for your order is <strong>${formattedTotal}</strong></p>
        <p>Your order will be shipped to <strong>${address}</strong> and further details will be sent to <strong>${email}</strong></p>
        <p>Your delivery instructions:</p>
        <p><strong>${instructions}</strong></p>
        ${htmlBottom}`);   
});

// getting random data using async and fetch
app.get('/random-user', asyncHandler(async (req, res) => {
    const response = await fetch('https://randomuser.me/api/');
    const data = await response.json();
    res.send(data);

}));

// status 500 error if API not working
app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send(`<h2>Uh oh</h2> <p>Something didn't work, try again.</p>`)
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});