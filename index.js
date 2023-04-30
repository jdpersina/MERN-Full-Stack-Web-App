'use strict';

const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.urlencoded({
    extended: true
}))

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
        <section>
            <h2>Contact</h2>
            <article>
                
            </article>
        </section>
    </main>
    <footer>
        <p>&copy; 2023 Dan Persina, Junior at Oregon State.<br> This website is a project for CS 290.</p>
    </footer>
</body>
</html>
`;

app.post("completedForms", (req, res) => {
    
})

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});