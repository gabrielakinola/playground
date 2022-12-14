// setTimeout(() => {
//   console.log(`Two seconds are up`);
// }, 2000);

// const names = ["Andrew", "Gabriel", "Gerald", "Jen", "Drew"];
// const shortnames = names.filter((name) => {
//   return name.length <= 4;
// });
// console.log(shortnames);

// const geocode = (address, callback) => {
//   setTimeout(() => {
//     const data = {
//       latitude: 0,
//       longitude: 0,
//     };

//     callback(data);
//   }, 2000);
// };

// geocode("Philadelphia", (data) => {
//   console.log(data);
// });

//Challenge
// Goal: Mess around with the callback pattern
//
// 1. Define an add function that accepts the correct arguments
// 2. Use setTimeout to simulate a 2 second delay
// 3. After 2 seconds are up, call the callback function with the sum
// 4. Test your work!

// const add = (arg1, arg2, callback) => {
//   setTimeout(() => {
//     const sum = arg1 + arg2;
//     callback(sum);
//   }, 2000);
// };

// add(1, 4, (sum) => {
//   console.log(sum); // Should print: 5
// });

const doWorkCallback = (callback) => {
  setTimeout(() => {
    //callback(`This is my error`, undefined);
    callback(undefined, [1, 4, 7]);
  }, 2000);
};

doWorkCallback((err, result) => {
  if (err) {
    return console.log(err);
  }
  console.log(result);
});
