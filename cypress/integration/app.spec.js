/// <reference types="cypress" />

// Welcome to Cypress!
//
// This spec file contains a variety of sample tests
// for a todo list app that are designed to demonstrate
// the power of writing tests in Cypress.
//
// To learn more about how Cypress works and
// what makes it such an awesome testing tool,
// please read our getting started guide:
// https://on.cypress.io/introduction-to-cypress

describe('App visiting', () => {
    before(() => {
        cy.visit('http://localhost:3000/')
    })

    it('displays logo of PressPage', () => {
        cy.get('.navbar-brand img').should('have.length', 1)
    })

    it('displays two navigations links', () => {
        cy.get('.navbar-nav li')
            .should('have.length', 2)
            .last()
            .should('have.text', 'Users List')
    })

    context('Home page clicking', () => {
        before(() => {
            cy.contains("Home").click()
        })
        it('loads page header', () => {
            cy.get("h1").contains('Top-rated PR')
        })
        it('loads two page paragraphs', () => {
            cy.get("p.text-muted").should("have.length", 2)
        })
        it('loads Home button', () => {
            cy.get("button")
                .should('have.text', 'Home button')
        })
    })

    context('Users list page visiting', () => {
        before(() => {
            cy.visit('http://localhost:3000/users')
        })
        it('loads page header', () => {
            cy.get("h2").contains('Users list')
        })
        it('loads 10 cards', () => {
            cy.get(".row-cols-1 .col").should("have.length", 10)
        })



        it('clicking delete button should remove users from the list', () => {

            cy.get('.row-cols-1 .col .btn').each(($el, index, $list) => {

                cy.wrap($el).click()
                cy.log(`Deleted: ${index + 1} of ${$list.length}`)

            })
        })

        it('all users are deleted', () => {
            cy.get(".row-cols-1 .col").should("have.length", 0)
        })
    })





})