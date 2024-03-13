function describe_city(city, country) {
    if (country === void 0) { country = "Saudia Arab"; }
    console.log("".concat(city, " is in ").concat(country));
}
describe_city("Makkah");
describe_city("Madina");
describe_city("Jaddah");
describe_city("Karachi", "Pakistan");
