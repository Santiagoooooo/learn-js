class PStack {
  #id;
  #persons;

  constructor() {
    this.#id = 1;
    this.#persons = []; 
  }

  showId() {
    return this.#id;
  }

  get persons() {
    return this.#persons;
  }

  set persons(newPersons) {
    this.#persons = newPersons;
  }
}

class PStackImpl extends PStack {
  constructor() {
    super();
  }

  push(p) {
    let persons = this.persons;
    persons.push(p);
    this.persons = persons;
    return persons.length;
  }

  pop() {
    let persons = this.persons;
    if (persons.length > 0) {
      let person = persons.pop();
      this.persons = persons;
      return person.age;
    }
    return undefined; 
  }
}

let pstack = new PStackImpl();
pstack.persons = [{name: 'Jojo', age: 21}, {name: 'Gabi', age: 29}];
pstack.push({name: 'Dein', age: 19});
console.log(pstack.pop()); 
console.log(pstack.pop()); 
console.log(pstack.persons);
