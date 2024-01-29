import nodemailer from 'nodemailer';
import formidable from 'formidable';

export default async (req, res) => {
  if (req.method === 'POST') {
    const form = new formidable.IncomingForm();

    form.parse(req, async (err, fields, files) => {
      if (err) {
        return res.status(500).json({ error: 'Error parsing form data.' });
      }

      const transporter = nodemailer.createTransport({
        // Configure your email service (e.g., Gmail, SMTP, etc.)
        service: 'Gmail',
        auth: {
          user: 'your-email@gmail.com',
          pass: 'your-password',
        },
      });

      const mailOptions = {
        from: 'your-email@gmail.com',
        to: 'amaansayyad@yahoo.com', // Destination email address
        subject: 'New Resume Submission',
        text: 'A new resume has been submitted.',
        attachments: [
          {
            filename: files.resume.name,
            content: fs.createReadStream(files.resume.path),
          },
        ],
      };

      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          return res.status(500).json({ error: 'Error sending email.' });
        }

        return res.status(200).json({ message: 'Resume submitted successfully.' });
      });
    });
  } else {
    res.status(405).json({ error: 'Method not allowed.' });
  }
};