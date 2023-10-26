const express = require('express');

const app = express();

app.use((req, res, next) => {
    console.log("IT WORKS");
})

app.listen(3000);