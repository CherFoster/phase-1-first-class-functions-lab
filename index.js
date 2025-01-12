const returnFirstTwoDrivers = function (drivers){
    return drivers.slice(0, 2);
}

const returnLastTwoDrivers = function (drivers){
    return drivers.slice(2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier() {
    return function(num) {
       return num*5;
    }
}

const fareDoubler = function (createFareMultiplier) {
    return createFareMultiplier*2;
} 

const fareTripler = function (createFareMultiplier){
    return createFareMultiplier*3;
}

function selectDifferentDrivers(drivers, driversCallBack){
    return driversCallBack(drivers)
}