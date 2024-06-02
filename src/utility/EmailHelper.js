const nodemailer = require("nodemailer");

const EmailSend= async (EmailTo,EmailText,EmailSubject) => {

   let transport = nodemailer.createTransport({
        host:"sadafkhan4825@gmail.com",
        port:25,
        secure:false,
        auth: {user:"sadafkhan4825@gmail.com", pass : 'sadaf'},
        tls:{rejectUnauthorized:false}
    })

    let mailOptions={
        from:" Sadaf Khan",
        to:EmailTo,
        subject:EmailSubject,
        text:EmailText
    }

    return await transport.sendMail(mailOptions)

}