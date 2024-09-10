// global scope / window scope
var a = 1;

function oke(a) {
    // name conflict
    // var a = 2;

    // console.log(window.a);

    // menimpa variable global
    // a = 2;

    console.log(a);

}

oke(a);
console.log(a);