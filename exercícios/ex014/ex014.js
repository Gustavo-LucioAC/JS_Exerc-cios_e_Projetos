function fizzBuzz(n) {
    for (i = 1; i <= n; i++) {
        const resultado1 = i % 3;
        const resultado2 = i % 5;

        if (resultado1 == 0 && resultado2 == 0) {
            console.log("FizzBuzz");
        } else if (resultado1 == 0) {
            console.log("Fizz");
        } else if (resultado2 == 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
}
fizzBuzz(20);

