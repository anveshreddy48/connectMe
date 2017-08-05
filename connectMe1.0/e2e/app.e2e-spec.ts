import { ConnectMe1.0Page } from './app.po';

describe('connect-me1.0 App', () => {
  let page: ConnectMe1.0Page;

  beforeEach(() => {
    page = new ConnectMe1.0Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
