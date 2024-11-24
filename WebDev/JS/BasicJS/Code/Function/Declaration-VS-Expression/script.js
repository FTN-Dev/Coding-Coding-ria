// function declaration
function menulis(nama) {
    alert( 'halo ' + nama );
}
menulis('steaks');

// function expression
var menulis2 = function(a,b) {
    return console.log(a*a + b*b);
};
menulis2(8,3)