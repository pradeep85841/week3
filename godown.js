var load1 = {
    material : "plastic",
    quantity : "500",
    item : "boxes",
}

var load2 = {
    material : "aluminum",
    quantity : "200",
    item : "sheets",
}

const printLoad = {
    container: function(date, time){
        return this.material + "," + this.quantity + "," + this.item + "," + date+ "," +time; 
    }
}

//call function
printLoad.container.call(load1, "28May2022", "10:00am");
printLoad.container.call(load2, "28May2022", "5:00pm");

//apply function
console.log(printLoad.container.apply(load1, ["28May2022", "3:00pm"]));
console.log(printLoad.container.apply(load2, ["28May2022", "9:00pm"]));

//bind function
var bindcontainer = printLoad.container.bind(load2, "28May2022", "5:00pm")
console.log(bindcontainer);