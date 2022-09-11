const pages = [
    'configuration.html#Configuration-File',
    'legacy-configuration',
  ];


describe('Cypress Visual Testing', () =>

    pages.forEach((page) => {
        it(`Should match previous screenshot '${page} Page'`, () => {
            cy.visit(`/guides/references/${page}`);
            cy.matchImageSnapshot();
        })
    })

    // it('should compare screenshot of the entire page', () => {
    //     cy.visit('www.google.com')
    //     cy.compareSnapshot('home-page-with-threshold', 0.2)
    // })


    // it('should compare screenshot from a given element', () => {
    //     cy.visit('www.google.com')
    //     cy.get('#report-header').hideElement() // hideElement(false) to unhide
    //     cy.compareSnapshot('search-bar-element')
    // })
)