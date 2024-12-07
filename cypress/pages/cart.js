import Page from "./Page";

class CartPage extends Page {
 

  constructor() {
    super();
    this.setUrl("https://arnypraht.com/cart/");
    this.emptyCartLabel = "В вашей корзине пусто";
    this.amountInCart = "span[data-quantity-number]";
    this.plusBtn = "button[data-quantity-plus]";
    this.minusBtn = "button[data-quantity-minus]";
    this.removeBtn = "button[data-cart-remove]";
  }

  checkEmptyCart() {
    cy.get("h1").should("have.text", this.emptyCartLabel);
  }

  checkCartIsNotEmpty() {
    cy.get("h1").should("not.have.text", this.emptyCartLabel);
  }

  checkAmount(amount) {
    cy.get(this.amountInCart).should("have.text", amount);
  }

  removeItemFromCart() {
    cy.get(this.removeBtn).click();
  }

  plusClick() {
    cy.get(this.plusBtn).click();
  }

  minusClick() {
    cy.get(this.minusBtn).click();
  }
}

export default CartPage;
