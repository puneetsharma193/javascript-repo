const langs = ["JS", "python", "java", "Cpp", "C", "C#"];
// langs.forEach(function (val) {
//   console.log(val);
// });

// langs.forEach((element) => {
//   console.log(element);
// });

// function printMe(val) {
//   console.log(val);
// }

// langs.forEach(printMe);

langs.forEach((item, index, arr) => {
  console.log(item, index, arr);
});
