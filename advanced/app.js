"use strict";
// Intersection types
const el = {
    name: 'Max',
    privileges: ['create-server'],
    startDate: new Date()
};
// Classes
class Department {
    constructor(n) {
        this.name = n;
    }

    
}
const accounting = new Department('Accounting');
console.log(accounting);
