class PStack {
  #id;
  constructor() {
    this.#id = 1;
    this._persons = [];
  }

  showId() {
    return this.#id;
  }
}

class PStackImpl extends PStack {
  constructor() {
    super();
  }

  // Getter for persons property
  get persons() {
    return this._persons;
  }

  // Setter for persons property
  set persons(personsArray) {
    this._persons = personsArray;
  }

  push(p) {
    return this._persons.push(p);
  }

  pop() {
    if (this._persons.length > 0) {
      return this._persons.pop().age;
    }
    // Handle case when _persons is empty
    return null;
  }
}

let pstack = new PStackImpl();
pstack.persons = [{name: 'Jojo', age: 21}, {name: 'Gabi', age: 29}];
pstack.push({name: 'Dein', age: 19});
console.log(pstack.pop()); // Should log 19 (age of 'Dein')
console.log(pstack.pop()); // Should log 29 (age of 'Gabi')
console.log(pstack.persons); // Should log [{name: 'Jojo', age: 21}]
