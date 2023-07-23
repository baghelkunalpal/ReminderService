const express = require('express');
const bodyPparser = require('body-parser');
const {PORT} = require('./config/serverConfig');

const {sendBasicEmail} = require('./services/email-service');

const setupAndStartServer = ()=>{
    const app = express();
    app.use(bodyPparser.json());
    app.use(bodyPparser.urlencoded({extended:true}));

    app.listen(PORT, ()=>{
        console.log(`The server is started on port ${PORT}`);

        sendBasicEmail(
            //  'support@noti.com',
            //  'recipient@example.com', // Set the recipient email address here
            //  'Test Email',
            //  'This is a test email sent using Nodemailer.',
        )
    });
}
setupAndStartServer();