import { Selector, t } from 'testcafe';

export default class HomePage {
  constructor() {
    this.searchForm = Selector('input.input-sm');
  }

  async performSearch(textToSearch) {
    await t
      .typeText(this.searchForm, textToSearch)
      .typeText(this.searchForm, String.fromCharCode(13));
  }
}
