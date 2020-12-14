const validator = require('validator');
const EmailValidator = require('./EmailValidator');

const makeSut = () => new EmailValidator();

describe('Email Validator', () => {
  test('Should return true if validator returns true', () => {
    const sut = makeSut();
    const isEmailValid = sut.isValid('validemail@email.com');
    expect(isEmailValid).toBe(true);
  });

  test('Should return false if validator returns false', () => {
    const sut = makeSut();
    validator.isEmailValid = false;
    const isEmailValid = sut.isValid('invalidemail@email.com');
    expect(isEmailValid).toBe(false);
  });

  test('Should call validator with correct email', () => {
    const sut = makeSut();
    sut.isValid('anyemail@email.com');
    expect(validator.email).toBe('anyemail@email.com');
  });
});
