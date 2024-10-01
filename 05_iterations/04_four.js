const myObject = {
  js: "Javascript",
  cpp: "C++",
  rb: "ruby",
  swift: "swift by apple",
};

for (const key in myObject) {
  //   console.log(key);
  console.log(`${key} for ${myObject[key]}`);
}

const arr = ["js", "java", "cpp", "py"];
for (const key in arr) {
  console.log(`${arr[key]} at ${key} `);
}
