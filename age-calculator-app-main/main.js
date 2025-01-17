const dayRegularExp = /^(0[1-9]|[12][0-9]|3[01])$/;
const monthRegularExp = /^(0[1-9]|1[0-2])$/; // Assuming you're using numeric months
const yearRegularExp = /^\d{4}$/;
const generalDateRegularExp = /^(?:(\d{2})[-\/](\d{2})[-\/](\d{2})|(\d{4})[-\/](\d{2})[-\/](\d{2}))$/;

const dayValue = document.getElementsByClassName('day')[0];
const monthValue = document.getElementsByClassName('month')[0];
const yearValue = document.getElementsByClassName('year')[0];
const fullDateValue = `${yearValue.value}-${monthValue.value}-${dayValue.value}`;

const firstError = document.getElementsByClassName('error-one');
const secondError = document.getElementsByClassName('error-two');
const thirdError = document.getElementsByClassName('error-three'); // This is a collection of elements

const dayText = document.getElementById('day-text');
const monthText = document.getElementById('month-text');
const yearText = document.getElementById('year-text');

let isInputValid = true;


 /*function errorIfEmpty() {
    
    if (dayValue.value === "") {
        firstError[0].style.display = "inline";
        dayValue.style.borderColor = 'red';
        dayText.style.color = 'red';
        isInputValid = false;
    } else {
        firstError[0].style.display = "none";
        dayValue.style.borderColor = 'black';
        dayText.style.color = 'black';
    }

    if (monthValue.value === "") {
        firstError[1].style.display = "inline";
        monthValue.style.borderColor = 'red';
        monthText.style.color = 'red';
        isInputValid = false;
    } else {
        firstError[1].style.display = "none";
        monthValue.style.borderColor = 'black';
        monthText.style.color = 'black';
    }

    if (yearValue.value === "") {
        firstError[2].style.display = "inline";
        yearValue.style.borderColor = 'red';
        yearText.style.color = 'red';
        isInputValid = false;
    } else {
        firstError[2].style.display = "none";
        yearValue.style.borderColor = 'black';
        yearText.style.color = 'black';
    }
} */


/*function errorIfInvalid (){
    if(!dayRegularExp.test(dayValue.value)) {
        secondError[0].style.display = "inline";
        dayValue.style.borderColor = 'red';
        dayText.style.color = 'red';
        isInputValid = false;
    } else{
        firstError[0].style.display = "none";
        dayValue.style.borderColor = 'black';
        dayText.style.color = 'black';
    }

    if(!monthRegularExp.test(monthValue.value)) {
        secondError[1].style.display = "inline";
        monthValue.style.borderColor = 'red';
        monthText.style.color = 'red';
        isInputValid = false;
    } else{
        secondError[1].style.display = "none";
        monthValue.style.borderColor = 'black';
        monthText.style.color = 'black';
    }

    if(!yearRegularExp.test(yearValue.value)) {
        secondError[2].style.display = "inline";
        yearValue.style.borderColor = 'red';
        yearText.style.color = 'red';
        isInputValid = false;
    } else{
        secondError[2].style.display = "none";
        yearValue.style.borderColor = 'black';
        yearText.style.color = 'black';
    }
}*/


function validateWholeDate() {
    if (!generalDateRegularExp.test(fullDateValue)) {
        thirdError[0].style.display = "inline";
        dayValue.style.borderColor = 'red';
        dayText.style.color = 'red';
        
    } else{
        thirdError[0].style.display = "none";
        dayValue.style.borderColor = 'black';
        dayText.style.color = 'black';
    }
}


/*document.getElementById("button").addEventListener("click", errorIfEmpty);*/

document.getElementById('button').addEventListener('click', validateWholeDate);



