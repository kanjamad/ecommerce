
// ########################   Cereal   #################################
    
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
      //  console.log(cereal[i].name);
        const eat = document.createElement('div');
        eat.innerText = cereal[i].name;
        const photoCereal = document.createElement('img');
        photoCereal.setAttribute('src', cereal[i].url);
        eat.appendChild(photoCereal);
        document.querySelector('#allCereal').appendChild(eat)
    }
}



// ########################   Juices   #################################

let drink = 0;
let photoJuices = 0;
let juices = [
    {
        name : "Orange Juice",
        url : "https://images.unsplash.com/photo-1519367286790-7b682d3efdbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
    },
    {
        name : "Melon Juice",
        url : "https://images.unsplash.com/photo-1525385133512-2f3bdd039054?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=632&q=80",
    },
    {
        name : "Strawberry cocktail drinks",
        url : "https://images.unsplash.com/photo-1497534446932-c925b458314e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=707&q=80",
    },
    {
        name : "Blueberry Cream Wine Slush",
        url : "https://images.unsplash.com/photo-1501435544023-df4e0c503ae2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=633&q=80",
    },

];

const clickJuices = document.getElementById('juices');
clickJuices.addEventListener('click', getJuices);

function getJuices(){
    console.log('get juices!!!!!!!');
    for (let i = 0; i < juices.length ; i++){
        // get all juices
            // console.log(juices[i].name);
        const drink = document.createElement('div');
        drink.innerText = juices[i].name;
        const photoJuices = document.createElement('img');
        photoJuices.setAttribute('src', juices[i].url);
        drink.appendChild(photoJuices);
        document.querySelector('#allJuices').appendChild(drink);
    }

}



// ########################   Candy   #################################

let eatCandy = 0;
let photoCandy = 0;
let candy = [
    {
        name : "M&M Milk chocolate",
        url : 'https://images.unsplash.com/photo-1534706013986-73f676db1790?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
    },
    {
        name : "Sour gummi worms",
        url : 'https://images.unsplash.com/photo-1499195333224-3ce974eecb47?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=948&q=80',
    },
    {
        name : "Chewy candy",
        url : 'https://images.unsplash.com/photo-1534119139482-b530a7f9a98b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80',
    },
    {
        name : "Gummi bears",
        url : 'https://images.unsplash.com/photo-1547097465-617b04e11bb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80',
    },
];

const clickCandy = document.getElementById('candy');
clickCandy.addEventListener('click', getCandy);

function getCandy() {
    // console.log('eat all candy!!!!!!!');
    for (let i = 0; i < candy.length ; i++){
        // get all Candy
            // console.log(candy[i].name);
            const eatCandy = document.createElement('div');
            eatCandy.innerText = candy[i].name;
            const photoCandy = document.createElement('img');
            photoCandy.setAttribute('src', candy[i].url);
            eatCandy.appendChild(photoCandy);
            document.querySelector('#allCandy').appendChild(eatCandy);
    }

}

