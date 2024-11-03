const cars = ["Saab", "Volvo", "BMW"];
document.getElementById("array_initial").innerHTML = `${cars} masīva izmērs = ${cars.length} elementi`;

// cars[10] = "Renoult"; - tā nedarām!
var N = cars.push("WV");
document.getElementById("array_push").innerHTML = `${cars} masīva izmērs = ${N} elementi`;

// delete nedarām
//delete cars [0];
//document.getElementById("array_delete").innerHTML = `${cars} masīva izmērs = ${cars.length} elementi`;

var cars_last = cars.pop();
document.getElementById("array_pop").innerHTML = `${cars} masīva izmērs - ${cars.length} elementi (izdzēstais elements ${cars_last})`;

var cars_first = cars.shift();
document.getElementById("array_shift").innerHTML = `${cars} masīva izmērs - ${cars.length} elementi (izdzēstais elements ${cars_first})`;