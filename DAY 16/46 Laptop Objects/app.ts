let laptop={
    make:"Dell",
    model:"X16 R1",
    year:  2024,
    describe:function(){
        console.log(`This laptop is a ${this.year} ${this.make} ${this.model}.`);
    }
};
laptop.describe();
