// Import Employee class with require()
const Employee = require('../lib/Employee');
const employee = new Employee('test', 1, 'test@test.com');

// Test instantiate Employee instance
test("to instantiate employee instance", () => {
  expect(employee instanceof Employee).toBe(true);
});

// Test setting name of an employee
test("to set the name of employee", () => {
  expect(employee.name).toBe('test');
});

// Test setting id of an employee
test("to set id of employee", () => {
  expect(employee.id).toBe(1);
});

// Test setting email of an employee
test("to set email of employee", () => {
  expect(employee.email).toBe('test@test.com');
});

// Test get name method
test("to get name", () => {
  expect(employee.getName()).toBe('test');
});

// Test get id method
test("to get id", () => {
  expect(employee.getID()).toBe(1);
});

// Test get email method
test("to get email", () => {
  expect(employee.getEmail()).toBe('test@test.com');
});

// Test get role method
test("to get role", () => {
  expect(employee.getRole()).toBe('Employee');
});
