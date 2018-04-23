import { MusicExperimentPage } from './app.po';

describe('music-experiment App', function() {
  let page: MusicExperimentPage;

  beforeEach(() => {
    page = new MusicExperimentPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
