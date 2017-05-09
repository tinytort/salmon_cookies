'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm']

// var location1 = {
//     location: 'PDX Airport',
//     id: 'PDX-Airport',
//     minCust: 23,
//     maxCust: 65,
//     avgCookies: 6.3,
//     cookiesPerHr: [],
//     custPerHour: function () {
//         var randCust = Math.floor(Math.random() * this.maxCust + this.minCust);
//         return randCust;
//     },
//     calculateCookiesPerHr: function () {
//         for (var i = 0; i < hours.length; i++) {
//             this.cookiesPerHr.push(Math.floor(this.custPerHour() * this.avgCookies));
//         }
//     },
//     cookiePopulator: function () {

//         this.calculateCookiesPerHr();
//         var locationCookies = document.getElementById(this.id);
//         locationCookies.innerText = this.location;

//         for (var i = 0; i < this.cookiesPerHr.length; i++) {
//             var thisLi = document.createElement('li');
//             thisLi.innerText = hours[i] + ' : ' + this.cookiesPerHr[i] + ' cookies.';
//             locationCookies.appendChild(thisLi);
//             console.log(locationCookies)
//         }
//     }
// };
// var location2 = {
//     location: 'Pioneer Square',
//     id: 'Pioneer-Square',
//     minCust: 3,
//     maxCust: 24,
//     avgCookies: 1.2,
//     cookiesPerHr: [],
//     custPerHour: function () {
//         var randCust = Math.floor(Math.random() * this.maxCust + this.minCust);
//         return randCust;
//     },
//     calculateCookiesPerHr: function () {
//         for (var i = 0; i < hours.length; i++) {
//             this.cookiesPerHr.push(Math.floor(this.custPerHour() * this.avgCookies));

//         }
//     },
//     cookiePopulator: function () {
//         this.calculateCookiesPerHr();
//         var locationCookies = document.getElementById(this.id);
//         locationCookies.innerText = this.location;

//         for (var i = 0; i < hours.length; i++) {
//             var thisLi = document.createElement('li');
//             thisLi.innerText = hours[i] + ' : ' + this.cookiesPerHr[i] + ' cookies.';
//             locationCookies.appendChild(thisLi);
//             console.log(locationCookies)
//         }
//     }

// };

// var location3 = {
//     location: 'Powell\'s',
//     id: 'Powells',
//     minCust: 11,
//     maxCust: 38,
//     avgCookies: 3.7,
//     cookiesPerHr: [],
//     custPerHour: function () {
//         var randCust = Math.floor(Math.random() * this.maxCust + this.minCust);
//         return randCust;
//     },
//     calculateCookiesPerHr: function () {
//         for (var i = 0; i < hours.length; i++) {
//             this.cookiesPerHr.push(Math.floor(this.custPerHour() * this.avgCookies));
//         }
//     },
//     cookiePopulator: function () {
//         this.calculateCookiesPerHr();
//         var locationCookies = document.getElementById(this.id);
//         locationCookies.innerText = this.location;

//         for (var i = 0; i < hours.length; i++) {
//             var thisLi = document.createElement('li');
//             thisLi.innerText = hours[i] + ' : ' + this.cookiesPerHr[i] + ' cookies.';
//             locationCookies.appendChild(thisLi);
//             console.log(locationCookies)
//         }
//     }
// };
// var location4 = {
//     location: 'St.Johns',
//     id: 'St.Johns',
//     minCust: 20,
//     maxCust: 38,
//     avgCookies: 2.3,
//     cookiesPerHr: [],
//     custPerHour: function () {
//         var randCust = Math.floor(Math.random() * this.maxCust + this.minCust);
//         return randCust;
//     },
//     calculateCookiesPerHr: function () {
//         for (var i = 0; i < hours.length; i++) {
//             this.cookiesPerHr.push(Math.floor(this.custPerHour() * this.avgCookies));
//         }
//     },
//     cookiePopulator: function () {
//         this.calculateCookiesPerHr();
//         var locationCookies = document.getElementById(this.id);
//         locationCookies.innerText = this.location;

//         for (var i = 0; i < hours.length; i++) {
//             var thisLi = document.createElement('li');
//             thisLi.innerText = hours[i] + ' : ' + this.cookiesPerHr[i] + ' cookies.';
//             locationCookies.appendChild(thisLi);
//             console.log(locationCookies)

//         }
//     }
// };

// var location5 = {
//     location: 'Waterfront',
//     id: 'Waterfront',
//     minCust: 2,
//     maxCust: 16,
//     avgCookies: 4.6,
//     cookiesPerHr: [],
//     custPerHour: function () {
//         var randCust = Math.floor(Math.random() * this.maxCust + this.minCust);
//         return randCust;
//     },
//     calculateCookiesPerHr: function () {
//         for (var i = 0; i < hours.length; i++) {
//             this.cookiesPerHr.push(Math.floor(this.custPerHour() * this.avgCookies));
//         }
//     },
//     cookiePopulator: function () {
//         this.calculateCookiesPerHr();
//         var locationCookies = document.getElementById(this.id);
//         locationCookies.innerText = this.location;

//         for (var i = 0; i < hours.length; i++) {
//             var thisLi = document.createElement('li');
//             thisLi.innerText = hours[i] + ' : ' + this.cookiesPerHr[i] + ' cookies.';
//             locationCookies.appendChild(thisLi);
//             console.log(locationCookies)
//         }
//     }
// };

// location1.cookiePopulator();
// location2.cookiePopulator();
// location3.cookiePopulator();
// location4.cookiePopulator();
// location5.cookiePopulator();

function Locations(name, id, minCust, maxCust, avgCookies) {
    this.name = name;
    this.id = id;
    this.minCust = minCust;
    this.maxCust = maxCust;
    this.avgCookies = avgCookies;
    this.cookiesPerHr = [];
};
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

    for (var i = 0; i < hours.length; i ++) {
        var thisLi = document.createElement('li');
        thisLi.innerText = hours[i] + ' : ' + this.cookiesPerHr[i] + ' cookies.';
        locationCookies.appendChild(thisLi);
        console.log(locationCookies)
    }
}
var locationOne = new Locations('PDX Airport', 'PDX-Airport', 23, 65, 6.3);
locationOne.cookiePopulator()

var locationTwo = new Locations('Pioneer Square','Pioneer-Square', 3, 24, 1.2);
locationTwo.cookiePopulator()

var locationThree = new Locations('Powell\'s', 'Powells', 11, 38, 3.7);
locationThree.cookiePopulator()

var locationFour = new Locations('St. John\'s', 'St.Johns', 20, 38, 2.3);
locationFour.cookiePopulator()

var locationFive = new Locations('Waterfront', 'Waterfront', 2, 16, 4.6)
locationFive.cookiePopulator()