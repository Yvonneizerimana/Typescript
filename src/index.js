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
