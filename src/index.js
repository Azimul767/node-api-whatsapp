const express = require("express");
const apiRoute = require ("./controller/routes/router")


const app = express ();

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/', apiRoute);

app.listen(PORT, () => { console.log ('Hello:' + PORT)} );