describe('login spacs', () => {
  it('visita pagina de login', () => {
    // Arrange

    // Act
    cy.visit('/');

    // Assert
  });

  it('al hacer click en el input hace focus', () => {
    // Arrange

    // Act
    cy.visit('/');
    cy.get('input[name=user]').click();

    // Assert
    cy.get('input[name=user]').should('have.focus');
  });

  it('login correcto', () => {
    // Arrange
    const user = 'admin';
    const password = 'test';

    // Act
    cy.visit('/');
    cy.get('input[name=user]').as('userInput');
    cy.get('input[name=password]').as('passwordInput');

    cy.get('@userInput').type(user);
    cy.get('@passwordInput').type(password);
    cy.get('button[type=submit]').click();

    // Assert
    cy.url().should('include', '/submodule-list');
  });

  it('login incorrecto', () => {
    // Arrange
    const user = '1234';
    const password = '1234';

    // Act
    cy.visit('/');
    cy.get('input[name=user]').as('userInput');
    cy.get('input[name=password]').as('passwordInput');

    cy.get('@userInput').type(user);
    cy.get('@passwordInput').type(password);
    cy.get('button[type=submit]').click();

    // Assert
    cy.get('@userInput').should('have.value', user);
    cy.get('@passwordInput').should('have.value', password);
  });
});
