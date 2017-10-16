export class HungryBear {

  constructor(name) {
    this.name = name;
    this.foodLevel = 10;
  }

  setHunger() {
    setInterval(() => {
      this.foodLevel--;
    }, 1000);
  }

  didYouGetEaten() {
    if (this.foodLevel > 0) {
    return false;
    } else {
    return true;
    }
  }

  feed() {
    this.foodLevel = 13;
  }

}


////////

// let bear = new Object;
// bear.name = "Fuzzy Wuzzy";
//
// bear.introduction = function() {
//   console.log("Name in the outer function: " + this.name);
//   let doThis = () => {
//     console.log("Name in the inner function: " + this.name);
//     return `My name is ${this.name}`
//   }
//   return doThis()
// }
//
// setTimeout(function(){
//   alert("Hello friend! Maybe you should sign up for our newsletter!");
// }, 20000);
//
// setInterval(function(){
//   //check and display time every second!
// }, 1000);
//
// bear.introduction();
