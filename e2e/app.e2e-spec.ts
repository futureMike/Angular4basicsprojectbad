import { BasicsprojectPage } from './app.po';

describe('basicsproject App', () => {
  let page: BasicsprojectPage;

  beforeEach(() => {
    page = new BasicsprojectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
