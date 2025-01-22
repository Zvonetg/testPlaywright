class SyskitPage {
    constructor(page) {
      this.page = page; 
    }

    get signInButton() {
      return this.page.locator('//*[@id="app"]/div[2]/button/div');
    }
  
    get usernameField() {
      return this.page.locator('input[name="username"]');
    }
  
    get passwordField() {
      return this.page.locator('input[name="password"]');
    }
  
    get submitButton() {
      return this.page.locator('button[type="submit"]');
    }
  
    get cookieCloseButton() {
      return this.page.locator('[id="cookie_action_close_header"]');
    }

    async openPage(url) {
      await this.goto('https://syskit-point-e2e-task-2025.syskit365demo.com');
    }

    async clickSignInButton() {
      await this.signInButton.click();
    }
  
    async closeCookiePopup() {
      await this.cookieCloseButton.click();
    }

    async login(username, password) {
      await this.usernameField.fill(username);
      await this.passwordField.fill(password);
      await this.submitButton.click();
    }
  
    async signInVisible() {
      return await this.signInButton.isVisible();
    }
  }
  
  module.exports = SyskitPage;