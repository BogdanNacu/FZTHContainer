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
var hotel_list = [h1, h2, h3, h4];


$(function() {
    var generateView = (function (container, array) {
        var table = $('<table/>');
        var td, row;
    
        table.append($('<tr><th>Id</th><th>Name</th><th>Description</th><th>Country</th><th>City</th><th>Added Date</th><th>Start Price</th></tr>'));
        for(var i=0; i<hotel_list.length; i++){
            //table.append($('<p/>', {'text' : 'aaaa'}));
            row = $("<tr/>");
            for (var j = 0; j < 7; j++) {
                row.append($('<td/>').text(hotel_list[i][j]))
            }
            table.append(row);
        }

        $(container).append(table);
        console.log(table);
    }($('#hotelsContainer'), hotel_list));
});