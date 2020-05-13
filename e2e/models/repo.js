import { Selector, t } from 'testcafe';

export default class RepoPage {
  constructor() {
    this.repos = Selector('.repo-list').child('li');;
  }

  async performSearch(textToSearch) {
    await t
      .typeText(this.searchForm, textToSearch)
      .typeText(this.searchForm, String.fromCharCode(13));
  }
}
