import nodemailer from 'nodemailer';

export default async (req, res) => {
  if (req.method === 'POST') {
    const { name, email } = req.body;

    // Create a nodemailer transporter with your email service settings
    const transporter = nodemailer.createTransport({
      service: 'YourEmailService',
      auth: {
        user: 'your@email.com',
        pass: 'your_password',
      },
    });

    const mailOptions = {
      from: 'your@email.com',
      to: 'amaaansayyad@yahoo.com',
      subject: 'New Waitlist Submission',
      text: `Name: ${name}\nEmail: ${email}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Email sending failed:', error);
        res.status(500).send('Email sending failed');
      } else {
        console.log('Email sent:', info.response);
        res.status(200).send('Email sent successfully');
      }
    });
  } else {
    res.status(405).end();
  }
};
