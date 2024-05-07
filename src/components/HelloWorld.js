import React from "react";
function HelloWorld() {
  class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }

    sayHello() {
      return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
  }

  const person = new Person("John", 25);

  return (
    <>
      <div>Hello, World!</div>
      <div>{person.sayHello()}</div>
    </>
  );
}
export default HelloWorld;
