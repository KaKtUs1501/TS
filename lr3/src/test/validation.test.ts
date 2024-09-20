import { expect } from 'chai';
import { Validation } from '../validation'; // Імпортуйте ваш шлях до Validation

describe('Validation Class', () => {
  it('should validate a book with errors', () => {
    const errors = Validation.validateBook('', '', 'notANumber');
    expect(errors).to.have.property('bookTitle');
    expect(errors).to.have.property('bookAuthor');
    expect(errors).to.have.property('bookYear');
  });

  it('should validate a book without errors', () => {
    const errors = Validation.validateBook('Test Title', 'Test Author', '2023');
    expect(Object.keys(errors).length).to.equal(0);
  });

  it('should validate a user with errors', () => {
    const errors = Validation.validateUser('', 'invalidEmail');
    expect(errors).to.have.property('userName');
    expect(errors).to.have.property('userEmail');
  });

  it('should validate a user without errors', () => {
    const errors = Validation.validateUser('Test User', 'test@example.com');
    expect(Object.keys(errors).length).to.equal(0);
  });
});
