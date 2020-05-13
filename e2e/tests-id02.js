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


let testName = 'Test ' + 'id02' +  ' - search ' + textWeSearch + ' on  ' + url;
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

// right answer is NO repo with name Vue.js, test must fail
//run
// npx testcafe firefox e2e/tests-id02.js -L


