import { Selector } from 'testcafe'; // import Selector

fixture `Navigation`.page `https://github.com/`;

test('Search Nuxt.js on github.com', async t => {
		// Test code
		const formSearch = await Selector('input.input-sm');
		await t.typeText(formSearch, 'Nuxt.js');
		await t.typeText(formSearch, String.fromCharCode(13));
});
