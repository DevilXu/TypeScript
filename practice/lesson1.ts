class Animal {
  color: String,
  constructor(color) {
    this.color = color;
  }
  move() {
    console.log('I begin to move');
  }
}

class Cat extends Animal {

}

const yellowCat = new Cat('红色');
yellowCat.move();
console.log(yellowCat.color);