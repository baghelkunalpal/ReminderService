const express = require('express');
const bodyPparser = require('body-parser');
const {PORT} = require('./config/serverConfig');

// const {sendBasicEmail} = require('./services/email-service');

const TicketController = require('./controllers/ticket-controller')

const setupAndStartServer = ()=>{
    const app = express();
    app.use(bodyPparser.json());
    app.use(bodyPparser.urlencoded({extended:true}));

    app.post('/api/v1/tickets',TicketController.create);

    app.listen(PORT, ()=>{
        console.log(`The server is started on port ${PORT}`);
        // Jobs();
        
    });
}
setupAndStartServer();