import { Selector, t } from 'testcafe';

export default class ResultsPage {
	constructor() {
		this.reposSelector = Selector('.repo-list').child('li');;
	}

	async searchRepo(text) {
		let resultRepo = {};		
		resultRepo.name = "";
		resultRepo.link = "";
		resultRepo.selector = "";
		const repos = await this.reposSelector;
		const reposCount = await repos.count;
		console.log(reposCount);
		for (let i = 1; i <= reposCount; i++) { 
			let linkSelector = 'li.repo-list-item:nth-child(' + i + ') > div:nth-child(2) > div:nth-child(1) > a:nth-child(1)';
			let linkSelectorExists = await Selector(linkSelector).exists;
			if(linkSelectorExists){
				let linkItem = await Selector(linkSelector);
				let linkItemText = await linkItem.innerText;
				let linkItemTextSplits = linkItemText.split(/[\\\/]/);
				console.log(linkItemTextSplits);
				let repoName = linkItemTextSplits[linkItemTextSplits.length -1].toLowerCase();
				if (repoName == text){
					resultRepo.name = repoName;
					resultRepo.link = linkItemText;
					resultRepo.selector = linkSelector;
				}
					
			}
		}
		return resultRepo;
	}
}
