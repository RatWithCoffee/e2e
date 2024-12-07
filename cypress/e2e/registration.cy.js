import RegistrationPage from "../pages/registration";

describe("Регистрация", () => {
  let registrationPage;
  const randomEmail = `somemail_${Math.random().toString(36).substring(2, 10)}@email.com`;
  const randomPhone = `+7${Math.floor(1000000000 + Math.random() * 9009999999)}`;
  const validPassword = "valid_pass123123";
  const shortPassword = "123";

  beforeEach(() => {
    registrationPage = new RegistrationPage();
    cy.viewport(1200, 750);
    registrationPage.visitPage();
  });

  it("1.1 Регистрация пользователя с верными данными", () => {
    registrationPage.register(randomEmail, validPassword, randomPhone);
    registrationPage.checkSuccessMsg();
  });

  it("1.2 Регистрация с пустым полем логина", () => {
    registrationPage.register("", validPassword, randomPhone);
    registrationPage.checkErrorEmailMsg();
  });

  it("1.3 Регистрация с пустым полем пароля", () => {
    registrationPage.register(randomEmail, "", randomPhone);
    registrationPage.checkErrorPassMsg();
  });

  it("1.4 Регистрация с пустым полем телефона", () => {
    registrationPage.register(randomEmail, validPassword, "");
    registrationPage.checkErrorPhoneMsg()
  });
});
