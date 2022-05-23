import { mount } from "@cypress/vue";
import App from "../src/App.vue";
import Navbar from "../src/components/shared/Navbar.vue";

// describe("App", () => {
//     it(`It renders all components`, () => {
//         mount(App);

//     });

// });

// describe("Navbar", () => {
//     it(`renders the navigation links`, () => {
//         mount(Navbar);
//         cy.get("li").contains("Home");
//         cy.get("li").contains("Users");
//     });

// });

describe("Clicking Links", () => {
    it(`should sent to home`, () => {
        mount(App);
        // mount(Navbar);
        cy.visit('/home')

        // cy.get("li").contains("Home").click();
        cy.log('renders leading paragraph') // if you really need this
        cy.get("p").contains("A newsroom where you have full control");



    });


    // it(`renders leading paragraph`, () => {
    //     cy.get("p").contains("A newsroom where you have full control");
    // });

    // it(`renders leading paragraph`, () => {
    //     cy.get("p").contains("A newsroom where you have full control");
    // });

    // it(`renders dummy button`, () => {
    //     cy.get("button").contains("Home button");
    // });

});


// describe('Home URL', () => {


//     it(`renders leading header`, () => {
//         cy.visit('/home')

//         cy.get("h1").contains("Top-rated PR software for industry leading organizations");
//     });

//     it(`renders leading paragraph`, () => {
//         cy.get("p").contains("A newsroom where you have full control");
//     });

//     it(`renders dummy button`, () => {
//         cy.get("button").contains("Home button");
//     });
// });