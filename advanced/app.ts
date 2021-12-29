// Classes
class Department {
  name: string;

  constructor(n: string) {
    this.name = n;
  }

  describe() {
    console.log('Department ' + this.name);
    
  }
}

const clothing = new Department('Clothing')


clothing.describe()



