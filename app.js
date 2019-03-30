console.log("Hi!!!!");

// cereal
    // Product TitleHoney Nut Cheerios
    // Post Honey Bunches Of Oats Cereal
    // Kellogg's Special K Breakfast Cereal
    // Product TitleCinnamon Toast Crunch, Breakfast Cereal

let eat = 0;

 let cereal =["Product TitleHoney Nut Cheerios","Post Honey Bunches Of Oats Cereal","Kellogg's Special K Breakfast Cereal", "Product TitleCinnamon Toast Crunch"];
 const clickCereal = document.getElementById('cereal');
 clickCereal.addEventListener('click', getCereal);


 function getCereal(){
    // console.log('get the cereal');
    for (var i=0; i < cereal.length; i++){
        // get 4 cereal
        //  console.log(cereal[i]);
                const eat= document.createElement('div');
                eat.innerText = cereal[i];
                document.querySelector('#allCereal').appendChild(eat)

    }
}
