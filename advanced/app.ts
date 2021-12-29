// Classes
class Department {
  public name: string;
  private employees: string[] = [];

  constructor(n: string) {
    this.name = n;
  }

  describe(this: Department) {
    console.log('Department ' + this.name);
  }

  addEmployee(employee: string) {
    this.employees.push(employee)
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

// const clothing = new Department('Clothing')
const accounting = new Department('Accounting')
accounting.addEmployee('Frank')
accounting.addEmployee('Kristen')
accounting.printEmployeeInformation()
// const accountingCopy = { name: 's', describe: accounting.describe };


