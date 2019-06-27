"use strict";
var addRoast;
var setValue = function(value){
    var butvalue = document.getElementById('buttonValue1');
    addRoast = value;
    butvalue.innerText = value
};
var roastSelection;
var filter = function(value){
    var butvalue = document.getElementById('buttonValue2');
    butvalue.innerText = value;
    roastSelection = value;
    updateCoffees();
};
function renderCoffee(coffee) {

    var html = '<div class="coffee">';
    html += coffee.name +' '+ '<span class="roast">'+ coffee.roast + '</span>';
    html += '</div>';
    return html;
}

function renderCoffees(coffees) {
    var html = '';
    for(var i = 1; coffees.length >= i; i++) {
        html += renderCoffee(coffees[i-1]);
    }
    return html;
}
var filteredCoffees = [];

function updateCoffees(e) {
    filteredCoffees = [];
    // e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection;
    if(selectedRoast === "All"){
        tbody.innerHTML = renderCoffees(coffees);
    } else {
        coffees.forEach(function (coffee) {
            if (coffee.roast === selectedRoast) {
                filteredCoffees.push(coffee);
            }
        });
        tbody.innerHTML = renderCoffees(filteredCoffees);
    }
    myFunction()
}

// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
var coffees = [
    {id: 1, name: 'Light City', roast: 'Light'},
    {id: 2, name: 'Half City', roast: 'Light'},
    {id: 3, name: 'Cinnamon', roast: 'Light'},
    {id: 4, name: 'City', roast: 'Medium'},
    {id: 5, name: 'American', roast: 'Medium'},
    {id: 6, name: 'Breakfast', roast: 'Medium'},
    {id: 7, name: 'High', roast: 'Dark'},
    {id: 8, name: 'Continental', roast: 'Dark'},
    {id: 9, name: 'New Orleans', roast: 'Dark'},
    {id: 10, name: 'European', roast: 'Dark'},
    {id: 11, name: 'Espresso', roast: 'Dark'},
    {id: 12, name: 'Viennese', roast: 'Dark'},
    {id: 13, name: 'Italian', roast: 'Dark'},
    {id: 14, name: 'French', roast: 'Dark'},
];

var tbody = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');
// var roastSelection = document.querySelector('#roast-selection');
var selectRoast = document.getElementById('roast-selection');
tbody.innerHTML = renderCoffees(coffees);

// submitButton.addEventListener('click', updateCoffees);
selectRoast.addEventListener('change', updateCoffees);


function myFunction() {
    var input, filter, name, i;
    input = document.getElementById("CoffeeName");
    filter = input.value.toUpperCase();
    var coffeeFilter = [];
    if(filteredCoffees.length > 0) {
        for (i = 0; i < filteredCoffees.length; i++) {
            name = filteredCoffees[i].name;
            if (name.toUpperCase().indexOf(filter) > -1) {
                coffeeFilter.push(filteredCoffees[i]);
            }
        }
    }else {
        for (i = 0; i < coffees.length; i++) {
            name = coffees[i].name;
            if (name.toUpperCase().indexOf(filter) > -1) {
                coffeeFilter.push(coffees[i]);
            }
        }
    }
    tbody.innerHTML = renderCoffees(coffeeFilter)
}

var addName = document.forms.adds.AddCoffee;
// var addRoast = document.forms.adds.addroast;
var makeCoffee = function(name,roast){
    var makeObj = {
        name: name,
        roast: roast
    };
    if(name !== "" && roast !== undefined ){
        coffees.push(makeObj);
        updateCoffees(coffees);
    }
};
