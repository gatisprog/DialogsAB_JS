function test(a, ...b) {
    // Izvada pirmo parametru un tā tipu
    console.log(typeof(a), a);

    // Izvada pārējos parametrus, to garumu un tipu
    console.log(typeof(b), b.length, b);

    // Izvada pirmā masīva parametra tipu, garumu un vērtību
    console.log(typeof(b[0]), b[0].length, b[0]);

    // Iterē cauri masīvam un izvada katru vērtību
    let b_values = b[0];
    for (let value of b_values) {
        console.log(value);
    }

    // Izmanto entries(), lai iegūtu indeksu un vērtību katrai masīva vienībai
    for (let [index, value] of b_values.entries()) {
        console.log(index + ' ' + value);
    }
}

// Funkcijas testēšana
test(1, [2, 3, 4, 5]);
