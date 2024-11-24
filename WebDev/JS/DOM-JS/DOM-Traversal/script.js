// Event Handling

// const container = document.querySelector('.container');
// const card = document.querySelector('.card');
// const close = document.querySelector('.close');

// close.addEventListener('click',function() {
//     // document.body.removeChild(container);
//     card.style.display = 'none';
// });


// DOM Traversal
const close = document.querySelectorAll('.close');

close.forEach(function(el, i) {
    el.addEventListener('click',function(e) {
        e.target.parentElement.style.display = 'none';
    });
});


// for( let i = 0; i < close.length; i++ ) {
//     close[i].addEventListener('click',function(e) {
//         // close[i].parentElement.style.display = 'none';
//         e.target.parentElement.style.display = 'none';
//     });
// }












/* parentNode menghasilkan node */
/* parentElement menghasilkan element */
/* nextSibling menghasilkan node */
/* nextElementSibling menghasilkan element */
/* previousSibling menghasilkan node */
/* previousElementSibling menghasilkan element */









































