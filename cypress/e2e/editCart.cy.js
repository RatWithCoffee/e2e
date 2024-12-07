import CartPage from "../pages/cart";
import ItemPage from "../pages/item";

describe("Редактирование корзины", () => {
  let cartPage;
  let itemPage;

  beforeEach(() => {
    cartPage = new CartPage();
    itemPage = new ItemPage();

    cy.viewport(1200, 750);

    itemPage.setUrl("https://arnypraht.com/category/backpacks/pakku-chernyij/");
    itemPage.visitPage();
  });

  it("7.1 Изменение количество товара в непустой корзине ", () => {
    itemPage.addToCart();
    cy.wait(2000);
    itemPage.visitCart();

    cartPage.checkCartIsNotEmpty();
    cartPage.plusClick();

    cartPage.minusClick();

    cartPage.checkAmount(1);
  });

  it("7.2 Удаление товара из корзины", () => {
    itemPage.addToCart();
    cy.wait(2000);
    itemPage.visitCart();

    cartPage.checkCartIsNotEmpty();
    cartPage.plusClick();

    cartPage.removeItemFromCart();
  });

});
