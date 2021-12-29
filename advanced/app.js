// Classes
var Department = /** @class */ (function () {
    function Department(n) {
        this.employees = [];
        this.name = n;
    }
    Department.prototype.describe = function () {
        console.log('Department ' + this.name);
    };
    Department.prototype.addEmployee = function (employee) {
        this.employees.push(employee);
    };
    Department.prototype.printEmployeeInformation = function () {
        console.log(this.employees.length);
        console.log(this.employees);
    };
    return Department;
}());
// const clothing = new Department('Clothing')
var accounting = new Department('Accounting');
accounting.addEmployee('Frank');
accounting.addEmployee('Kristen');
accounting.printEmployeeInformation();
// const accountingCopy = { name: 's', describe: accounting.describe };
