// JavaScript source code
//2
function Hotel (id, name, description, country, city, addedDate, startPrice){
    this.id = id;
    this.name = name;
    this.description = description;
    this.country = country;
    this.city = city;
    this.addedDate = addedDate;
    this.startPrice = startPrice;
}

Hotel.prototype.Display = function () {
    console.log(this.name + " " + this.country + " " + this.addedDate);
}

Hotel.prototype.DisplayDescription = function () {
    console.log(this.name + ": " + this.description);
}

var h1 = new Hotel(1, "Coon", "the coon hotel", "Romania", "Iasi", new Date(), 13.14);
//h1.Display();

var h2 = new Hotel(2, "Bds", "general meetings", "Isarael", "Tel Aviv", new Date(), 2342.324);
//h2.Display();

var h3 = new Hotel(3, "Gand", "Run you fools!", "Mordor", "Shire", new Date(), 4334.124);
//h3.Display();
//h3.DisplayDescription();


//3
var array = [h1];
console.log(array);

array.push(h2);
array.push(h3);
console.log(array);

array.pop();
array.shift();
console.log(array);

array.unshift(h3);
console.log(array);

var hotel_json = JSON.stringify(array);
console.log("JSON stringify: ");
console.log(hotel_json);

var hotel_js = JSON.parse(hotel_json);
console.log("JS object: ");
console.log(hotel_js);