export class UdemyPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('udemy-app h1')).getText();
  }
}
