const series = [
  {
    title: "Отчаянные домохозяйки",
    year: 2004,
    genre: "Drama",
    rating: 8.0,
    seasons: 8,
    duration: 45,
    finished: true,
    actors: ["Teri Hatcher", "Felicity Huffman"],
    country: "USA",
  },
  {
    title: "Бесстыжие",
    year: 2011,
    genre: "Comedy",
    rating: 8.6,
    seasons: 11,
    duration: 55,
    finished: true,
    actors: ["Emmy Rossum", "William H. Macy"],
    country: "USA",
  },
  {
    title: "Великолепный век",
    year: 2011,
    genre: "Historical",
    rating: 7.7,
    seasons: 4,
    duration: 90,
    finished: true,
    actors: ["Halit Ergenç", "Meryem Uzerli"],
    country: "Turkey",
  },
  {
    title: "Алые сердца Корё",
    year: 2016,
    genre: "Historical, Romance",
    rating: 8.7,
    seasons: 1,
    duration: 60,
    finished: true,
    actors: ["Lee Joon-gi", "IU"],
    country: "Korea",
  },
  {
    title: "Силачка До Бон Сун",
    year: 2017,
    genre: "Romantic Comedy",
    rating: 8.2,
    seasons: 1,
    duration: 60,
    finished: true,
    actors: ["Park Bo-young", "Park Hyung-sik"],
    country: "Korea",
  },
  {
    title: "Виолетта",
    year: 2012,
    genre: "Musical, Teen",
    rating: 6.9,
    seasons: 3,
    duration: 45,
    finished: true,
    actors: ["Martina Stoessel", "Jorge Blanco"],
    country: "Argentina",
  },
  {
    title: "Острые козырьки",
    year: 2013,
    genre: "Crime",
    rating: 8.8,
    seasons: 6,
    duration: 58,
    finished: true,
    actors: ["Cillian Murphy", "Paul Anderson"],
    country: "UK",
  },
  {
    title: "Бумажный дом",
    year: 2017,
    genre: "Thriller",
    rating: 8.2,
    seasons: 5,
    duration: 50,
    finished: true,
    actors: ["Álvaro Morte", "Úrsula Corberó"],
    country: "Spain",
  },
  {
    title: "Деловое предложение",
    year: 2022,
    genre: "Romantic Comedy",
    rating: 8.1,
    seasons: 1,
    duration: 60,
    finished: true,
    actors: ["Ahn Hyo-seop", "Kim Se-jeong"],
    country: "Korea",
  },
  {
    title: "Милый дом",
    year: 2020,
    genre: "Horror, Thriller",
    rating: 8.5,
    seasons: 3,
    duration: 55,
    finished: false,
    actors: ["Song Kang", "Lee Jin-wook"],
    country: "Korea",
  },
];

series.forEach(s => console.log(`${s.title} — рейтинг: ${s.rating}`));


const seriesStrings = series.map(s => `${s.title} (${s.year}) — ${s.seasons} сезонов`);
console.log(seriesStrings);



const unfinished = series.filter(s => !s.finished);
console.log(unfinished);


const moreThanFive = series.find(s => s.seasons > 5);
console.log(moreThanFive);



const hasHighRating = series.some(s => s.rating > 9);
console.log(hasHighRating);


const allAfter2000 = series.every(s => s.year > 2000);
console.log(allAfter2000);



const avgRating = series.reduce((sum, s) => sum + s.rating, 0) / series.length;
console.log(avgRating.toFixed(2));



const sortedByRating = [...series].sort((a, b) => b.rating - a.rating);
console.log(sortedByRating);
