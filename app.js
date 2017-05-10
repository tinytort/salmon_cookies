'use strict';
var hours = ['', '6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm']

var tableEle = document.getElementById('dataTable');
var tableHeader = document.createElement('thead');
var tableRow = document.createElement('tr');

tableEle.appendChild(tableHeader)

for (var i = 0; i < hours.length; i++) {
    var tableCell = document.createElement('th');
    tableCell.innerText = hours[i]
    tableHeader.appendChild(tableCell)
}
function Location(name, minCust, maxCust, avgCookies) {
    this.name = name;
    this.minCust = minCust;
    this.maxCust = maxCust;
    this.avgCookies = avgCookies;
    this.cookiesPerHr = [];
};
Location.prototype.render = function () {
    var tableRow = document.createElement('tr');
    tableEle.appendChild(tableRow)
    for (var i = 0; i < hours.length; i++) {
        var tableCell = document.createElement('td');
        if (i === 0) {
            tableCell.innerText = this.name
            tableRow.appendChild(tableCell)
        }
        else {
            tableCell.innerText = this.cookiesPerHr[i]
            tableRow.appendChild(tableCell)
        }
    }
}
Location.prototype.custPerHrFn = function () {
    var randCust = Math.floor(Math.random() * this.maxCust + this.minCust);
    return randCust;

}

Location.prototype.calculateCookiesPerHr = function () {
    for (var i = 0; i < hours.length; i++) {
        this.cookiesPerHr.push(Math.floor(this.custPerHrFn() * this.avgCookies));
        console.log(this.avgCookies)
    }
}

function createCell(id, cellType, content, row) {
    var row = document.getElmentById(id)
    var cell = document.createElement(cellType);
    cell.innerText = content;
    row.appendChild(cell);
}

var locationOne = new Location('PDX Airport', 23, 65, 6.3);
locationOne.calculateCookiesPerHr()
locationOne.render()

var locationTwo = new Location('Pioneer Square', 3, 24, 1.2);
locationTwo.calculateCookiesPerHr()
locationTwo.render()

var locationThree = new Location('Powell\'s', 11, 38, 3.7);
locationThree.calculateCookiesPerHr()
locationThree.render()

var locationFour = new Location('St. John\'s', 20, 38, 2.3);
locationFour.calculateCookiesPerHr()
locationFour.render()

var locationFive = new Location('Waterfront', 2, 16, 4.6);
locationFive.calculateCookiesPerHr()
locationFive.render()

//Adding new locations from the form 

var newLocation = document.getElementById('addLocation');
newLocation.addEventListener('submit', addNewLocation);

function addNewLocation() {
    event.preventDefault();
    var form = event.target;
    var name = form.storeName.value;
    var minimumCust = parseInt(form.minimumCust.value);
    var maximumCust = parseInt(form.maximumCust.value);
    var averageCookies = parseInt(form.averageCookies.value);
    console.log(form, name, minimumCust, maximumCust, averageCookies);
    var newLocation = new Location(name, minimumCust, maximumCust, averageCookies);
    console.log(newLocation);

    newLocation.calculateCookiesPerHr();
    console.log(newLocation.calculateCookiesPerHr());
    newLocation.render();
}

