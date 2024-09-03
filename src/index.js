var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//array of number  and string
var numbers = ['1', 2, 3, 4,];
console.log(numbers);
//array of date
var date = [];
date.push(new Date());
console.log(date);
//assignability
var spooky = true;
spooky = false;
console.log(spooky);
var ourFunction = function (sky1) {
    console.log(sky1.spooky ? 'spooky' : 'not spooky');
    console.log(sky1.scary ? 'scary' : 'not scary');
};
ourFunction({ spooky: true, scary: false });
//typescript classes
var car = /** @class */ (function () {
    function car() {
        this.carName = '';
        this.carColor = '';
        this.carBrand = '';
        this.carLocation = '';
        // #carPlaque=''
    }
    return car;
}());
var derivered = /** @class */ (function (_super) {
    __extends(derivered, _super);
    function derivered() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    derivered.prototype.setCar = function () {
        this.carName;
        this.carColor;
        this.carBrand;
        // this.carLocation
        // this.carPlaque
    };
    return derivered;
}(car));
var car1 = new derivered();
car1.carName;
car1.carColor;
// car1.carBrand
// car1.carLocation
// car1.carPlaque
//functions
var func = function (numbers, location) {
    console.log("".concat(numbers));
    if (location) {
        console.log("".concat(location));
    }
};
func(10, 'kigali');
func(2);
//return types
var retunExample = function (something) {
    switch (Math.floor(Math.random() * 5)) {
        case 0:
            return 'ange';
        case 1:
            return 'susa';
        case 2:
            return 'knot';
        default:
            return 'something';
    }
};
console.log(retunExample('trying'));
//fibonacci
var fiboExample = function (i) {
    if (i <= 1) {
        return i;
    }
    return fiboExample(i - 1) + fiboExample(i - 2);
};
console.log(fiboExample(4));
//type any
var a = 'yvonne';
a = 12;
a = 67;
console.log(a);
//readonly on array
var array = ["yvonne", "ange"];
array.push('kabaka');
var head = array[2];
console.log(head);
//tuple array
var myExample = [10, true, "yvonne"];
console.log(myExample);
//optional properties
var carry = {
    type: 'sport',
    name: 'bmw'
};
console.log(carry);
//enum
var cardinalDirections;
(function (cardinalDirections) {
    cardinalDirections[cardinalDirections["North"] = 1] = "North";
    cardinalDirections[cardinalDirections["South"] = 2] = "South";
    cardinalDirections[cardinalDirections["East"] = 3] = "East";
    cardinalDirections[cardinalDirections["West"] = 4] = "West";
})(cardinalDirections || (cardinalDirections = {}));
console.log(cardinalDirections.West);
var nameOfCar = "BMW";
var typeOfCar = "bwiza";
var plaqueOfCar = 89642;
var allDetailsOfCar = {
    plaque: plaqueOfCar,
    type: typeOfCar,
    name: nameOfCar
};
console.log(allDetailsOfCar);
var rectangle = {
    height: 10,
    width: 5
};
console.log(rectangle);
var Colored = {
    height: 10,
    width: 5,
    color: 'blue'
};
console.log(Colored);
