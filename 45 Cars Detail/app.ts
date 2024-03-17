function  Car_make(manufacturer: string, model: string, ...options: [string, any][]): Object {
    let Car= { manufacturer, model };
    options.forEach(([key, value]) => car[key] = value);
    return car;
}

console.log(Car_make("Toyota", "Hilux", ["color", "red"], ["year", 2022]));
console.log(Car_make("Ford", "Fiesta", ["color", "black"], ["sunroof", true]));

