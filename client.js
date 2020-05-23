let employeeList = []

function setup() {
$('#submitButton').on('click', getUserInfo);
}




function getUserInfo(){
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
} // end setup

function newEmployee(myFirstName, myLastName, myID, myTitle, myAnnualSalary) {
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


$(document).ready(setup);
