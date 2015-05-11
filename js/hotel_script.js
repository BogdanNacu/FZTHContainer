// JavaScript source code
var obj = {
    id: 1,
    name: "UCB2",
    description: "Un hotel foo baz bar.",
    country: "Romania",
    city: "Iasi",
    addedDate: new Date(), //new Date(2015, 6, 5),
    startPrice: 3.1415
};

console.log(obj);
console.log("ID: " + obj.id);
console.log("Name: " + obj.name);
console.log(obj.country + " " + obj.city);
console.log("Added Date: " + obj["addedDate"]);
console.log("Price: " + obj["startPrice"]);
console.log("Description: " + obj["description"]);