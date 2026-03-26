const nodemailer = require('nodemailer');

const sendEmail = async (options) => {
  // 1) Create a transporter
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USERNAME,
      password: process.env.EMAIL_PASSWORD,
    },
  });

  // 2) Define the email options
  const mailOptions = {
    from: 'Arsal <arsal@gmail.com>',
    to: options.email,
    subject: options.subject,
    text: options.message,
    //html: (we will do it later)
  };

  // 3) Actullay send the email with node emiler
  await transporter.sendMail(mailOptions);
};

module.exports = sendEmail;
