const express = require("express");

const path = require("path");

const app = express()

app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, '../index.html'));

app.get("/styles.css", (req, res) => {
        res.sendFile(path.join(__dirname, "../styles.css"));
      });

})





const port = process.env.PORT || 4005

app.listen(port, () => {
    console.log(`My app is JAMMIN on port numbero ${port}`)
})