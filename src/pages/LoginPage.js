
class LoginPage {
    constructor(page) {
      this.page = page;
    }
  
    get signInButton() {
      return this.page.locator('button:has-text("Sign in")');
    }
  
    get emailField() {
      return this.page.locator('input[placeholder="Email, phone, or Skype"]');
    }
  
    get nextButton() {
      return this.page.locator('input:has-text("Next")');
    }
  
    get passwordField() {
      return this.page.locator('input[placeholder="Password"]');
    }
  
    get signInSubmitButton() {
      return this.page.locator('input:has-text("Sign in")');
    }
  
    get yesButton() {
      return this.page.locator('input:has-text("Yes")');
    }

    async login(email, password) {
      await this.signInButton.click();
      await this.emailField.fill(email);
      await this.nextButton.click();
      await this.passwordField.fill(password);
      await this.signInSubmitButton.click();
      await this.yesButton.click();
    }
  }
  
  module.exports = LoginPage;
  