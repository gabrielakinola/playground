const evnt = {
  name: "Birthday Party",
  GuestList: function () {
    console.log(`Guest List for ${this.name}`);
    console.log(this);
  },
};

const evnt2 = {
  name: "Birthday Party",
  GuestList2() {
    console.log(`Guest List for ${this.name}`);
    console.log(this);
  },
};

const evnt3 = {
  name: "Birthday Party",
  guestlist: ["Andrew", "Gabriel", "Johnson"],
  GuestList3() {
    console.log(`Guest List for ${this.name}`);
    this.guestlist.forEach((guest) => {
      console.log(`${guest} is attending ${this.name}`);
    });
  },
};

evnt3.GuestList3();

(() => {
  console.log("Hello World");
})();

const Person = function (first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
  this.name = function () {
    return `${this.firstName} ${this.lastName}`;
  };
};

const myself = new Person("Gabriel", "Akinola", "23", "Blue");

console.log(myself.name());


class Car{
  constructor()
}