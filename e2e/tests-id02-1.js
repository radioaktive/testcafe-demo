import { Selector } from 'testcafe'; // import Selector

import HomePage from './models/home';
import ResultsPage from './models/results';

const homePage = new HomePage();
const resultsPage = new ResultsPage();

const url = 'https://github.com/';
const textWeSearch = 'Vue.js';
let repoWeFind = {};

fixture `Navigation`
	.page(url);


let testName = 'Test ' + 'id02-1' +  ' - search ' + textWeSearch + ' on  ' + url;
// softer and wider conditions
const textWeSearchRasp = [];
textWeSearchRasp[0] = textWeSearch.toLowerCase();
textWeSearchRasp[1] = textWeSearch.split(".", 1).toString().toLowerCase();


test(testName, async t => {
		// Test code
		await homePage.performSearch(textWeSearch);
		console.log(textWeSearchRasp);

		repoWeFind =  await resultsPage.searchRepo(textWeSearchRasp[1]);
		console.log(repoWeFind.name);
		console.log(repoWeFind.link);

		await t.expect(textWeSearchRasp).contains(repoWeFind.name);
});

// softer and wider conditions
//run
// npx testcafe firefox e2e/tests-id02-1.js -L


