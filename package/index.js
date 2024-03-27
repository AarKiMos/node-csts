// 8. to 10. package, modules and nodemon

// const colors = require("colors");
// console.log("package.json".red);
// console.warn("this is a warning");

// 12. Input from command line

// console.log("CSTS")
// console.log(process.argv)
const fs = require("fs");
const input = process.argv;

if (input[2] == "add") {
  fs.writeFileSync(input[3], input[4]);
} else if (input[2] == "remove") {
  fs.unlinkSync(input[3])
}
else{
  console.error('Invalid input')
}
