const express = require("express");
const EventEmitter = require("events");

const app = express();

const event = new EventEmitter();
let count = 0;

event.on("countAPI", () => {
  console.log("Count event recieved");
  console.log("Count: ", ++count);
});

app.get("/", (req, resp) => {
  resp.send("API called");
  event.emit("countAPI");
});

app.get("/search", (req, resp) => {
  resp.send("Search API called");
  event.emit("countAPI");

});

app.get("/help", (req, resp) => {
  resp.send("Help API called");
  event.emit("countAPI");

});

app.listen(5400);
