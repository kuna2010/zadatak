var cars = [{ id: 1, mark: 'audi', model: 'A3', price: 25000, img: 'https://ams.hr/wp-content/uploads/2020/03/Audi-A3-SB_2020-5.jpg' },
{ id: 2, mark: 'Volkswagen', model: 'GOLF 8', price: 80000, img: 'https://automotosvijet.com/images/stories/2019g/897-volkswagen-golf-8.jpg' },
{ id: 3, mark: 'BMW', model: 'X6', price: 200000, img: 'https://i.ytimg.com/vi/vEf7N_GtuvY/maxresdefault.jpg' },
{ id: 4, mark: 'opel', model: 'Insignia', price: 150000, img: 'https://i.ytimg.com/vi/ssI5V2FPwhw/maxresdefault.jpg' },
{ id: 5, mark: 'renault', model: 'Arkana', price: 10000, img: 'https://i.ytimg.com/vi/TrKVBU7XE6U/maxresdefault.jpg' }];

var zag = ['ID', 'MARKA', 'MODEL', 'CIJENA', 'SLIKA']

var tabela = document.createElement('table');
tabela.classList.add('tabla')
var red1 = document.createElement('tr');
for (var i = 0; i < cars.length; i++) {

    var zaglavlje = document.createElement('th')
    zaglavlje.innerHTML = zag[i]
    red1.appendChild(zaglavlje)
    tabela.appendChild(red1)
}
for (var i = 0; i < cars.length; i++) {
    var red = document.createElement('tr');
    var celija = document.createElement('td');
    celija.innerHTML = cars[i].id;
    var celija2 = document.createElement('td');
    celija2.innerHTML = cars[i].mark;
    var celija3 = document.createElement('td');
    celija3.innerHTML = cars[i].model;
    var celija4 = document.createElement('td');
    celija4.innerHTML = cars[i].price;
    var img = new Image();
    img.style.width = '200px';
    img.style.height = '100px';
    img.src = cars[i].img
    var celija5 = document.createElement('td');

    tabela.appendChild(red)
    red.appendChild(celija)
    red.appendChild(celija2)
    red.appendChild(celija3)
    red.appendChild(celija4)
    red.appendChild(celija5)
    celija5.appendChild(img)

}

document.body.appendChild(tabela);

