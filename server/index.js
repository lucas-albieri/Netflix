const express = require("express")
const app = express()
const mysql = require("mysql")




app.use((reques, response, next) => {
    response.header('Access-Control-Allow-Origin', "*");
    response.header(
        'Access-Control-Allow-Headers',
        '*'
    );

    next();
})

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "lucas",
    database: "login",
})

app.use(express.json())



app.listen(8000, () =>{
    console.log("RODANDO NA PORTA 8000")
} )