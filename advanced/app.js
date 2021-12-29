// Classes
var Department = /** @class */ (function () {
    function Department(n) {
        this.name = n;
    }
    Department.prototype.describe = function () {
        console.log('Department ' + this.name);
    };
    return Department;
}());
var clothing = new Department('Clothing');
console.log(clothing);

