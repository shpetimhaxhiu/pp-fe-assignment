import { mount } from "@cypress/vue";
import Home from "../src/views/Home.vue";

describe("Home", () => {
    it(`renders leading header`, () => {
        mount(Home);
        cy.get("h1").contains("Top-rated PR software for industry leading organizations");
    });

    it(`renders leading paragraph`, () => {
        mount(Home);
        cy.get("p").contains("A newsroom where you have full control");
    });

    it(`renders dummy button`, () => {
        mount(Home);
        cy.get("button").contains("Home button");
    });

});