const transporter = require("../nodeMailer/transporter");


const sendMail = (req, res) => {

    const Name = req.body.username;
    const Email = req.body.email;
    const subject = req.body.subject;
    const msg = req.body.message;

    console.log(Email);

    let mail = transporter.sendMail({
        from: 'azraunt@gmail.com',
        to: `${Email}`,
        subject: "Message",
        html: `<h1>Naseem Al-Roudha (Message from ${Name}</h1>
                <h4>Subject : ${subject}</h4> <br>
               <p><b>${msg}</b></p>`
    });


        // const mailOptions = {
        //   from: "docadvisormail@gmail.com", // sender address
        //   to: req.body.email, // list of receivers
        //   subject: `Welcome to DocAdvisor`, // Subject line
        //   html: html,
        // };



    res.render('contact');
}

const sendMailArabic = (req, res) => {

    const Name = req.body.username;
    const Email = req.body.email;
    const subject = req.body.subject;
    const msg = req.body.message;

    console.log(Email);

    let mail = transporter.sendMail({
        from: 'azraunt@gmail.com',
        to: `${Email}`,
        subject: "Message",
        html: `<h1>Naseem Al-Roudha (Message from ${Name})</h1>
                <h4>Subject : ${subject}</h4> <br>
               <p><b>${msg}</b></p>`
    });


        // const mailOptions = {
        //   from: "docadvisormail@gmail.com", // sender address
        //   to: req.body.email, // list of receivers
        //   subject: `Welcome to DocAdvisor`, // Subject line
        //   html: html,
        // };



    res.render('contactarabic');
}

module.exports = {

    sendMail,
    sendMailArabic
  
}