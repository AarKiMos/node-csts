// 8. to 10. package, modules and nodemon

// const colors = require("colors");
// console.log("package.json".red);
// console.warn("this is a warning");

// 12. Input from command line

// console.log("CSTS")
// console.log(process.argv)
// const fs = require("fs");
// const input = process.argv;

// if (input[2] == "add") {
//   fs.writeFileSync(input[3], input[4]);
// } else if (input[2] == "remove") {
//   fs.unlinkSync(input[3])
// }
// else{
//   console.error('Invalid input')
// }

// 13. Show File List
const fs = require("fs");
// fs.writeFileSync("apple.txt", "this is a apple file");
const path = require("path");
const dirPath = path.join(__dirname, "files");
console.log(dirPath);

for (let i = 0; i < 5; i++) {
  fs.writeFileSync(
    dirPath+"/"+`hello_${i}.txt`,
    `This is a simple test file.\nThis is file number ${i}`
  );
}
