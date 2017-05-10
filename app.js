'use strict';
var hours = ['', '6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm']

var tableEle = document.getElementById('dataTable');
var tableHeader = document.createElement('thead');
var tableRow = document.createElement('tr');

tableEle.appendChild(tableHeader)

for (var i=0; i < hours.length; i++) {
    var tableCell = document.createElement('th');
    tableCell.innerText = hours[i]
    tableHeader.appendChild(tableCell)
}
function Locations(name, id, minCust, maxCust, avgCookies) {
    this.name = name;
    this.id = id;
    this.minCust = minCust;
    this.maxCust = maxCust;
    this.avgCookies = avgCookies;
    this.cookiesPerHr = [];
};
Locations.prototype.render = function() {
        var tableRow = document.createElement('tr');
        tableEle.appendChild(tableRow)
    for (var i=0; i < hours.length; i++) {
        var tableCell = document.createElement('td');
        if (i===0) {
            tableCell.innerText = this.name
            tableRow.appendChild(tableCell)
        }
        else {
            tableCell.innerText = this.cookiesPerHr[i]
            tableRow.appendChild(tableCell)
            console.log (1)

        }
    }
}
Locations.prototype.custPerHrFn = function() {
    var randCust = Math.floor(Math.random() * this.maxCust + this.minCust);
    return randCust;

}

Locations.prototype.calculateCookiesPerHr= function() {
    for (var i =0; i < hours.length; i++) {
        this.cookiesPerHr.push(Math.floor(this.custPerHrFn() * this.avgCookies));
        console.log(this.cookiesPerHr)
    }
}

Locations.prototype.cookiePopulator= function () {
    this.calculateCookiesPerHr();
    var locationCookies = document.getElementById(this.id);
    locationCookies.innerText= this.name;
    }

function createCell(id, cellType, content, row) {
    var row = document.getElmentById(id)
    var cell = document.createElement(cellType);
    cell.innerText = content;
    row.appendChild(cell);
}

var locationOne = new Locations('PDX Airport', 'PDX-Airport', 23, 65, 6.3);
locationOne.cookiePopulator()
locationOne.render()

var locationTwo = new Locations('Pioneer Square','Pioneer-Square', 3, 24, 1.2);
locationTwo.cookiePopulator()
locationTwo.render()

var locationThree = new Locations('Powell\'s', 'Powells', 11, 38, 3.7);
locationThree.cookiePopulator()
locationThree.render()

var locationFour = new Locations('St. John\'s', 'St.Johns', 20, 38, 2.3);
locationFour.cookiePopulator()
locationFour.render()

var locationFive = new Locations('Waterfront', 'Waterfront', 2, 16, 4.6);
locationFive.cookiePopulator()
locationFive.render()

