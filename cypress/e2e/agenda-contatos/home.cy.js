/// <reference types="cypress" />

describe("Testes de inclusão de contatos", () => {
  beforeEach(() => {
    cy.visit("https://agenda-contatos-react.vercel.app/");
  });

  it("Deve incluir um novo cadastro", () => {
    cy.get('[type="text"]').type("Rafael Almeida");
    cy.get('[type="email"]').type("dealmeida.silva@hotmail.com");
    cy.get('[type="tel"]').type("(11)92085-0975");
    cy.get(".adicionar").click();
  });
  it("Deve alterar o cadastro", () => {
    cy.get(".edit").first().click();
    cy.get('input[type="text"]').clear();
    cy.get('[type="email"]').clear();
    cy.get('[type="tel"]').clear();
    cy.get('[type="text"]').type("Rafael Almeida");
    cy.get('[type="email"]').type("dealmeida.silva@hotmail.com");
    cy.get('[type="tel"]').type("(11)92085-0975");
    cy.get(".alterar").click();
  });

  it("Deve excluir um contato", () => {
    cy.get(".delete").first().click();
  });
});
