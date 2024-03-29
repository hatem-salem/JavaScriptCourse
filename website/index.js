function walkDog(callback) {
  setTimeout(() => {
    console.log("You walk the dog 🐕");
    callback();
  }, 1500);
}
function cleanKitchen(callback) {
  setTimeout(() => {
    console.log("You clean the kitchen 🧹");
    callback();
  }, 2500);
}
function takeoutTrash(callback) {
  setTimeout(() => {
    console.log("You take out the trash 🚮");
    callback;
  }, 500);
}

walkDog(() => {
  cleanKitchen(() => {
    takeoutTrash(() => {
      console.log("You finished all the chores!");
    });
  });
});