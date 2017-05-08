'use strict';

var location1 = {
    location: 'PDX Airport',
    minCust: 23,
    maxCust: 65,
    avgCookies: 6.3,
    cookiesPerHr: [],
    custPerHour: function () {
        var randCust = Math.floor(Math.random() * this.maxCust + this.minCust);
        this.cookiesPerHr.push(randCust * this.avgCookies);
    }
};
var location2 = {
    location: 'Pioneer Square',
    minCust: 3,
    maxCust: 24,
    avgCookies: 1.2,
    custPerHour: function() {
        var randCust = Math.floor(Math.random() * this.maxCust + this.minCust);
        this.cookiesPerHr.push(randCust * this.avgCookies);
    }

}

var location3 = {
    location: 'Powell\'s',
    minCust: 11,
    maxCust: 38,
    avgCookies: 3.7,
    custPerHour: function() {
        var randCust = Math.floor(Math.random() * this.maxCust + this.minCust);
        this.cookiesPerHr.push(randCust * this.avgCookies);
    }
}

var location4 = {
    location: 'St. John\'s',
    minCust: 20,
    maxCust: 38,
    avgCookies: 2.3,
    custPerHour: function() {
        var randCust = Math.floor(Math.random() * this.maxCust + this.minCust);
        this.cookiesPerHr.push(randCust * this.avgCookies);
    }
}

var location5 = {
    location: 'Waterfront',
    minCust: 2,
    maxCust: 16,
    avgCookies: 4.6,
    custPerHour: function() {
        var randCust = Math.floor(Math.random() * this.maxCust + this.minCust);
        this.cookiesPerHr.push(randCust * this.avgCookies);
    }
}

