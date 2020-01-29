const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
	const browser = await puppeteer.launch();
	const page = await browser.newPage();
	const root_dir = path.resolve(__dirname, '..')
	const dest = root_dir + '/Deck-Tales.pdf';

	await page.goto(`file://${root_dir}/_site/index.html`, {waitUntil: 'networkidle2'});

	console.log('Building PDF...')
	await page.waitFor(1000);

	await page.pdf({
		path: dest,
		format: 'A4',
		printBackground: true,
	});

	await browser.close();
	console.log('Done!')
})();