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

  sendKeysToNameFilter(name: string) {
    element(by.id('mat-input-0')).sendKeys(name);
  }

  sendKeysToProfessionFilter1(profession: string) {
    element(by.id('mat-input-1')).sendKeys(profession);
  }

  clearNameFilter() {
    element(by.id('mat-input-0')).clear();
  }

  clearProfessionFilter() {
    element(by.id('mat-input-1')).clear();
  }

  getFirstGnomeName() {
    return element(by.css('mat-list app-gnome-profile mat-card-title')).getText();
  }

}
