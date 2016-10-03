import { GeographyjsAngularPage } from './app.po';

describe('geographyjs-angular App', function() {
  let page: GeographyjsAngularPage;

  beforeEach(() => {
    page = new GeographyjsAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
