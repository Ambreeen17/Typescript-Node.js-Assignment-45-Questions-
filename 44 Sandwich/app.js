function make_sandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Making a sandwich with: ".concat(items.join(','), "."));
}
make_sandwich("chicken", "cheese");
make_sandwich("egg", "mayo", "special Spicy Sauce");
make_sandwich("green Sauce", "cheesy chicken Spread", "lettuce");
