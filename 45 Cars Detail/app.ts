let car = {
    manufacturer: string;
    model: string;
    [key: string]: any; // Allow any additional properties
}

function  Car_make(manufacturer: string, model: string, ...options: [string, any][]): Car {
    let car: Car = { manufacturer, model };
    options.forEach(([key, value]) => car[key] = value);
    return car;
}

console.log(Car_make("Toyota", "Hilux", ["color", "red"], ["year", 2022]));
console.log(make_car("Ford", "Fiesta", ["color", "black"], ["sunroof", true]));
