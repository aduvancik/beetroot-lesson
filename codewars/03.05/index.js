// const dog = {
//   header: 1,
//   body: "big",
//   gav: (gav) => gav
// }

// console.log(dog.gav("gav-gav"));

  // const admin = {
  //   ryles:777,
  //   isAdmin() {
  //     return `I am admin ${this.name},my ryles is ${this.ryles}`;
  //   }
  // };

  // function User(name, age) {
  //   this.name = name;
  //   this.age = age;
  //   this.myInfo = function () {
  //   return "hello"
  //   }
  //   this.__proto__ = admin;
  // }

  // const u1 = new User("Oleg", 19);
  // const u2 = new User("Oleg2", 18);
  // const u3 = new User("Oleg3", 17);

  // console.log(u1.ryles, u1, u2.myInfo(), u3.isAdmin());

  // class User {
  //   constructor(name, age, admin = false) {
  //     this.name = name;
  //     this.age = age;
  //     this.admin = admin;
  //   }
  //   myInfo() {

  //     return (`${this.name}, ${this.age}, ${this.admin}`);
  //   }
  // }

  // class Moderator extends User {
  //   addPost() {
  //     console.log("new Post");
  //   }
  // }
  // const u1 = new User("Oleg", 19, true);
  // const u2 = new Moderator("Oleg1", 20);
  // console.log(u1.myInfo(),u2.name);

  // const doggy = {
  //   name: "Rox",
  //   color: "brown",
  //   paws: { right: 2, left: 2, },
  //   toys: [],
  
  //   sound: () => {
  //     console.log('Гав-гав!');
  //   },
  
  //   giveToy (newToy) {
  //     this.toys.push(newToy)
  //   },
  
  //   showToy () {
  //     console.log(this.toys);
  //   },

  //   deleteToys () {
  //     this.toys.splice(0);
  //   },
  //   traine (command, callbek) {
  //     this[command] = callbek;
  //   }
  // }
  // doggy.giveToy("play");
  // doggy.deleteToys();
  // doggy.showToy();
  // doggy.traine(klas, () => console.log("gav"));
  // doggy.klas();

    

  // function User(name, age) {
  //   this.name = name;
  //   this.age = age;
  //   this.myInfo = function () {
  //   return "hello"
  //   }
  //   this.__proto__ = admin;
  // }

  // const u1 = new User("Oleg", 19);
  // const u2 = new User("Oleg2", 18);
  // const u3 = new User("Oleg3", 17);

  // console.log(u1.ryles, u1, u2.myInfo(), u3.isAdmin());

  

