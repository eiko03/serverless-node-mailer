const nodemailer = require('nodemailer');
const serverless = require("serverless-http");
const express = require("express");
const { MAIL_HOST, MAIL_PORT, MAIL_USER, MAIL_PASS, MAIL_RECEIVER } = process.env;
const app = express();

const transport = nodemailer.createTransport({
    host: MAIL_HOST,
    port: MAIL_PORT,
    auth: {
        user: MAIL_USER,
        pass: MAIL_PASS,
    },
});


app.post("/", async (req, res, next) => {
    const html = `
	<h1>Serverless Mailer</h1>
	`;

    let info = await transport.sendMail({
        from: '"Chuck Norris" <req.body.email_from_name>',
        to: MAIL_RECEIVER,
        subject: req.body.subject,
        html,
    });

    return res.status(200).json({
        message: "Email Sent",
    });

});


app.use((req, res, next) => {
    return res.status(404).json({
        error: "Not Found",
    });
});

module.exports.handler = serverless(app);



module.exports.sendEmail = async event => {


};
