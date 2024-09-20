import fs from 'fs';
import inquirer from 'inquirer';
import qr from 'qr-image';

// inquirer to get user input
inquirer
	.prompt([{ message: 'Type in your URL: ', name: 'URL' }])
	.then((answers) => {
		const url = answers.URL;

		// qr-image to turn url to image
		const qr_svg = qr.image(url, { type: 'png' });
		qr_svg.pipe(fs.createWriteStream('qr-code.png'));
		console.log('The QR Code has been generated successfully!');

		// save url to text file using native fs
		fs.writeFile(
			'url_user-input.txt',
			'Here is the url you used to generate the QR Code: \n' + url,
			(err) => {
				if (err) throw err;
				console.log('The file has been saved!');
			}
		);
	})
	.catch((error) => {
		console.log('Error: ', error);
	});
