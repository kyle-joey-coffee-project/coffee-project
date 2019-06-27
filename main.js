"use strict";

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
    var selectedRoast = roastSelection.value;
    if(selectedRoast === "all"){
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
    {id: 1, name: 'Light City', roast: 'light'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'},
];

var tbody = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');
var selectRoast = document.getElementById('roast-selection');
tbody.innerHTML = renderCoffees(coffees);

submitButton.addEventListener('click', updateCoffees);
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
var addRoast = document.forms.adds.addroast;
var makeCoffee = function(name,roast){
    var makeObj = {
        name: name,
        roast: roast
    };
    coffees.push(makeObj);
    updateCoffees(coffees);
};