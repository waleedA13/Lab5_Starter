// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// isPhoneNumber tests
test('(123) 456-7890 is a valid phone number', () => {
  expect(isPhoneNumber('(123) 456-7890')).toBe(true);
});

test('333-333-3333 is a valid phone number', () => {
  expect(isPhoneNumber('333-333-3333')).toBe(true);
});

test('12345 is not a valid phone number', () => {
  expect(isPhoneNumber('12345')).toBe(false);
});

test('phone is not a valid phone number', () => {
  expect(isPhoneNumber('phone')).toBe(false);
});

// isEmail tests
test('user@example.com is a valid email', () => {
  expect(isEmail('user@example.com')).toBe(true);
});

test('hello@world.org is a valid email', () => {
  expect(isEmail('hello@world.org')).toBe(true);
});

test('missing@ is not a valid email', () => {
  expect(isEmail('missing@')).toBe(false);
});

test('no-at-sign.com is not a valid email', () => {
  expect(isEmail('no-at-sign.com')).toBe(false);
});

// isStrongPassword tests
test('Abcd1234 is a strong password', () => {
  expect(isStrongPassword('Abcd1234')).toBe(true);
});

test('pass_word is a strong password', () => {
  expect(isStrongPassword('pass_word')).toBe(true);
});

test('123 is not a strong password (starts with number and too short)', () => {
  expect(isStrongPassword('123')).toBe(false);
});

test('ab is not a strong password (too short)', () => {
  expect(isStrongPassword('ab')).toBe(false);
});

// isDate tests
test('1/1/2020 is a valid date', () => {
  expect(isDate('1/1/2020')).toBe(true);
});

test('12/31/2000 is a valid date', () => {
  expect(isDate('12/31/2000')).toBe(true);
});

test('2020-01-01 is not a valid date format', () => {
  expect(isDate('2020-01-01')).toBe(false);
});

test('hello is not a valid date', () => {
  expect(isDate('hello')).toBe(false);
});

// isHexColor tests
test('#FF0000 is a valid hex color', () => {
  expect(isHexColor('#FF0000')).toBe(true);
});

test('abc is a valid hex color', () => {
  expect(isHexColor('abc')).toBe(true);
});

test('#ZZZZZZ is not a valid hex color', () => {
  expect(isHexColor('#ZZZZZZ')).toBe(false);
});

test('12345 is not a valid hex color', () => {
  expect(isHexColor('12345')).toBe(false);
});
