// const person: {
//   name: string;
//   age: number;
// } = {
// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string]

enum Role { ADMIN, READ_ONLY, AUTHOR }

const person = {
  name: "Max",
  age: 30,
  hobbies: ['Sports', 'Cooking'],
  role: Role.ADMIN
}

if(person.role === Role.ADMIN) {
  console.log('is admin');
} 


// person.role.push('admin')
// person.role[0] = 10;

// console.log(person.role)

let favoriteActivities : any[];
favoriteActivities = ['Sports']
