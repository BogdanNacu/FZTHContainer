$(function() {
    var hotelsContainer = $('#hotelsContainer');

    /*
    $.ajax({
        url: 'http://zth.tuiasi.ro/hotels.json',
        dataType: 'json',
        success: function (result) {
            console.log('Success!');
            generateTable(hotelsContainer, result);
        },
        error: function () {
            console.log('Fail!');
            alert('Request failed!');
        }
    });*/
    generateTable(hotelsContainer, window.hotels);
});