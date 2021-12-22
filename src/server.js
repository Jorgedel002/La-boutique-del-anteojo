const express = require('express');
const mysql = require("mysql");
const app = express();

const ReactDOMServer = require('react-dom/server')
app.use(express.json())
app.get('/', (req, res) => {
    res.send("hello world express")
})

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "password",
    database: "LoginSystem",
});


app.listen(3000, () => {
    console.log("Server port 3000");
})