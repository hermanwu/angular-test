import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  // use async to disable e2e test.
  // https://github.com/angular/protractor/issues/4307
  it('should display welcome message', async () => {
    page.navigateTo();

    page.getCardElement().then(size => {
      console.log(size);
    });
    //console.log(page.getCardElement());
    //expect(page.getCardElement().count()).toEqual(2, 'expected two cards');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser
      .manage()
      .logs()
      .get(logging.Type.BROWSER);
    expect(logs).not.toContain(
      jasmine.objectContaining({
        level: logging.Level.SEVERE,
      } as logging.Entry)
    );
  });
});
