function funkcijas_vards_1() {}
function funkcijas_vards_2() {return 1;}

function square(number) {
    return number * number;
  }

funkcijas_vards_1();
funkcijas_vards_2();

document.getElementById("demo").innerHTML = `Skaitļa ${5} Kvadrāts ir ${square(5)}`;

