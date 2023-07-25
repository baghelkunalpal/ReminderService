const express = require('express');
const bodyPparser = require('body-parser');
const {PORT} = require('./config/serverConfig');

const {  createChannel } = require('./utils/messageQueue');
// const { REMINDER_BINDING_KEY } = require('./config/serverConfig');
const TicketController = require('./controllers/ticket-controller')
const m = require('./models/notificationticket');
// const jobs = require('./utils/job');
const setupAndStartServer = async()=>{
    const app = express();
    app.use(bodyPparser.json());
    app.use(bodyPparser.urlencoded({extended:true}));
    // const channel = await createChannel();

    app.post('/api/v1/tickets',TicketController.create);

    app.listen(PORT, ()=>{
        console.log(`The server is started on port ${PORT}`);
       
        // Jobs();
        
    });
}
setupAndStartServer();