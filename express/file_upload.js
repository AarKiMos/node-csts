const express = require("express");
const multer = require("multer");
const app = express();

const uploads = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "uploads");
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + "-" + Date.now()+".jpg");
    },
  }),
}).single("user_file");

app.post("/upload", uploads, (req, resp) => {
  resp.send("File Uplodad");
});

app.listen(5400);
