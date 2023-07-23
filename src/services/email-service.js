const sender = require('../config/emailConfig');

const sendBasicEmail = (mailFrom, mailSubject, mailBody) => {
  sender.sendMail({
    from: mailFrom,
    to: mailBody, // Correct this to the recipient's email address
    subject: mailSubject,
    text: mailBody, // Assuming mailBody contains the email content
  });
};

module.exports = {
  sendBasicEmail,
};

/**
 * SMTP -> a@b.com
 * receiver-> d@e.com
 * 
 * from: support@noti.com
 */