const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'shmaeng.dev@gmail.com',
        subject: 'Thanks for joining in!',
        text: `Welcome to the app, ${name}. Let me Know how you get along with the app.`
    });
};

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'shmaeng.dev@gmail.com',
        subject: 'Sorry to see you go~!',
        text: `good bye. ${name}`
    })
};

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}