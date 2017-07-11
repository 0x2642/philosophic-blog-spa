import { PhilosophicBlogSpaPage } from './app.po';

describe('philosophic-blog-spa App', () => {
  let page: PhilosophicBlogSpaPage;

  beforeEach(() => {
    page = new PhilosophicBlogSpaPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
