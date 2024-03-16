var laptop = {
    make: "Dell",
    model: "X16 R1",
    year: 2024,
    describe: function () {
        console.log("This laptop is a ".concat(this.year, " ").concat(this.make, " ").concat(this.model, "."));
    }
};
laptop.describe();
