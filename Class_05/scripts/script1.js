const cars = ["Saab", "Volvo", "BMW"];
document.getElementById("array_initial").innerHTML = `${cars} masīva izmērs = ${cars.length} elementi`;

// cars[10] = "Renoult"; - tā nedarām!
var N = cars.push("WV"); // var pievienot vairākus elementus
document.getElementById("array_push").innerHTML = `${cars} masīva izmērs = ${N} elementi`;

N = cars.unshift("Mercedes-Benz"); // var pievienot vairākus elementus
document.getElementById("array_unshift").innerHTML = `${cars} masīva izmērs = ${N} elementi`;

var cars_spliced = cars.splice(1,1,"Skoda","Dodge");
document.getElementById("array_splice").innerHTML = `${cars} masīva izmērs = ${cars.length} elementi (izdzēstie elementi - ${cars_spliced})`;


// delete nedarām
//delete cars [0];
//document.getElementById("array_delete").innerHTML = `${cars} masīva izmērs = ${cars.length} elementi`;

var cars_last = cars.pop();
document.getElementById("array_pop").innerHTML = `${cars} masīva izmērs - ${cars.length} elementi (izdzēstais elements ${cars_last})`;

var cars_first = cars.shift();
document.getElementById("array_shift").innerHTML = `${cars} masīva izmērs - ${cars.length} elementi (izdzēstais elements ${cars_first})`;

cars_spliced = cars.splice(1,2);
document.getElementById("array_splice_without_add").innerHTML = `${cars} masīva izmērs - ${cars.length} elementi (izdzēstie elementi - ${cars_spliced})`;