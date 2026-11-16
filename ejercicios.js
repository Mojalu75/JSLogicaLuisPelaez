function ex1(n = 0) {
    if (n % 3 === 0 && n % 7 === 0) {
        return "Es multiplo de 3 y de 7";
    } else if (n % 7 === 0) {
        return "Es multiplo de 7";
    } else {
        return "No es multiplo";
    }
}

console.log(ex1(21));

function ex2(a, b) {
    return (a >= 10 || b <= 50) ? "Esta en el rang 10 50 " : "no esta en el rang";
}

console.log(ex2(5))
console.log(ex2(39))

function ex3(a) {
    if (a < 4.99) {
        console.log("Suspes")
    } else if (a <= 5.99) {
        console.log("Suficient")
    } else if (a <= 6.99) {
        console.log("Be")
    } else if (a <= 8.99) {
        console.log("Notable")
    } else if (a <= 10) {
        console.log("Excel en té")
    }
}

ex3(9)

function ex4(n) {
    switch (n = typeof 0) {
        case (n % 3 === 0 && n % 7 === 0):
            return "Es multiplo de 3 y de 7"
        case (n % 3 === 0):
            return "És múltiple de 3"
        case (n % 7 === 0):
            return "Es multiplo de 7"
        default:
            return "No es multiplo"
    }
}

console.log(ex4(5))

function ex5(n = 0) {
    let i = 0
    let sum = 0
    while (sum <= n) {
        i++
        sum = sum + i
    }
    return i - 1
}

console.log(ex5(3))

function ex6(x) {
    let suma = 0;

    for (let i = 0; i < x.length; i++) {
        let caracter = x[i];

        if (!isNaN(caracter)) {
            suma += Number(caracter);
        }
    }
    return suma;
}

console.log(ex6("jamon23"))

function ex7(a, b, c) {
    if (a >= b && b >= c) {
        return a + " " + b + " " + c;
    } else if (a >= c && c >= b) {
        return a + " " + c + " " + b;
    } else if (b >= a && a >= c) {
        return b + " " + a + " " + c;
    } else if (b >= c && c >= a) {
        return b + " " + c + " " + a;
    } else if (c >= a && a >= b) {
        return c + " " + a + " " + b;
    } else {
        return c + " " + b + " " + a;
    }
}

console.log(ex7(5, 12, 33));

function ex8(x) {
    for (let i = 0; i < x; i++) {
        if (i % 2 == 0) {
            console.log(i + " par")
        } else {
            console.log(i + " inpar")
        }
    }
}

ex8(4)

function ex9() {
    let txt = ""
    for (let i = 0; i < 5; i++) {
        console.log(txt += "*")
    }
}

ex9()

function ex10() {
    let n = 0
    let suma = 0
    do {
        n++
        if (suma > 1000) {

        } else if (n % 3 == 0 || n % 5 == 0) {
            console.log(suma += n)
        }
    } while (suma <= 1000)
    return suma
}

console.log(ex10())

//function ex11() {
//    let txt = ""
//    for (let i = 0; i < 5; i++) {
//      txt += "*"
//      if ( i % 2 == 0){
//          console.log(txt)
//      }
//  }
//}
function ex11() {
    let txt = ""
    for (let i = 0; i < 5; i++) {
        txt += "*"
        if (i % 2 !== 0) {
            continue
        }
        console.log(txt)
    }
}

ex11()

function ex12(n = 0) {
    n = n.toString()
    let cadena = ""
    if (n.length % 2 == 0) {
        for (let i = 0; i < n.length; i+=2){
            cadena += n[i+1] + n[i]
        }
    } else {
        console.log("pon un par")
    }
    return cadena
}
console.log(ex12(123456))