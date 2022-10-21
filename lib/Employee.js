class Employee {
  constructor (name,id,email,title) {

    this.name = name;
    this.title = 'Employee';
    this.email = email;
    this.id = id;
}


getName() {
  return this.name;
}

getEmail(){
  return this.email;
}

getId() {
  return this.id;
}

getRole() {
  return this.title;
}

}

module.exports = Employee;
