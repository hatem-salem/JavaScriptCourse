function walkDog() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const dogWalked = false;
      if (dogWalked) {
        resolve("You walk the dog 🐕");
      } else {
        reject("You DIDN't Walk the dog");
      }

    }, 1500);

  });

}
function cleanKitchen() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const kitchenCleaned = false;
      if (kitchenCleaned) {
        resolve("You clean the kitchen 🧹");
      } else {
        reject("You DIDN'T clean the kitchen");
      }
    }, 2500);

  });
}
function takeoutTrash() {
  return new Promise((resolve, reject) => {

    setTimeout(() => {
      const trashTakenout = true;
      if (trashTakenout) {
        resolve("You take out the trash 🚮");
      } else {
        reject("You DIDN'T take out the trash");
      }
    }, 500);

  });
}
walkDog()
  .then(value => { console.log(value); return cleanKitchen(); })
  .then(value => { console.log(value); return takeoutTrash(); })
  .then(value => { console.log(value); console.log("You finished all chores!"); })
  .catch(error => console.error(error));
console.log("Hello World");
console.log(walkDog());