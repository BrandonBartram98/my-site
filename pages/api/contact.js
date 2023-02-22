export default function (req, res) {
	let nodemailer = require('nodemailer')
	const transporter = nodemailer.createTransport({
		port: 465,
		host: 'smtp.gmail.com',
		auth: {
			user: 'bartrambrandon@gmail.com',
			pass: process.env.GPASSWORD,
		},
		secure: true,
	})

	const mailData = {
		from: 'bartrambrandon@gmail.com',
		to: 'brandonbartram@outlook.com',
		subject: `Message From ${req.body.email}`,
		text: req.body.message,
		html: `<div>${req.body.message}</div>`,
	}

	transporter.sendMail(mailData, function (err, info) {
		if (err) console.log(err)
		else console.log(info)
	})

	res.status(200)
    res.send()
}
