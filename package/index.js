// 8. to 10. package, modules and nodemon

// const colors = require("colors");
// console.log("package.json".red);
// console.warn("this is a warning");

// --------------------------------------
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

// --------------------------------------
// 13. Show File List

// const fs = require("fs");
// const path = require("path");
// const dirPath = path.join(__dirname, "files");
// console.log(dirPath);

// for (let i = 0; i < 5; i++) {
//   fs.writeFileSync(
//     dirPath+"/"+`hello_${i}.txt`,
//     `This is a simple test file.\nThis is file number ${i}`
//   );
// }

// fs.readdir(dirPath, (err, files) => {
//   console.log(files);
// });

// fs.readdir(dirPath, (err, files) => {
//   files.forEach((file) => {
//     console.log("File name is ", file);
//     console.log(
//       "File content is :",
//       fs.readFileSync(path.join(dirPath, file), "utf-8")
//     );
//     console.log("");
//   });
// });

// --------------------------------------
// 14. CRUD with FileSystem

// const { clear } = require("console");
// const fs = require("fs");
// const path = require("path");

// const dirPath = path.join(__dirname, "crud_fs");
// const filePath = path.join(dirPath, "apple.txt");

// Create
// fs.writeFileSync(filePath, "This is a simple text file");

// Read
// fs.readFile(filePath, "utf-8", (err, file) => {
//   console.log(file);
// });

// Update
// fs.appendFile(filePath, " and file name is apple.txt", (err) => {
//   if (!err) console.log("file is updated");
// });

// Update (Rename)
// fs.rename(filePath, path.join(dirPath, "fruit.txt"), (err) => {
//   if (!err) console.log("file name is updated");
// });

// Delete
// fs.unlinkSync("<yourFileName>");

// --------------------------------------
// 15. Async Programming

// console.log("Start exe...");

// setTimeout(() => {
//   console.log("Process exe...");
// }, 2000);

// console.log("Complete exe...");

// --------------------------------------
// 16. Handle Async data

let a = 20;
let b = 0;

let waitingData = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(30);
  }, 2000);
});

waitingData.then((data) => {
  b = data;
  console.log(a + b);
});
