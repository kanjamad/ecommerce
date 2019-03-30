
// cereal
    // Product TitleHoney Nut Cheerios
    // Post Honey Bunches Of Oats Cereal
    // Kellogg's Special K Breakfast Cereal
    // Product TitleCinnamon Toast Crunch, Breakfast Cereal

let eat = 0;
let photoCereal = 0;
let cereal = [
    {
        name : "Honey Nut Cheerios",
        url : 'https://images-na.ssl-images-amazon.com/images/I/81rOCRn4PkL._AC_UL320_SR218,320_.jpg',
    },
    {
        name : "Honey Bunches Of Oats Cereal",
        url : 'https://images-na.ssl-images-amazon.com/images/I/91NYiV5kYML._SY550_.jpg',
    },
    {
        name : "Kellogg's Special K Breakfast Cereal",
        url : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrsly5GMuBDWTsIn3qmWtG0lt0lG0QYByGjxC2e-gRB8HH_LgP',
    },
    {
        name : "Cinnamon Toast Crunch, Breakfast Cereal",
        url : 'https://images-na.ssl-images-amazon.com/images/I/91JxxKMBR0L._SY450_.jpg',
    }
];

 const clickCereal = document.getElementById('cereal');
 clickCereal.addEventListener('click', getCereal);


function getCereal() {
    // console.log('get the cereal');
    for (let i = 0; i < cereal.length; i++) {
    // get all 4 boxs of  cereal
      //  console.log(cereal[i]);
        const eat = document.createElement('div');
        eat.innerText = cereal[i].name;
        const photoCereal = document.createElement('img');
        photoCereal.setAttribute('src', cereal[i].url);
        eat.appendChild(photoCereal);
        document.querySelector('#allCereal').appendChild(eat)
    }
}









// Juices
















// Candy