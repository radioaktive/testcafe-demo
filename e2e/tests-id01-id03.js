import { Selector } from 'testcafe'; // import Selector

import HomePage from './models/home';
import ResultsPage from './models/results';

const homePage = new HomePage();
const resultsPage = new ResultsPage();

const url = 'https://github.com/';
const textWeSearch = 'Nuxt.js';
let repoWeFind = {};

fixture `Navigation`
	.page(url);


let testName = 'Test ' + 'id01' +  ' - search ' + textWeSearch + ' on  ' + url;
const textWeSearchRasp = textWeSearch.toLowerCase();
//const textWeSearchRasp = textWeSearch.split(".", 1).toString().toLowerCase();


test(testName, async t => {
		// Test code
		await homePage.performSearch(textWeSearch);
		console.log(textWeSearchRasp);

		repoWeFind =  await resultsPage.searchRepo(textWeSearchRasp);
		console.log(repoWeFind.name);
		console.log(repoWeFind.link);
		await t.expect(repoWeFind.name).eql(textWeSearchRasp);
});




testName = 'Test ' + 'id03' +  ' - open ' + textWeSearch + ' on  ' + url;
const topics = ['vue', 'ssr', 'server-rendering'];
//const topics = ['vue'];

test(testName, async t => {
		// Test code
		await t.navigateTo(url + repoWeFind.link);
		let val;
		for (val of topics) {
			await t.expect(Selector('.topic-tag').withExactText(val).exists).eql(true);
			console.log(val);
		}
		 
});

//run
// npx testcafe firefox e2e/tests-id01-id03.js -L

