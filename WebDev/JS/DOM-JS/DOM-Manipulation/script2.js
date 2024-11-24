// DOM node manipulation

// Node = parent element

// document.createElement(); --> membuat element baru pada document
// document.createTextNode(); --> membuat text baru pada document
// node.appendChild(); --> menempatkan element pada akhir element parent
// node.insertBefore(); --> menempatkan element sebelum element yang sudah ditentukan. contoh .node(element, element yang ditentukan);
// parentNode.removeChild(); --> untuk menghapus element child
// parentNode.replaceChild(); --> untuk mengganti element child. contoh replaceChild(element baru, element lama);






// membuat element baru dengan appendChild
const pBaru = document.createElement('p');
const isiPBaru = document.createTextNode('paragraf baru');

// memasukkan text pada element
pBaru.appendChild(isiPBaru);

// memasukkan element pada html
const sectionA = document.getElementById('a');
sectionA.appendChild(pBaru);





// membuat element baru dengan insertBefore
const liBaru = document.createElement('li');
const isiLiBaru = document.createTextNode('Item baru');

// memasukkan text pada element
liBaru.appendChild(isiLiBaru);

// memasukkan element pada html
const ul = document.querySelector('section#b ul');
const li = ul.querySelector('li:nth-child(2)');

ul.insertBefore(liBaru, li);





// menghapus element dengan removeChild
const link = document.querySelector('section#a a');
sectionA.removeChild(link);





// replace element dengan replaceChild
const sectionB = document.getElementById('b');
const p4 = sectionB.querySelector('p');

const h2Baru = document.createElement('h2');
const isiH2 = document.createTextNode('Judul Baru');

h2Baru.appendChild(isiH2);

sectionB.replaceChild(h2Baru, p4)

h2Baru.style.backgroundColor = 'lightgreen';
liBaru.style.backgroundColor = 'lightgreen';
pBaru.style.backgroundColor = 'lightgreen';
































