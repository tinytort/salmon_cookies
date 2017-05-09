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
    id: 'Pioneer-Square',
    minCust: 3,
    maxCust: 24,
    avgCookies: 1.2,
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

        for (var i = 0; i < hours.length; i++) {
            var thisLi = document.createElement('li');
            thisLi.innerText = hours[i] + ' : ' + this.cookiesPerHr[i] + ' cookies.';
            firstLocationCookies.appendChild(thisLi);
            console.log(firstLocationCookies)
        }
    }

};

var location3 = {
    location: 'Powell\'s',
    id: 'Powells',
    minCust: 11,
    maxCust: 38,
    avgCookies: 3.7,
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

        for (var i = 0; i < hours.length; i++) {
            var thisLi = document.createElement('li');
            thisLi.innerText = hours[i] + ' : ' + this.cookiesPerHr[i] + ' cookies.';
            firstLocationCookies.appendChild(thisLi);
            console.log(firstLocationCookies)
        }
    }
};
var location4 = {
    location: 'St.Johns',
    id: 'St.Johns',
    minCust: 20,
    maxCust: 38,
    avgCookies: 2.3,
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

        for (var i = 0; i < hours.length; i++) {
            var thisLi = document.createElement('li');
            thisLi.innerText = hours[i] + ' : ' + this.cookiesPerHr[i] + ' cookies.';
            firstLocationCookies.appendChild(thisLi);
            console.log(firstLocationCookies)

        }
    }
};

var location5 = {
    location: 'Waterfront',
    id: 'Waterfront',
    minCust: 2,
    maxCust: 16,
    avgCookies: 4.6,
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

        for (var i = 0; i < hours.length; i++) {
            var thisLi = document.createElement('li');
            thisLi.innerText = hours[i] + ' : ' + this.cookiesPerHr[i] + ' cookies.';
            firstLocationCookies.appendChild(thisLi);
            console.log(firstLocationCookies)
        }
    }
};

location1.cookiePopulator();
location2.cookiePopulator();
location3.cookiePopulator();
location4.cookiePopulator();
location5.cookiePopulator();



