let marsrutai = [{
  marsrutas: "Vilnius - Kaunas",
  isvykimoDataIrLaikas: "2024-01-25 10:00",
  kelionesTrukmeValandomis: '2:00'
},
{
  marsrutas: "Kaunas - Klaipeda",
  isvykimoDataIrLaikas: "2024-01-25 12:00",
  kelionesTrukmeValandomis: '8:00'
},
{
  marsrutas: "Klaipeda - Varsuva",
  isvykimoDataIrLaikas: "2024-01-26 11:00",
  kelionesTrukmeValandomis: '20:00'
},
{
  marsrutas: "Vilnius - Marijampole",
  isvykimoDataIrLaikas: "2024-01-25 09:00",
  kelionesTrukmeValandomis: '21:00'
},
{
  marsrutas: "Vilnius - Talinas",
  isvykimoDataIrLaikas: "2024-01-26 10:00",
  kelionesTrukmeValandomis: '28:00'
}
];


// Marsrutas is A i B , dest yra destination
function destinationFromAtoB(dest) {
  const departureDateAndTime = dest.isvykimoDataIrLaikas.split(', ');

  const departureDate = departureDateAndTime[0];
  const departureTime = departureDateAndTime[1];

  const arrivalTime = +(departureTime + dest.kelionesTrukmeValandomis);

  console.log('Marsrutas is miesto' + dest.marsrutas + ' i miesta')
  console.log('Isvykomo data:' + departureDate + "Isvykimo laikas" + departureTime)
  console.log('Keliones trukme' + dest.kelionesTrukmeValandomis);
  console.log(dest.kelionesTrukmeValandomis)
}

marsrutai.forEach(destinationFromAtoB);


// Trumpiausios keliones duomenys
let min = Math.min(...marsrutai.map(item => item.kelionesTrukmeValandomis));



function getShortestRouteByTime(obj) {
  let shortestRoute = obj[0].kelionesTrukmeValandomis;
  for (let i = 0; i < obj.length; i++) {
    if (obj[i].kelionesTrukmeValandomis < 3) {
      shortestRoute = obj[i]
    }
    return shortestRoute;
  }
}



console.log(getShortestRouteByTime(marsrutai))
