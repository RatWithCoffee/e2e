import FilterPage from "../pages/filter";

describe("Фильтрация", () => {
  let filterPage;

  beforeEach(() => {
    filterPage = new FilterPage();
    cy.viewport(1200, 750);
    filterPage.setUrl("https://arnypraht.com/category/bags/");
    filterPage.visitPage();
  });

  it("5.1 Фильтрация отображаемых товаров в разделе 'Деним' по цвету", () => {
    filterPage.filter();
    cy.wait(2000);
    filterPage.checkFilterBlackColor();
  });
});
