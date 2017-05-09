'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm']

var location1 = {
    location: 'PDX Airport',
    id: 'PDX-Airport',
    minCust: 23,
    maxCust: 65,
    avgCookies: 6.3,
    cookiesPerHr: [],
    custPerHour: function () {
        var randCust = Math.floor(Math.random() * this.maxCust + this.minCust);
        return randCust;
    },
    calculateCookiesPerHr: function () {
        for (var i = 0; i < hours.length; i++) {
            this.cookiesPerHr.push(Math.floor(this.custPerHour() * this.avgCookies));
        }
    },
    cookiePopulator: function () {

        this.calculateCookiesPerHr();
        var firstLocationCookies = document.getElementById(this.id);
        firstLocationCookies.innerText = this.location;

        for (var i = 0; i < this.cookiesPerHr.length; i++) {
            var thisLi = document.createElement('li');
            thisLi.innerText = hours[i] + ' : ' + this.cookiesPerHr[i] + ' cookies.';
            firstLocationCookies.appendChild(thisLi);
            console.log(firstLocationCookies)
        }
    }
};
var location2 = {
    location: 'Pioneer Square',
    minCust: 3,
    maxCust: 24,
    avgCookies: 1.2,
    custPerHour: function () {
        var randCust = Math.floor(Math.random() * this.maxCust + this.minCust);
        this.cookiesPerHr.push(randCust * this.avgCookies);
    }

}

var location3 = {
    location: 'Powell\'s',
    minCust: 11,
    maxCust: 38,
    avgCookies: 3.7,
    custPerHour: function () {
        var randCust = Math.floor(Math.random() * this.maxCust + this.minCust);
        this.cookiesPerHr.push(randCust * this.avgCookies);
    }
}

var location4 = {
    location: 'St.Johns',
    minCust: 20,
    maxCust: 38,
    avgCookies: 2.3,
    custPerHour: function () {
        var randCust = Math.floor(Math.random() * this.maxCust + this.minCust);
        this.cookiesPerHr.push(randCust * this.avgCookies);
    }
}

var location5 = {
    location: 'Waterfront',
    minCust: 2,
    maxCust: 16,
    avgCookies: 4.6,
    custPerHour: function () {
        var randCust = Math.floor(Math.random() * this.maxCust + this.minCust);
        this.cookiesPerHr.push(randCust * this.avgCookies);
    }
}

location1.cookiePopulator();



