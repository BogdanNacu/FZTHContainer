function Hotel(hotel) {
	this.id = hotel.id;
	this.name = hotel.name;
	this.description = hotel.description;
	this.country = hotel.country;
	this.city = hotel.city;
	this.addedDate = hotel.addedDate;
	this.startPrice = hotel.startPrice;
}

var hotels = [
	new Hotel({id: 1, name: 'Hotel 1', description: 'Hotel 1 description', country: 'Country 1', city: 'City 1', addedDate: new Date(2000, 1, 1), startPrice: 11.1 }),
	new Hotel({id: 2, name: 'Hotel 2', description: 'Hotel 2 description', country: 'Country 2', city: 'City 2', addedDate: new Date(2000, 2, 2), startPrice: 22.2 }),
	new Hotel({id: 3, name: 'Hotel 3', description: 'Hotel 3 description', country: 'Country 3', city: 'City 3', addedDate: new Date(2000, 3, 3), startPrice: 33.3 }),
	new Hotel({id: 4, name: 'Hotel 4', description: 'Hotel 4 description', country: 'Country 4', city: 'City 4', addedDate: new Date(2000, 4, 4), startPrice: 44.4 }),
	new Hotel({id: 5, name: 'Hotel 5', description: 'Hotel 5 description', country: 'Country 5', city: 'City 5', addedDate: new Date(2000, 5, 5), startPrice: 55.5 })
];