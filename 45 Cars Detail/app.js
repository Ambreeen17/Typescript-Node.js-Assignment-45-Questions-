/*Question# 45
CARS:
Create detailed car objects with flexible properties.*/
function Car_make(manufacturer, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    var car = { manufacturer: manufacturer, model: model };
    options.forEach(function (_a) {
        var key = _a[0], value = _a[1];
        return car[key] = value;
    });
    return car;
}
console.log(Car_make("Toyota", "Hilux", ["color", "red"], ["year", 2022]));
console.log(Car_make("Ford", "Fiesta", ["color", "black"], ["sunroof", true]));
