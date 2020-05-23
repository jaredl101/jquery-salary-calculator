let employeeList = []

function setup() {
$('#submitButton').on('click', getUserInfo);

}




function getUserInfo(){
    // Gets all the user input that they filled in
    // Checks to make sure inputs aren't empty
    // Checks to make sure inputs make sense:
        // First Name, Last Name, and Title must be strings.
        // ID and Annual Salary must be numbers.
if($('#firstNameInput').val().length === 0 || $('#lastNameInput').val().length === 0 ||
   $('#idInput').val().length === 0 || $('#titleInput').val().length === 0 || 
   $('#annualSalaryInput').val().length === 0) {
        console.log('All fields must be filled out!');
        return false;
}

if( isNaN($('#idInput').val()) || isNaN($('#annualSalaryInput').val()) ){
    console.log('Both your ID and Annual Summary must be a number!');
    return false;
}

if ( !isNaN($('#firstNameInput').val()) || !isNaN($('#lastNameInput').val()) ||
    !isNaN($('#titleInput').val()) ) {
    console.log('Your First/Last name and title cannot be a number!');
    return false;
    }
   newEmployee( $('#firstNameInput').val(), $('#lastNameInput').val(), $('#idInput').val(),
                $('#titleInput').val(), $('#annualSalaryInput').val() );
    $('#firstNameInput').val('');
    $('#lastNameInput').val('');
    $('#idInput').val('');
    $('#titleInput').val('');
    $('#annualSalaryInput').val('');

    return true;
} // end getUserInfo

function newEmployee(myFirstName, myLastName, myID, myTitle, myAnnualSalary) {
    // puts the user info captured from inputs into an employee object
    // pushes this employee object to our list of employees
    const newEmployee = {
        firstName:    myFirstName,
        lastName:     myLastName,
        id:           myID,
        title:        myTitle,
        annualSalary: myAnnualSalary,
    }
    employeeList.push(newEmployee)
    return true;
}

function clearTable(){
    $("table tbody").empty();
}

function addToTable() {
    clearTable();
    for(let employee of employeeList){
        let rowElement = $("<tr></tr>");
        // employee.firstName
        // employee.lastName
        // employee.id
        // employee.title
        // employee.annualSalary
        rowElement.append(`<td>${employee.firstName}</td>`);
        rowElement.append(`<td>${employee.lastName}</td>`);
        rowElement.append(`<td>${employee.id}</td>`);
        rowElement.append(`<td>${employee.title}</td>`);
        rowElement.append(`<td>${employee.salary}</td>`);
        $('table tbody').append(rowElement);

    }

}


$(document).ready(setup);
