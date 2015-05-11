function generateTable(container, initialHotels) {

    var hotels = initialHotels;
    var tableContainer;
    init();

    function init() {
        container.empty();

        tableContainer = $('<table/>')
        container.append(tableContainer);

        generateTableContent();
    }

    function addTableHeaderRow() {
        var headerRowHtml = '<tr>' +
			'<th>Name</th>' +
			'<th>Description</th>' +
			'<th>Country</th>' +
			'<th>City</th>' +
			'<th>Added date</th>' +
			'<th>Start price</th>' +
            '<th>Operations</th>' +
			'</tr>';

        var headerRow = $(headerRowHtml);
        tableContainer.append(headerRow);
    }

    function generateTableContent() {
        addTableHeaderRow();

        for (var i = 0; i < hotels.length; i++) {
            var hotel = hotels[i];

            var row = $('<tr/>', {
                'data-id': hotel.id
            });

            var hotelAddedDate = $.type(hotel.addedDate) == "date"
				? hotel.addedDate.toDateString()
				: hotel.addedDate;

            addTextTableCellToRow(row, hotel.name);
            addTextTableCellToRow(row, hotel.description);
            addTextTableCellToRow(row, hotel.country);
            addTextTableCellToRow(row, hotel.city);
            addTextTableCellToRow(row, hotelAddedDate);
            addTextTableCellToRow(row, hotel.startPrice);

            row.append($('<button/>', {'text' : 'Delete'}));

            var operationsCell = $('<td/>');

            tableContainer.append(row);
        }

        tableContainer.append($('<button/>', { 'text': 'Add', 'id' : 'addButton' }));
    }

    function addTextTableCellToRow(row, text) {
        var cellToAdd = $('<td/>', {
            text: text
        });
        row.append(cellToAdd);
    }


    $('button[text="Delete"]').on('click', function () {
        confirm('Do you want to delete?');
    });

    $('#addButton').on('click', function () {
        //console.log('addButton');
        var trow = $('<tr/>');
        
        for (var i = 0; i < 6; i++) {
            var _td = $('<td/>');
            var _cell = $('<input/>', { 'type': 'text' });
            _td.append(_cell);
            trow.append(_td);
        }
        tableContainer.append(trow);
    });
};



















