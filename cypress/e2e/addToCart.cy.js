import CartPage from "../pages/cart";
import ItemPage from "../pages/item";

describe("Добавление товара в корзину", () => {
  let cartPage;
  let itemPage;

  beforeEach(() => {
    cartPage = new CartPage();
    itemPage = new ItemPage();

    cy.viewport(1200, 750);

    itemPage.setUrl("https://arnypraht.com/category/backpacks/pakku-chernyij/");
    itemPage.visitPage();
  });

  it("6.1 Добавление товара в корзину", () => {
    itemPage.addToCart();
    itemPage.addToCart();
    itemPage.addToCart();
    cy.wait(2000);

    itemPage.visitCart();
    cartPage.checkNotEmptyCart();
    cartPage.checkAmount(3);
  });
});
