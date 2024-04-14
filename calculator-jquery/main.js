// $("p").text("Welcome");
// $("p").html("Welcome");
// $("p").prepend("Welcome");
// $("p").append("Welcome");
// $("p").after("Welcome");
// $("p").before("Welcome");




let resultField = $("#result");

// insertNumber 
function insertNumber(number) {
    let pastNumber = resultField.val();
    resultField.val(pastNumber + number);
}


// operator for clearing the 
function clearOperator(clear) {
    if (clear === 'AC') {
        resultField.val('');
    }
}

// operator for delete
function deleteOperator(delet) {
    if (delet === "DEL") {
        resultField.val(resultField.val().slice(0, -1));
    }
}


// calculateOperator
function calculateOperator(calculate) {
    if (calculate === "=") {
        resultField.val(eval(resultField.val()));
    }
}