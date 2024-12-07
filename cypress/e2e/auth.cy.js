import AuthPage from "../pages/auth";

describe("Авторизация", () => {
  let authPage;

  beforeEach(() => {
    authPage = new AuthPage();
    authPage.visitPage();
    cy.viewport(1200, 750);
  });

  it("2.1 Авторизация пользователя в верными данными", () => {
    authPage.auth("mashglotova@mail.ru", "123456789");
    cy.url().should("include", "/overview");
  });

  it("2.2 Авторизация с некорректным паролем", () => {
    authPage.auth("mashglotova@mail.ru", "kdsfjdsfn");
    authPage.checkErrMsg();
  });

  it("2.3 Авторизация с некорректной почтой", () => {
    authPage.auth("sfddfaf@mail.ru", "123456789");
    authPage.checkErrMsg();
  });
});
