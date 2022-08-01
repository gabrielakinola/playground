const fs = require("fs");
const book = {
  title: "Ego is the enemy",
  author: "Ryan Holiday",
};

const bookJSON = JSON.stringify(book);
// console.log(bookJSON);
//fs.writeFileSync("1-json.json", bookJSON);

const dataBuffer = fs.readFileSync("1-json.json");
const dataJSON = dataBuffer.toString();

const data = JSON.parse(dataJSON);

data.name = "Gabriel";
data.age = "23";

newJsonData = JSON.stringify(data);
console.log(newDataJson);

fs.writeFileSync("1-json.json", newJsonData);
// const parseddata = JSON.parse(bookJSON);
// console.log(parseddata);
