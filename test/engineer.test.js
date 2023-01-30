// Import Engineer class with require()
const Engineer = require('../lib/Engineer');
const engineer = new Engineer('test', 2, 'test@test.com', 'username');

// Test setting github account
test("to set github account", () => {
  expect(engineer.github).toBe('username');
});

// Test get role method
test("for get role method", () => {
  expect(engineer.getRole()).toBe('Engineer');
});

// Test get github method
test("for get github method", () => {
  expect(engineer.getGithub()).toBe('username');
});