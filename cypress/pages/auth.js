import Page from "./Page";

class AuthPage extends Page {
  constructor() {
    super();
    this.setUrl("https://arnypraht.com/login/");
    this.emailInput = "#field-5";
    this.passwordInput = "#field-6";
    this.submitBtn = "#office-auth-login > div.envelope__footer > button";
    this.errMsg = "#jGrowl > div.jGrowl-notification.alert.ui-state-highlight.ui-corner-all.office-message-error";
    this.passErr = "#office-auth-register > div.form__main > div.page__main-cols > div:nth-child(1) > div:nth-child(3) > div.field__message";
    this.emailErr = "#office-auth-register > div.form__main > div.page__main-cols > div:nth-child(1) > div:nth-child(1) > div.field__message";
  }

  enterEmail(email) {
    cy.get(this.emailInput).clear().type(email);
  }

  enterPass(password) {
    cy.get(this.passwordInput).clear().type(password);
  }

  submit() {
    cy.get(this.submitBtn).click();
  }

  click(element) {
    cy.get(element).click();
  }

  auth(email, password) {
    if (email) this.enterEmail(email);
    if (password) this.enterPass(password);
    this.submit();
  }

  checkErrMsg() {
    cy.get(this.errMsg).should("be.visible");
  }


}

export default AuthPage;
