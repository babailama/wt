import { WtPage } from './app.po';

describe('wt App', () => {
  let page: WtPage;

  beforeEach(() => {
    page = new WtPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
