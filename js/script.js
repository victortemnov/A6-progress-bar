let one, three, seven;
one = 0;
three = one;
seven = three;

function init() {
}
$('#bOne').click(function() {
    one = one + 1;
    $('#progressBar').attr("style", "width: " + one + "%");
});

function init() {
}
$('#bThree').click(function() {
    three = three + 3;
    $('#progressBar').attr("style", "width: " + three + "%");
});

function init() {
}
$('#bSeven').click(function() {
    seven = seven + 7;
    $('#progressBar').attr("style", "width: " + seven + "%");
});