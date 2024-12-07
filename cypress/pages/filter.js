import Page from "./Page";

class FilterPage extends Page {
  constructor() {
    super();
    this.filterBtn = ".submenu__buttons .button[data-filter-bar-opener]";
    this.closeFilterBtn = ".cross[data-filter-bar-closer]";
    this.colorFilterBlackBtn = 'li[data-swatch-sort="3"]';
    this.itemColors = ".card__menu-wrapper";
  }

  checkFilterBlackColor() {
    cy.get(this.itemColors).each((block) => {
      cy.wrap(block).find(".color--black").should("exist");
    });
  }

  filter() {
    cy.get(this.filterBtn).click();
    cy.get(this.colorFilterBlackBtn).should("be.visible").click();
    cy.get(this.closeFilterBtn).click();
  }
}

export default FilterPage;
