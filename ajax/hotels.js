function Hotel() {
    if (arguments.length == 1) {
        this.id = arguments[0].id;
        this.name = arguments[0].name;
        this.description = arguments[0].description;
        this.country = arguments[0].country;
        this.city = arguments[0].city;
        this.addedDate = arguments[0].addedDate;
        this.startPrice = arguments[0].startPrice;
    }
    else if (arguments.length == 7) {
        this.id = arguments[0];
        this.name = arguments[1];
        this.description = arguments[2];
        this.country = arguments[3];
        this.city = arguments[4];
        this.addedDate = arguments[5];
        this.startPrice = arguments[6];
    }
}

var hotels = [
	new Hotel({id: 1, name: 'Hotel 1', description: 'Hotel 1 description', country: 'Country 1', city: 'City 1', addedDate: new Date(2000, 1, 1), startPrice: 11.1 }),
	new Hotel({id: 2, name: 'Hotel 2', description: 'Hotel 2 description', country: 'Country 2', city: 'City 2', addedDate: new Date(2000, 2, 2), startPrice: 22.2 }),
	new Hotel({id: 3, name: 'Hotel 3', description: 'Hotel 3 description', country: 'Country 3', city: 'City 3', addedDate: new Date(2000, 3, 3), startPrice: 33.3 }),
	new Hotel({id: 4, name: 'Hotel 4', description: 'Hotel 4 description', country: 'Country 4', city: 'City 4', addedDate: new Date(2000, 4, 4), startPrice: 44.4 }),
	new Hotel({id: 5, name: 'Hotel 5', description: 'Hotel 5 description', country: 'Country 5', city: 'City 5', addedDate: new Date(2000, 5, 5), startPrice: 55.5 })
];