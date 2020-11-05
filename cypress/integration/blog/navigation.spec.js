context("Navigation", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000");
    })

    it("should open home page", () => {
        cy.title().should("eq", "React App");
    })

    it("should open home page", () => {
        cy.get(".navitem-home").click();
        cy.get("h1").should("have.text", "Hello, welcome to my blog")
    })

    it("should open about page", () => {
        cy.get(".navitem-about").click();
        cy.get("h1").should("have.text", "About me")
    })

    it("should open articles page", () => {
        cy.get(".navitem-articles").click();
        cy.get("h1").should("have.text", "Articles")
    })

    it("should open other article from article page", () => {
        cy.get(".navitem-articles").click();
        cy.get("[name='learn-react']").click();
        cy.get('h1').should("have.text", "The Fastest Way to Learn React");
        cy.get("[name='learn-node']").click();
        cy.get('h1').should("have.text", "How to Build a Node Server in 10 Minutes");
    })

    it("should display page not found for page that does not exist", () => {
        cy.visit("http://localhost:3000/hodor");
        cy.get("h1").should("have.text", "404: Page not found");
    })

    context("TalTech Search", () => {
        it("should search for person by firstname", () => {
            cy.visit("/");
            cy.get(".main-container .top-search .form-control").type("German{enter}");
            cy.get('.t-icon__plus-minus').click();
            cy.get(".contacts__expand .contacts__listing > li:nth-child(1)").should("have.text", "külalisõppehobujõud");
        })
    })

})