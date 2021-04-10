/**
 * En el siguiente array de objetos (beers)
 * 1.- Desarrollar una function que retorne un array que incluya el precio segun el siguiente criterio
 *     a) Si el  grado alcoholico es < a 5.0 el precio es 300
 *     b) Si el grado alcoholico es >= 5.0 el precio es 350
 *     c) La cerveza 'Purple Iris' esta de oferta y si precio es 320
 * 2.- Desarrolle una función que inserte la propiedad file_name a cada uno de los objetos, esta propiedad debe tener solo
 * el nombre del archivo de la propiedad label (upload_xOMnlK-large.png, etc..)
 * 3.- Desarrollo una funcion que ordene por tipo (type)
 * 
 
 /*
  Beers
*/
const beers = [
    { name: 'Purple Iris', abv: 6.8, label: 'https://s3.amazonaws.com/brewerydbapi/beer/dMLwGo/upload_yiUllE-large.png', type: 'IPA' },
    { name: 'Orange Blossom Pilsner', abv: 5.5, label: 'https://s3.amazonaws.com/brewerydbapi/beer/Rczcb9/upload_9Nhxxl-large.png', type: 'Pilsner' },
    { name: 'Darkness', abv: 4.2, label: 'https://s3.amazonaws.com/brewerydbapi/beer/lnxbIV/upload_idNXFf-large.png', type: 'Stout' },
    { name: 'Belgian Wit', abv: 5.4, label: 'https://s3.amazonaws.com/brewerydbapi/beer/3CvVQG/upload_xOMnlK-large.png', type: 'Wheat' },
    { name: 'Stolen Fruit', abv: 4.6, label: 'https://s3.amazonaws.com/brewerydbapi/beer/YGT30k/upload_uVCHP7-large.png', type: 'Wheat' },
  ];

 /* SOLUCION */ 

 //1)

 function calculaPrecio (abv,name){
  const amarga = 5;
  const oferta = 'Purple Iris';
  let precio = 300;
  if(abv >= amarga) {precio = 350};
  if(name === oferta) {precio = 320};
  return precio;
 }

 function beersConPrecio(beerArr){
    return beerArr
            .map(beer => ({
              name: beer.name,
              abv: beer.abv,
              label: beer.label,
              type: beer.type,
              precio: calculaPrecio(beer.abv,beer.name)
            }));
 };

//test 1: console.log(beersConPrecio(beers));

//2)

function addFileName(beerArr){
    return beerArr
        .map(beer => ({
          name: beer.name,
          abv: beer.abv,
          label: beer.label,
          type: beer.type,
          precio: beer.precio,
          file_name: beer.label.split('/').pop()
        }));
};

//test2: console.log(addFileName(beersConPrecio(beers)));

//3)

function ordernarPorTipo(beerArr){
  return beerArr.sort((a,b) => (a.type < b.type) ? 1:-1);
};

//lo ordeno a la inversa para probar que funcione
//test3: console.log(ordernarPorTipo(addFileName(beersConPrecio(beers))));