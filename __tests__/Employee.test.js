const Employee = require ('../lib/Employee.js');


test('create new employee object', () =>  {
  const employee = new Employee ('Dave', 'pablo@gmail.com');

  expect(employee.name).toBe('Dave');
  expect(employee.id).toEqual(expect.any(Number));
  expect(employee.email).toBe('pablo@gmail.com');
});


