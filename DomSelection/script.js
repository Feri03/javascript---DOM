// DOM sellection
// document.getElementBy.id() -> mengembalikan element
// const judul = document.getElementById('judul');
// judul.style.color= 'red';
// judul.style.backgroundColor = 'yellow';
// judul.innerHTML = 'Feri Irawan';

// // document.getElementByTagName(); -> HTMLCollection
// const p = document.getElementsByTagName('p');

// for( let i = 0; i < p.length; i++){
//     p[i].style.backgroundColor = 'lightblue';
// }

// const h1 = document.getElementsByTagName('h1')[0];
// h1.style.fontSize = '50px';


// // document.getElementByClassName(); -> HTMLCollection
// const p1 = document.getElementsByClassName('p1');
// p1[0].innerHTML = 'ini diubah dari javascript';


// document.querySelector(); -> element 
// const p4 = document.querySelector('#b p');
// p4.style.color = 'green';
// p4.style.fontSize = '30px';

// const li2 =document.querySelector('section#b ul li:nth-child(2)');
// li2.style.backgroundColor = 'orange';


// // document.querySelectorAll()
// const p = document.querySelectorAll('p');
// for( let i = 0; i < p.length; i++){
//     p[i].style.backgroundColor = "lightblue";
// }









// memilih sebuah element 
const sectionB = document.querySelector('section#b');
const p4 = sectionB.getElementsByTagName('p')[0];
p4.style.backgroundColor = 'orange';





















