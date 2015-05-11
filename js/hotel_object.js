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
var h2 = new Hotel(2, "Bds", "general meetings", "Isarael", "Tel Aviv", new Date(), 2342.324);
var h3 = new Hotel(3, "Gand", "Run you fools!", "Mordor", "Shire", new Date(), 4334.124);
var h4 = new Hotel(2, "Ramada", "general meetings", "Isarael", "Bucharest", new Date(), 1111.324);


//4
var hotel_list = [h1];

function addHotel(hotelll) {
    hotel_list.push(hotelll);
}

function updateHotel(_hotel) {
    for (var i = 0; i < hotel_list.length; i++)
        if (hotel_list[i].id == _hotel.id)
            hotel_list[i] = _hotel;
}

function removeHotel(_id) {
    for (var i = 0; i < hotel_list.length; i++)
        if (hotel_list[i].id == _id)
            hotel_list.splice(i, 1);
}

function maxIdHotel() {
    var max = 0;
    for(var i=0; i<hotel_list.length; i++)
        if(hotel_list[i].id > max)
            max = i;
    return hotel_list[max].id;
}

function returnHotel(_id) {
    for(var i=0; i<hotel_list.length; i++)
        if(hotel_list[i].id == _id)
            return hotel_list[i];
}

function inverseList(_list) {
    var aux;

    for (var i = 0; i < _list.length / 2; i++)
    {
        aux = _list[i];
        _list[i] = _list[_list.length - i];
        _list[_list.length - i] = aux;
    }
}

// Testing testing 123
addHotel(h2);
addHotel(h3);
//removeHotel(2);
//console.log(hotel_list);

var max = maxIdHotel();
console.log("Max: " + max);

var aHotel = returnHotel(3);
console.log(aHotel);

updateHotel(h4);
//console.log(hotel_list);

hotel_list.reverse();
inverseList(hotel_list);
console.log(hotel_list);