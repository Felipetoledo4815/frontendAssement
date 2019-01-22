import { AppPage } from './app.po';
import { browser, logging } from 'protractor';
import { element } from '@angular/core/src/render3';
import { last } from '@angular/router/src/utils/collection';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display Town Name', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('Brastlewark Town');
  });

  it('should return Milli Quickwhistle', function() {
    page.toggleFilters();
    const gnomeName = 'Milli Quickwhistle';
    const lastName = 'Quickwhistle';
    const profession = 'miner';
    page.sendKeysToNameFilter(lastName);
    page.sendKeysToProfessionFilter1(profession);
    expect(page.getFirstGnomeName()).toEqual(gnomeName);
    page.clearNameFilter();
    page.clearProfessionFilter1();
    page.toggleFilters();
  });

  it('should return Cogwitz Voidratchet', function() {
    page.toggleFilters();
    const gnomeName = 'Cogwitz Voidratchet';
    page.sendKeysToNameFilter(gnomeName);
    expect(page.getFirstGnomeName()).toEqual(gnomeName);
    page.clearNameFilter();
    page.toggleFilters();
  });

  it('should return Fizkin Voidbuster', function() {
    const lastName = 'Voidbuster';
    const hairColor = 'green';
    const gender = 'female';
    const profession = 'medic';
    const gnomeName = 'Fizkin Voidbuster';
    page.toggleFilters();
    page.sendKeysToNameFilter(lastName);
    page.sendKeysToHairColorFilter(hairColor);
    page.sendKeysToGenderFilter(gender);
    page.sendKeysToProfessionFilter1(profession);
    expect(page.getFirstGnomeName()).toEqual(gnomeName);
    page.clearNameFilter();
    page.clearHairColorFilter();
    page.clearGenderFilter();
    page.clearProfessionFilter1();
    page.toggleFilters();
  });


});
