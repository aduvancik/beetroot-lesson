//https://www.codewars.com/kata/643ea1adef815316e5389d17/train/javascript
//const quadrant_segment = (A, B) => {return !(Math.sign(A.x) === Math.sign(B.x) && Math.sign(A.y) === Math.sign(B.y))}

//https://www.codewars.com/kata/52597aa56021e91c93000cb0/train/javascript
//const arr = [false,1,0,1,2,0,1,3,"a"];
//console.table(arr.sort((a, b) => -(a !== 0 && b === 0)));

//https://www.codewars.com/kata/554ca54ffa7d91b236000023/train/javascript
// function deleteNth(arr, n) {
//   let itterator = 0;//скільки цифр однакових
//   for (let index = 0; index < arr.length; index++) {
//     for (let secondIndex = arr.length - 1; secondIndex >= 0; secondIndex--) {
//       if (arr[index] === arr[secondIndex]) {
//         itterator++;
//         if (itterator >= n) {
//           itterator = -1;
//           arr.splice(secondIndex, 1);
//         }
//       }
//     }
//   }
//   return arr
// }
// console.log(deleteNth([1,1,2,2,5,6,7,8], 1));
/**
 * сортування
 * @param {Array} arr to sorted
 * @param {Number} n 
 * @returns {Array} arr
 */
// function deleteNth(arr, n){ 
//   const newArray = [];

//   arr.forEach(function(item) {
//     if (newArray.filter(function(nestedItem,index) {
//       console.log(`${item} = ${nestedItem}`);
//       return item === nestedItem;
//     }).length < n) {
//       newArray.push(item);
//       console.log(newArray);
//     }
//   });
  
  
  
//   return newArray;
// }

/*
ООП
*/
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

  class User {
    constructor(name, age, admin = false) {
      this.name = name;
      this.age = age;
      this.admin = admin;
    }
    myInfo() {

      return (`${this.name}, ${this.age}, ${this.admin}`);
    }
  }

  class Moderator extends User {
    addPost() {
      console.log("new Post");
    }
  }
  const u1 = new User("Oleg", 19, true);
  const u2 = new Moderator("Oleg1", 20);
  console.log(u1.myInfo(),u2.name);