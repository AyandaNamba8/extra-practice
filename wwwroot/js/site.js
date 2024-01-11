// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

const display = document.querySelector('.display');
const clearDisplay = () => { display.value = ''; };
const addNumber = number => { display.value += number; };
const addOperator = operator => { display.value += operator; };
const addDecimal = () => { display.value += '.'; };


const result = () => {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
};