// ********************************************
// *************** JAVASCRIPT *****************
// ********************************************

// ************** EJERCICIO 1 JS *******************

// Un texto en formato CSV tiene el nombre de los campos en la primera fila y los datos en el resto, separados por comas. Crea un parseador que reciba un string en formato CSV y devuelva una colección de objetos. Utiliza destructuring, rest y spread operator donde creas conveniente.
// Extra: Añade un segundo argumento a la función para indicar el número de atributos a añadir. Si dicho argumento no es informado cada objeto tendrá todos los atributos.

const data = `id,name,surname,gender,email,picture
15519533,Raul,Flores,male,raul.flores@example.com,https://randomuser.me/api/portraits/men/42.jpg
82739790,Alvaro,Alvarez,male,alvaro.alvarez@example.com,https://randomuser.me/api/portraits/men/48.jpg
37206344,Adrian,Pastor,male,adrian.pastor@example.com,https://randomuser.me/api/portraits/men/86.jpg
58054375,Fatima,Guerrero,female,fatima.guerrero@example.com,https://randomuser.me/api/portraits/women/74.jpg
35133706,Raul,Ruiz,male,raul.ruiz@example.com,https://randomuser.me/api/portraits/men/78.jpg
79300902,Nerea,Santos,female,nerea.santos@example.com,https://randomuser.me/api/portraits/women/61.jpg
89802965,Andres,Sanchez,male,andres.sanchez@example.com,https://randomuser.me/api/portraits/men/34.jpg
62431141,Lorenzo,Gomez,male,lorenzo.gomez@example.com,https://randomuser.me/api/portraits/men/81.jpg
05298880,Marco,Campos,male,marco.campos@example.com,https://randomuser.me/api/portraits/men/67.jpg
61539018,Marco,Calvo,male,marco.calvo@example.com,https://randomuser.me/api/portraits/men/86.jpg`;

const fromCSV = (csv) => {
  let dataArray = data.replace(/[\n]/gm, ",").split(",");
  let firstRow = dataArray.slice(0, 6);
  let users = dataArray.slice(7, dataArray.length);
  const userList = [];

  for (let i = 0; i < users.length; i += 6) {
    let user = {};
    user.id = users[i];
    user.name = users[i + 1];
    user.surname = users[i + 2];
    user.email = users[i + 3];
    user.picture = users[i + 4];

    userList.push(user);
  }
  return userList;
};

const result = fromCSV(data);

// ************** EJERCICIO 2 JS *******************

// Implementar una funcion replaceAt que tome como primer argumento un array, como segundo argumento un índice y como tercer argumento un valor y reemplace el elemento dentro del array en el índice indicado. El array de entrada no debe de ser mutado, eso es, que debes crear un nuevo array sin modificar el existente. Utiliza spread operator, y slice para conseguirlo.

const elements = ["lorem", "ipsum", "dolor", "sit", "amet"];
const index = 2;
const newValue = "furor";

const replaceAt = (arr, index, newElement) => {
  let arrayCopy = [...arr];
  arrayCopy[index] = newElement;
  return arrayCopy;
};

const result2 = replaceAt(elements, index, newValue);

// ************** EJERCICIO 3 JS *******************

// Crea una función que reciba una colección de objetos y un año. Dicha función deberá de mostrar los nombres de las tres personas con el ranking más alto del año.

const data3 = [
  {
    ranking: 6.3,
    year: 1998,
    name: "Monroe",
    gender: "Genderfluid",
    id: 1450,
    surname: "Jerde",
  },
  {
    ranking: 5.4,
    year: 1999,
    name: "Maxie",
    gender: "Bigender",
    id: 1652,
    surname: "Keebler",
  },
  {
    ranking: 8.7,
    year: 2000,
    name: "Emilee",
    gender: "Genderqueer",
    id: 4779,
    surname: "Ritchie",
  },
  {
    ranking: 6.5,
    year: 2001,
    name: "Rudy",
    gender: "Bigender",
    id: 7105,
    surname: "Gusikowski",
  },
  {
    ranking: 7.1,
    year: 1998,
    name: "Randy",
    gender: "Genderqueer",
    id: 5950,
    surname: "Lebsack",
  },
  {
    ranking: 4.9,
    year: 2000,
    name: "Esteban",
    gender: "Genderqueer",
    id: 7987,
    surname: "Fritsch",
  },
  {
    ranking: 5.3,
    year: 2001,
    name: "Leonard",
    gender: "Male",
    id: 6268,
    surname: "Frami",
  },
  {
    ranking: 8.8,
    year: 2002,
    name: "Lang",
    gender: "Polygender",
    id: 1033,
    surname: "Dietrich",
  },
  {
    ranking: 9.1,
    year: 2000,
    name: "Lettie",
    gender: "Agender",
    id: 6403,
    surname: "Gutmann",
  },
  {
    ranking: 6.0,
    year: 1998,
    name: "Shonda",
    gender: "Agender",
    id: 1324,
    surname: "Borer",
  },
  {
    ranking: 7.3,
    year: 2003,
    name: "Francene",
    gender: "Agender",
    id: 6836,
    surname: "Blanda",
  },
  {
    ranking: 6.8,
    year: 2003,
    name: "Everett",
    gender: "Polygender",
    id: 4937,
    surname: "O'Keefe",
  },
  {
    ranking: 5.3,
    year: 1998,
    name: "Bernardo",
    gender: "Agender",
    id: 8148,
    surname: "Baumbach",
  },
  {
    ranking: 9.3,
    year: 2003,
    name: "Brianna",
    gender: "Female",
    id: 7716,
    surname: "Schamberger",
  },
  {
    ranking: 9.7,
    year: 1998,
    name: "Douglass",
    gender: "Male",
    id: 4152,
    surname: "Hilpert",
  },
  {
    ranking: 4.8,
    year: 1998,
    name: "Angel",
    gender: "Female",
    id: 355,
    surname: "O'Hara",
  },
  {
    ranking: 5.7,
    year: 2000,
    name: "Hugh",
    gender: "Male",
    id: 9600,
    surname: "Hilll",
  },
  {
    ranking: 8.5,
    year: 1999,
    name: "Graciela",
    gender: "Agender",
    id: 871,
    surname: "Kerluke",
  },
  {
    ranking: 2.4,
    year: 2000,
    name: "Chassidy",
    gender: "Agender",
    id: 4313,
    surname: "Hegmann",
  },
  {
    ranking: 3.4,
    year: 1999,
    name: "Abdul",
    gender: "Agender",
    id: 367,
    surname: "Weimann",
  },
  {
    ranking: 7.1,
    year: 2002,
    name: "Coleen",
    gender: "Non-binary",
    id: 1428,
    surname: "Feil",
  },
  {
    ranking: 8.7,
    year: 2001,
    name: "Eleanora",
    gender: "Genderfluid",
    id: 984,
    surname: "Barton",
  },
  {
    ranking: 9.7,
    year: 2002,
    name: "Sean",
    gender: "Agender",
    id: 5689,
    surname: "Runolfsson",
  },
  {
    ranking: 4.5,
    year: 1999,
    name: "Ike",
    gender: "Female",
    id: 8445,
    surname: "Haag",
  },
  {
    ranking: 7.7,
    year: 2001,
    name: "Rachele",
    gender: "Genderqueer",
    id: 6978,
    surname: "Grady",
  },
  {
    ranking: 9.1,
    year: 2001,
    name: "Sam",
    gender: "Bigender",
    id: 1321,
    surname: "Fritsch",
  },
  {
    ranking: 9.0,
    year: 2000,
    name: "Eddy",
    gender: "Polygender",
    id: 8273,
    surname: "Kemmer",
  },
  {
    ranking: 4.6,
    year: 1999,
    name: "Jamar",
    gender: "Female",
    id: 6052,
    surname: "Grant",
  },
  {
    ranking: 9.3,
    year: 2001,
    name: "Dino",
    gender: "Genderfluid",
    id: 5671,
    surname: "Erdman",
  },
  {
    ranking: 7.6,
    year: 1999,
    name: "Ervin",
    gender: "Non-binary",
    id: 9945,
    surname: "Powlowski",
  },
];

const winnerByYear = (arr, year) => {
  let arrSortedByRating = arr.sort((a, b) => {
    if (a.ranking < b.ranking) {
      return 1;
    }
    if (a.ranking > b.ranking) {
      return -1;
    }
    return 0;
  });

  let yearWinners = arrSortedByRating
    .filter((student) => student.year === year)
    .slice(0, 3)
    .map((student) => {
      return student.name;
    });

  return yearWinners ?? [];
};

winnerByYear(data3, 1999);

console.log(winnerByYear(data3, 1998)); // [ 'Douglass', 'Randy', 'Monroe' ]
console.log(winnerByYear(data3, 1999)); // [ 'Graciela', 'Ervin', 'Maxie' ]
console.log(winnerByYear(data3, 2000)); // [ 'Lettie', 'Eddy', 'Emilee' ]
console.log(winnerByYear(data3, 2001)); // [ 'Dino', 'Sam', 'Eleanora' ]
console.log(winnerByYear(data3, 2002)); // [ 'Sean', 'Lang', 'Coleen' ]
console.log(winnerByYear(data3, 2003)); // [ 'Brianna', 'Francene', 'Everett' ]
console.log(winnerByYear(data3, 2004)); // []

// ************** EJERCICIO42 JS *******************

// Crear funcion para normalizar una colección de objetos a un objeto, de tal manera que devuelva un objeto que tenga como claves las ids de los objetos y como valores los objetos en sí pero sin la id.

const collection = [
  {
    id: "f0b6930c-331a-43e1-80db-e6c46ed552aa",
    nationality: "Barbadians",
    language: "English",
    capital: "Belgrade",
    national_sport: "taekwondo",
    flag: "🇮🇩",
  },
  {
    id: "3e690823-fc74-4376-999a-501e5f9ae4be",
    nationality: "Congolese",
    language: "German",
    capital: "Kinshasa",
    national_sport: "wrestling",
    flag: "🇺🇾",
  },
  {
    id: "9edd87d6-2f4f-4701-8ec4-272a361dbfe9",
    nationality: "Libyans",
    language: "Tagalog",
    capital: "Jakarta",
    national_sport: "buzkashi",
    flag: "🇬🇼",
  },
  {
    id: "9873a1ed-6dc5-4034-8214-1f428c8951bd",
    nationality: "Guineans",
    language: "Hakka",
    capital: "Ankara",
    national_sport: "gymnastics",
    flag: "🇹🇷",
  },
  {
    id: "4679c4a4-4e2e-4470-a900-2445dc1f4a1e",
    nationality: "Ugandans",
    language: "German",
    capital: "Beijing",
    national_sport: "dandi biyo",
    flag: "🇮🇳",
  },
  {
    id: "4274ad62-5089-4b8e-a002-b2c1c3c74926",
    nationality: "Finns",
    language: "Swedish",
    capital: "Djibouti",
    national_sport: "bull fighting",
    flag: "🇭🇲",
  },
  {
    id: "2bb25c20-7962-47b7-82d9-d62a9493308f",
    nationality: "Poles",
    language: "Swedish",
    capital: "Beirut",
    national_sport: "cricket",
    flag: "🇰🇭",
  },
  {
    id: "9b3e09da-7484-49f3-aed0-13ccc7e77fff",
    nationality: "Guineans",
    language: "Portuguese",
    capital: "Guatemala City",
    national_sport: "cricket",
    flag: "🇩🇪",
  },
  {
    id: "903fb062-647c-46f8-857f-c1eba0cbbc9b",
    nationality: "Ivoirians",
    language: "Nepali",
    capital: "Juba",
    national_sport: "cricket",
    flag: "🇫🇮",
  },
  {
    id: "21bcd231-1d8f-49f5-826a-1dc986c52f0d",
    nationality: "Hungarians",
    language: "Russian",
    capital: "Tarawa Atoll",
    national_sport: "gymnastics",
    flag: "🇲🇴",
  },
];

const normalize = (arr) => {
  let arrFormatted = [];
  arr.forEach((country) => {
    const { id, ...countryWithoutId } = country;
    let newCountry = {
      [country.id]: {
        ...countryWithoutId,
      },
    };
    arrFormatted.push(newCountry);
  });
  return arrFormatted;
};

const result4 = normalize(collection);

// ************** EJERCICIO 5 JS *******************

// Implementa una función para eliminar valores falsys de una estructura de datos. Si el argumento es un objeto, deberá eliminar sus propiedades falsys. Si el argumento es un array, deberá eliminar los elementos falsys. Si el argumento es un objeto o un array no deberán ser mutados. Siempre deberá de crear una estructura nueva. Si no es ni un objeto ni un array deberá de devolver dicho argumento.

const compact = (arg) => {
  if (Array.isArray(arg)) {
    return arg.filter(Boolean);
  } else if (typeof arg === "object") {
    let newObj = {};
    for (let key in arg) {
      if (arg[key]) {
        newObj[key] = arg[key];
      }
    }
    return newObj;
  } else {
    return arg && arg;
  }
};

console.log(compact(123)); // 123
console.log(compact(null)); // null
console.log(compact([0, 1, false, 2, "", 3])); // [1, 2, 3]
console.log(compact({})); // {}
console.log(
  compact({
    price: 0,
    name: "cloud",
    altitude: NaN,
    taste: undefined,
    isAlive: false,
  })
); // {name: "cloud"}
