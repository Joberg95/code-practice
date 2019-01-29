class Person {
    constructor(firstName, lastName) {
      this.firstName = firstName;
      this.lastName = lastName;
    }

      fullName() {
          return `${this.firstName} ${this.lastName}`
      }
   }
   
let person = new Person('Jocke', 'Berglind')
person.fullName();