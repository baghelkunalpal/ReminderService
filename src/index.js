const express = require('express');
const bodyPparser = require('body-parser');
const {PORT} = require('./config/serverConfig');

const setupAndStartServer = ()=>{
    const app = express();
    app.use(bodyPparser.json());
    app.use(bodyPparser.urlencoded({extended:true}));

    app.listen(PORT, ()=>{
        console.log(`The server is started on port ${PORT}`);
    })
}
setupAndStartServer();