// JavaScript source code
function executeDomQueries() {
    console.log(document.getElementById("hotelsContainer"));

    var nod = document.getElementById("third");
    console.log(document.getElementsByTagName("span"));

    console.log(document.getElementsByClassName("right"));
}

function executeDomQueriesJQuerry() {
    console.log($('#hotelsContainer'));
    console.log($('#third span'));
    console.log($('.right'));
    $('div').each(function (index, element) {
        console.log(index + ": " + $(element).text());
    });
}