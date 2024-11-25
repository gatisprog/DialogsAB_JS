//https://www.w3schools.com/js/tryit.asp?filename=tryjs_object_constructor

function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
    this.city = "Rīga"
    this.nationality = "Latvian"
    this.fullName = function() {
        return this.firstName + " " + this.lastName
      };
    }

//const myFather = {firstName: "John", latsName: "Doe", age: 50, eye:"blue"};
const myFather = new Person("John", "Doe", 50, "blue");

//const myFather = {firstName: "Anna", latsName: "Hill", age: 48, eye:"green"};
const myMother = new Person("Anna", "Hill", 48, "green");

const myBrother = new Person("Kurts", "Osis", 9, "grey");

document.getElementById("demo").innerHTML = "My father is " + myFather.fullName();

//document.getElementById("demo").innerHTML = "My mother is " + myMother.fullName();