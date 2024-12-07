import Page from "./Page";

class RegistrationPage extends Page {
  constructor() {
    super();
    this.setUrl("https://arnypraht.com/register/");
    this.emailInput = "#office-auth-register-email";
    this.passwordInput = "#office-register-form-password";
    this.phoneInput = "#office-auth-register-mobilephone";
    this.submitButton = "#office-auth-register > div.form__main > div.envelope__footer > button";
    this.dateSelect = "#office-auth-register > div.form__main > div.page__main-cols > div:nth-child(2) > div.fieldset__field.field-row.field.field--date-combo.field--ready > div.date-select";
    this.successMessage = "#jGrowl";
    this.errorMessage = ".office-message-error";
  }

  enterEmail(email) {
    cy.get(this.emailInput).clear().type(email);
  }

  enterPass(password) {
    cy.get(this.passwordInput).clear().type(password);
  }

  enterPhone(phone) {
    cy.get(this.phoneInput).clear().type(phone);
  }

  enterDate() {
    cy.get(`${this.dateSelect} > span:nth-child(2) > span.selection`).click();
    cy.get("li.select2-results__option").contains("04").click();
    cy.get(`${this.dateSelect} > span:nth-child(4) > span.selection`).click();
    cy.get("li.select2-results__option").contains("Мар").click();
    cy.get(`${this.dateSelect} > span:nth-child(6) > span.selection`).click();
    cy.get("li.select2-results__option").contains("2023").click();
  }

  enterGender() {
    cy.get("#office-auth-register > div.form__main > div.page__main-cols > div:nth-child(2) > div.fieldset__field.field-row.choice > label:nth-child(1)").click();
  }

  confirmPolicy() {
    cy.get("#office-auth-register > div.form__main > label > span.checkbox__switch.checkbox__box").click();
  }

  submit() {
    cy.get(this.submitButton).click();
  }

  click(element) {
    cy.get(element).click();
  }

  register(email, password, phone) {
    if (email) this.enterEmail(email);
    if (password) this.enterPass(password);
    if (phone) this.enterPhone(phone);
    this.enterDate();
    this.enterGender();
    this.confirmPolicy();
    this.submit();
  }

  checkSuccessMsg() {
    cy.get(this.successMessage).should("be.visible");
    cy.get(".jGrowl-message").should("contain.text", "Ссылка для входа в личный кабинет отправлена на указанный e-mail.");
  }

  checkErrorMsg() {
    cy.get(this.successMessage).should("be.visible");
    cy.get(this.errorMessage).should("be.visible");
  }

  checkErrorPassMsg() {
    cy.get(this.passwordInput)
      .should("have.prop", "validationMessage")
      .then((validationMessage) => {
        expect(validationMessage).to.not.be.empty;
      });
  }

  checkErrorPhoneMsg() {
    cy.get(this.phoneInput).should("have.prop", "validationMessage").and("not.be.empty");
  }

  checkErrorEmailMsg() {
    cy.get(this.emailInput)
      .should("have.prop", "validationMessage")
      .then((validationMessage) => {
        expect(validationMessage).to.not.be.empty;
      });
  }
}

export default RegistrationPage;
