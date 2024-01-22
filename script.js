let marsrutai = [{
    marsrutas: "Vilnius - Kaunas",
    isvykimoDataIrLaikas: "2024-01-25 10:00",
    kelionesTrukmeValandomis: "2:15"
  },
  {
    marsrutas: "Kaunas - Klaipeda",
    isvykimoDataIrLaikas: "2024-01-25 12:00",
    kelionesTrukmeValandomis: "4:15"
  },
  {
    marsrutas: "Klaipeda - Varsuva",
    isvykimoDataIrLaikas: "2024-01-26 11:00",
    kelionesTrukmeValandomis: "6:15"
  },
  {
    marsrutas: "Vilnius - Marijampole",
    isvykimoDataIrLaikas: "2024-01-25 09:00",
    kelionesTrukmeValandomis: "3:15"
  },
  {
    marsrutas: "Vilnius - Talinas",
    isvykimoDataIrLaikas: "2024-01-26 10:00",
    kelionesTrukmeValandomis: "25:00"
  }
];


// Marsrutas is A i B 






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