// for of

// ["","",""]
// [{},{},{}]

const greetings = "Hello World";
for (const greet of greetings) {
  // console.log(`${greet}`);
}

// Maps

const map = new Map(); // To iterate maps we use for of loop , this do not work for objects
map.set("UP", "UTTAR PRADESH");
map.set("UK", "UTTRAKHAND");
map.set("DL", "DELHI");

// console.log(map);

for (const [key, value] of map) {
  // console.log(key, ":", value);
}

const myLangs = [
  {
    langName: "Javascript",
    langFileName: "js",
  },
  {
    langName: "C++",
    langFileName: "cpp",
  },
  {
    langName: "Python",
    langFileName: "py",
  },
];

myLangs.forEach((item) => {
  console.log(item.langName);
});
