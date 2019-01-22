import { browser, by, element, until, protractor } from 'protractor';

const EC = protractor.ExpectedConditions;
const timeout = 10000;

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getTitleText() {
    return element(by.css('app-root mat-toolbar span')).getText();
  }

  toggleFilters() {
    element(by.id('mat-expansion-panel-header-0')).click();
  }

  sendKeysToNameFilter(name: string) {
    element(by.id('mat-input-0')).sendKeys(name);
  }

  sendKeysToHairColorFilter(hairColor: string) {
    element(by.id('mat-input-1')).sendKeys(hairColor);
  }

  sendKeysToGenderFilter(gender: string) {
    element(by.id('mat-input-2')).sendKeys(gender);
  }

  sendKeysToProfessionFilter1(profession: string) {
    element(by.id('mat-input-3')).sendKeys(profession);
  }

  clearNameFilter() {
    element(by.id('mat-input-0')).clear();
  }

  clearHairColorFilter() {
    element(by.id('mat-input-1')).clear();
  }

  clearGenderFilter() {
    element(by.id('mat-input-2')).clear();
  }

  clearProfessionFilter1() {
    element(by.id('mat-input-3')).clear();
  }

  getFirstGnomeName() {
    return element(by.css('mat-list app-gnome-profile mat-card-title')).getText();
  }

}
