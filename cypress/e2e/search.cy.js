import SearchPage from "../pages/search";

describe("Поиск", () => {
  let searchPage;

  beforeEach(() => {
    searchPage = new SearchPage();
    searchPage.visitPage();
    cy.viewport(1200, 750);
  });

  it("4.1 Поиск несуществующего товара", () => {
    const searchPattern = "xcghjk";
    searchPage.search(searchPattern);
    searchPage.checkResultError();
  });

  it("4.2 Поиск существующего товара", () => {
    const searchPattern = "joy";
    searchPage.search(searchPattern);
    searchPage.checkResultSuccess(searchPattern);
  });

  
});
