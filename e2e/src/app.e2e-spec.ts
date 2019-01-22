import { AppPage } from './app.po';
import { browser, logging } from 'protractor';
import { element } from '@angular/core/src/render3';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('Brastlewark Town');
  });

  it('should return Tobus Quickwhistle', function() {
    const gnomeName = 'Tobus Quickwhistle';
    page.sendKeysToNameFilter(gnomeName);
    expect(page.getFirstGnomeName()).toEqual(gnomeName);
    page.clearNameFilter();
  });

  it('should return Cogwitz Voidratchet', function() {
    const gnomeName = 'Cogwitz Voidratchet';
    page.sendKeysToNameFilter(gnomeName);
    expect(page.getFirstGnomeName()).toEqual(gnomeName);
    page.clearNameFilter();
  });

  it('should return Fizkin Voidbuster', function() {
    const profession = 'medic';
    const gnomeName = 'Fizkin Voidbuster';
    page.sendKeysToProfessionFilter1(profession);
    expect(page.getFirstGnomeName()).toEqual(gnomeName);
    page.clearProfessionFilter();
  });
});
