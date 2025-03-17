// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then((response) => response.json())
//     .then((data) => {
//         console.log(data);
//     })

//     .catch((error) => {
//         console.log('Terjadi kesalahan', error)
//     })

fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((name) => {
        console.log(name);
    })

    .catch((error) => {
        console.log('Terjadi kesalahan', error)
    })