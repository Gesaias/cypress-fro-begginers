import assert from 'assert';

class RegisterForm {
  elements = {
    titleInput: () => cy.get('#title'),
    titleFeedback: () => cy.get('#titleFeedback'),
    imageUrlInput: () => cy.get('#imageUrl'),
    urlFeedback: () => cy.get('#urlFeedback'),
    submitBtn: () => cy.get('#btnSubmit'),
  };

  typeTitle(text: string | undefined) {
    if (!text) return;
    this.elements.titleInput().clear().type(text);
  }

  typeUrl(text: string | undefined) {
    if (!text) return;
    this.elements.imageUrlInput().clear().type(text);
  }

  clickSubmit() {
    this.elements.submitBtn().click();
  }
}

const registerForm = new RegisterForm();
const colors = {
  error: 'rgb(220, 53, 69)',
  success: '',
};

describe('Image Registration', () => {
  describe('Submitting an image with invalid inputs', () => {
    after(() => {
      cy.clearAllLocalStorage();
    });

    const input: { title: string; url: string } = {
      title: '',
      url: '',
    };

    it('Given I am on the image registration page', () => {
      cy.visit('https://erickwendel.github.io/vanilla-js-web-app-example');
    });

    it(`When I enter "${input.title}" in the title field`, () => {
      registerForm.typeTitle(input.title);
    });

    it(`Then I enter "${input.url}" in the URL field`, () => {
      registerForm.typeUrl(input.url);
    });

    it(`Then I click the submit button`, () => {
      registerForm.clickSubmit();
    });

    it(`Then I should see "Please type a title for the image" message above the title field`, () => {
      registerForm.elements
        .titleFeedback()
        .should('contains.text', 'Please type a title for the image');
    });

    it(`And I should see "Please type a valid URL" message above the imageUrl field`, () => {
      registerForm.elements
        .urlFeedback()
        .should('contains.text', 'Please type a valid URL');
    });

    it(`And I should see an exclamation icon in the title and URL fields`, () => {
      registerForm.elements.titleInput().should(([element]) => {
        const styles: CSSStyleDeclaration = window.getComputedStyle(element);
        const border: string = styles.getPropertyValue('border-right-color');
        assert.strictEqual(border, colors.error);
      });
    });
  });
});
