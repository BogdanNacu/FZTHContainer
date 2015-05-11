// helpers
String.prototype.toIdFormat = function () {
    return "#" + this;
};
String.prototype.toClassFormat = function () {
    return "." + this;
};

function generateTable(container, initialHotels) {
    var constants = {
        TABLE_ROW_CLASS: 'table-row',
        HOTEL_ADD_CLASS: 'hotel-add',
        HOTEL_UPDATE_CLASS: 'hotel-update',
        ROW_ADD_MODE_CLASS: 'row-hotel-add',
        ROW_CONFIRM_CLASS: 'row-confirm',
        ROW_CANCEL_CLASS: 'row-cancel'
    };
    var hotels = initialHotels;
    var tableContainer;
    init();

    function init() {
        container.empty();

        tableContainer = $('<table/>')
        container.append(tableContainer);

        addButtons();
        initEvents();

        generateTableContent();
    }

    function refresh() {
        tableContainer.empty();
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

            addOperationsCellToRow(row);

            tableContainer.append(row);
        }
    }

    function addTextTableCellToRow(row, text) {
        var cellToAdd = $('<td/>', {
            text: text
        });
        row.append(cellToAdd);
    }

    function addOperationsCellToRow(row) {
        var hotelUpdateButton = $('<button/>', {
            'class': constants.HOTEL_UPDATE_CLASS,
            'text': 'Update'
        });

        row.append(hotelUpdateButton);
    }

    function addTextControlCellToRow(row, controlRole, value) {
        var control = $('<input/>', {
            'type': 'text',
            'data-crole': controlRole,
            'value': value
        });

        var cell = $('<td/>');
        cell.append(control);

        row.append(cell);
    }

    function addOperationsCellToRowForAddUpdate(row) {
        var cell = $('<td/>');
        var hotelConfirmButton = $('<button/>', {
            'class': constants.ROW_CONFIRM_CLASS,
            'text': 'Confirm'
        });

        cell.append(hotelConfirmButton);

        var hotelCancelButton = $('<button/>', {
            'class': constants.ROW_CANCEL_CLASS,
            'text': 'Cancel'
        });

        cell.append(hotelCancelButton);

        row.append(cell);
    }

    function getControlValueFromRowByRole(row, controlRole) {
        var matchedControls = row.find('input[data-crole="' + controlRole + '"]');
        var matchedControlValue = null;

        if (matchedControls.length > 0) {
            var matchedControl = null;
            matchedControl = $(matchedControls[0]);

            matchedControlValue = matchedControl.val();
        }

        return matchedControlValue;
    }

    function mapRowToHotel(row) {
        var hotelId = row.data('id');

        var hotel = {
            id: hotelId,
            name: getControlValueFromRowByRole(row, 'name'),
            description: getControlValueFromRowByRole(row, 'description'),
            country: getControlValueFromRowByRole(row, 'country'),
            city: getControlValueFromRowByRole(row, 'city'),
            addedDate: getControlValueFromRowByRole(row, 'addedDate'),
            startPrice: getControlValueFromRowByRole(row, 'startPrice')
        };

        return hotel;
    }

    function addButtons() {
        var hotelAddButton = $('<button/>', {
            'class': constants.HOTEL_ADD_CLASS,
            'text': 'Add new hotel'
        });

        container.append(hotelAddButton);
    }

    function initEvents() {
        container.on('click', constants.HOTEL_ADD_CLASS.toClassFormat(), function () {
            onHotelAdd(this);
        });
        container.on('click', constants.HOTEL_UPDATE_CLASS.toClassFormat(), function () {
            onHotelUpdate(this);
        });

        container.on('click', constants.ROW_CONFIRM_CLASS.toClassFormat(), function () {
            onOperationConfirm(this);
        });
        container.on('click', constants.ROW_CANCEL_CLASS.toClassFormat(), function () {
            onOperationCancel(this);
        });
    }

    function onHotelAdd(sender) {
        console.log('onHotelAdd');
        enterAddMode();
    }

    function onConfirmUpdate(sender) {
        console.log('Confirm update!');
        var hotelId = $(sender).data('id');

        var row = $(sender).closest('tr');
        var inputList = $(row).find('input');

        var hotel = new Hotel(hotelId, $(inputList[0]).val(), $(inputList[1]).val(), $(inputList[2]).val(), $(inputList[3]).val(), $(inputList[4]).val(), $(inputList[5]).val());
        console.log(hotel);
        updateHotel(hotel);
        //generateTable($('#hotelsContainer'), window.hotels);
        refresh();
    }

    function onCancelUpdate(sender) {
        console.log('Cancel update!');
        var hotelsContainer = $('#hotelsContainer');
        generateTable(hotelsContainer, window.hotels);
    }

    function onHotelUpdate(sender) {
        console.log('onHotelUpdate');

        var row = $(sender).closest('tr');
        var hotelId = row.data('id');
        var hotelToUpdate = getHotelById(hotelId);

        //generate text inputs for hotel
        var hotelUpdateInput = $('<tr/>');

        //console.log(hotelToUpdate);
        var hotelProperties = [hotelToUpdate.name, hotelToUpdate.description,
		                        hotelToUpdate.country, hotelToUpdate.city, hotelToUpdate.addedDate,
		                        hotelToUpdate.startPrice];

        for (var i = 0; i < hotelProperties.length; i++) {
            var inputTd = $('<td/>');
            var textInputCell = $('<input/>', { 'type': 'text', 'value': hotelProperties[i] });
            hotelUpdateInput.append(inputTd.append(textInputCell));
        }

        var inputTd = $('<td/>');
        var confirm_update = $('<button/>', { 'id': 'confirm-update', 'text': 'Confirm', 'data-id' : hotelId });
        inputTd.append(confirm_update);
        $(confirm_update).on('click', function () {
            onConfirmUpdate(this);
        });
        hotelUpdateInput.append(inputTd);

        var inputTd = $('<td/>');
        var cancel_update = $('<button/>', { 'id': 'cancel-update', 'text': 'Cancel', 'data-id' : hotelId });
        inputTd.append(cancel_update);
        $(cancel_update).on('click', function () {
            onCancelUpdate(this);
        });
        hotelUpdateInput.append(inputTd);

        $(row).replaceWith(hotelUpdateInput);
    }

    function onOperationConfirm(sender) {
        console.log('onOperationConfirm');


        var row = $(sender).closest('tr');
        var hotelFromRow = mapRowToHotel(row);

        var mustAddHotel = row.hasClass(constants.ROW_ADD_MODE_CLASS);
        if (mustAddHotel) {
            var maxHotelId = getMaxHotelId();
            var newHotelId = maxHotelId + 1;

            hotelFromRow.id = newHotelId;

            addHotel(hotelFromRow);
        } else {
            updateHotel(hotelFromRow);
        }

        refresh();
    }

    function onOperationCancel(sender) {
        console.log('onOperationCancel');
        refresh();
    }


    function enterAddMode() {
        var row = $('<tr/>', {
            'class': constants.ROW_ADD_MODE_CLASS
        });

        addTextControlCellToRow(row, 'name');
        addTextControlCellToRow(row, 'description');
        addTextControlCellToRow(row, 'country');
        addTextControlCellToRow(row, 'city');
        addTextControlCellToRow(row, 'addedDate');
        addTextControlCellToRow(row, 'startPrice');

        addOperationsCellToRowForAddUpdate(row);

        var headerRow = tableContainer.find('tr')[0];
        $(headerRow).after(row);
    }

    // hotel operations

    function getHotelById(id) {
        var associatedHotel = null;

        $.each(hotels, function (hotelIndex, hotel) {
            if (hotel.id == id) {
                associatedHotel = hotel;
                return false;
            }
        });

        return associatedHotel;
    }

    function getMaxHotelId() {
        var maxHotelId = 1;

        $.each(hotels, function (hotelIndex, hotel) {
            var currentHotelId = parseInt(hotel.id);
            if (currentHotelId > maxHotelId) {
                maxHotelId = currentHotelId;
            }
        });

        return maxHotelId;
    }

    function addHotel(hotel) {
        hotels.push(hotel);
    }

    function updateHotel(hotel) {
        var positionToUpdate = null;
        var index;

        // find the postion in the hotels array of the object that needs to be updated
        for (index = 0; index < hotels.length; index++) {
            var currentHotel = hotels[index];
            if (currentHotel.id == hotel.id) {
                positionToUpdate = index;

                // the position was found so we don't need to search the rest of the array
                break;
            }
        }

        if (positionToUpdate != null) {
            // the given hotel exists already, so update it with the new one
            hotels[positionToUpdate] = hotel;
        } else {
            // the given hotel doesn't exist in the array, so we can throw an error or simply add it to the list
            // we choose to simply add the object
            hotels.push(hotel);
        }
    }

    // method used to remove a given hotel
    function removeHotel(hotelId) {
        var positionToRemove = null;
        var index;

        // find the postion in the hotels array of the object that needs to be removed
        for (index = 0; index < hotels.length; index++) {
            var currentHotel = hotels[index];
            if (currentHotel.id === hotelId) {
                positionToRemove = index;

                // the position was found so we don't need to search the rest of the array
                break;
            }
        }

        if (positionToRemove != null) {
            // the given hotel exists already, so remove it from the array
            hotels.splice(positionToRemove, 1)
        } else {
            // the given hotel doesn't exist in the array, so we can throw an error or simply do nothing
            // we choose to simply do nothing
        }
    }
};

















