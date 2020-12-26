
const close = document.querySelectorAll('.close');
close.forEach(function(e){
    e.addEventListener('click', function (e) {
        e.target.parentElement.style.display = 'none';
        e.preventDefault(); // metod
        e.stopPropagation(); // method
    });
});

const cards = document.querySelectorAll('.card');
cards.forEach(function (card) {
    card.addEventListener('click', function (e
    ) {
        alert('ok');
    });
});

























