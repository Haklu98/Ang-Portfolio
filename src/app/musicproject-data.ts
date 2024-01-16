import { Musicprojects } from './musicprojects';

export const MusicProjectData: Musicprojects[] = [
  {
    id: 1,
    name: 'Aleksi Hakala - Remember',
    year: 2023,
    type: 'Single',
    description:
      'Oma-kustanteinen ambient -kappale, jonka tein lähtökohtaisesti lyhyt-dokumenttia varten. Äänitetty, tuotettu ja miksattu FL-Studiota hyödyntäen. Kitarat on luonnollisesti soitettu itse ja loput ovat sitten generoitu pluginien avulla.',
    roles: ['Tuottaja', 'Säveltäjä', 'Miksaaja'],
    url: new URL(
      'https://open.spotify.com/track/41l7p8fMzl5mgOBQO4vI8a?si=c9cb55591d5140c8'
    ),
    image: 'assets/img/Remember.png',
  },
  {
    id: 2,
    name: 'Bohemian Ronin - Dawn',
    year: 2023,
    type: 'Single',
    description:
      'Olin ystävälleni tuottajana ja miksaajana hänen musiikkiprojektissaan.',
    roles: ['Tuottaja', 'Miksaaja'],
    url: new URL(
      'https://open.spotify.com/track/79S3VVQvGMJf8dllrKWmP8?si=793d531ec5124c21'
    ),
    image: 'assets/img/dawn.webp',
  },
  {
    id: 3,
    name: 'Selina Hakala - Laastari',
    year: 2023,
    type: 'Single',
    description:
      'Toimin tuottajana, sekä miksaajana siskolleni hänen debyyttisinkussaan.',
    roles: ['Tuottaja', 'Miksaaja'],
    url: new URL(
      'https://open.spotify.com/track/6SnYdvLmnMXLEGn4jE1Tu0?si=3eb936a7d5d64382'
    ),
  },
  {
    id: 4,
    name: 'Aleksi Hakala - Melodies from a Time Before',
    year: 2023,
    type: 'Album',
    description:
      'Music & Sound for Videogames -kurssin päättötyönä julkaisin sitä varten tekemäni soundtrackit. Tavoitteena oli luoda fantasiamainen tunnelma, sekä luoda soundscapeja',
    roles: ['Säveltäjä', 'Tuottaja', 'Miksaaja', 'Sovittaja'],
    url: new URL(
      'https://open.spotify.com/album/3ocjs5Rduf44OpbVpe5g1l?si=VjKJbSlfRGOvJd0nKZCxDw'
    ),
    image: 'assets/img/albumcover-melodies.jpg',
  },
  {
    id: 5,
    name: 'Aleksi Hakala - Stargazing at Night',
    year: 2023,
    type: 'Single',
    description: 'Juujeps',
    roles: ['Tuottaja', 'Säveltäjä', 'Miksaaja'],
    url: new URL(
      'https://open.spotify.com/track/5QnjD1sfWe8Bfl92kEAzaA?si=69224b584b814217'
    ),
    image: 'assets/img/StargazingatNight.jpg',
  },
  {
    id: 6,
    name: 'Aleksi Hakala - Snow',
    year: 2022,
    type: 'Single',
    description: 'Juujeps',
    roles: ['Tuottaja', 'Säveltäjä', 'Miksaaja'],
    url: new URL(
      'https://open.spotify.com/track/3cdTasnOTGyM3aGsX12lHq?si=c4a7813505314951'
    ),
    image: 'assets/img/Snowalbumcover.jpg',
  },
  {
    id: 7,
    name: 'Aleksi Hakala - Sanomattakin Selvää',
    year: 2022,
    type: 'Single',
    description: 'Juujeps',
    roles: ['Tuottaja', 'Säveltäjä', 'Miksaaja', 'Sanoittaja'],
    url: new URL(
      'https://open.spotify.com/track/43mYokndkRVJv2sZZnFKg3?si=eb69f348ded54c39'
    ),
    image: 'assets/img/Sanomattakinselv.jpg',
  },
  {
    id: 8,
    name: 'Aleksi Hakala & Severi Boesen - M.E.T.O',
    year: 2022,
    type: 'Single',
    description: 'Juujeps',
    roles: ['Säveltäjä', 'Sanoittaja'],
    url: new URL(
      'https://open.spotify.com/track/2sVx5Qqj11MeYLiYvah1AM?si=48844dbea6444317'
    ),
    image: 'assets/img/METO.jpg',
  },
  {
    id: 9,
    name: 'Aleksi Hakala - Kaksi',
    year: 2021,
    type: 'Single',
    description: 'Juujeps',
    roles: ['Tuottaja', 'Säveltäjä', 'Miksaaja', 'Sanoittaja'],
    url: new URL(
      'https://open.spotify.com/track/12JPeytaKV9E23I2uZdGwK?si=61f54d6af1224ec8'
    ),
  },
  {
    id: 10,
    name: 'Aleksi Hakala - Keskellä Maailmaa',
    year: 2021,
    type: 'Single',
    description: 'Juujeps',
    roles: ['Säveltäjä', 'Miksaaja', 'Sanoittaja', 'Tuottaja'],
    url: new URL(
      'https://open.spotify.com/track/7dhrRUEHlLh0UAGiHbJQfO?si=14837439ac334c70'
    ),
  },
  {
    id: 11,
    name: 'Aleksi Hakala - Kolme kertaa',
    year: 2021,
    type: 'Single',
    description: 'Juujeps',
    roles: ['Säveltäjä', 'Miksaaja', 'Sanoittaja', 'Tuottaja'],
    url: new URL(
      'https://open.spotify.com/track/2hlJzdfIqVWGCBZWwdsPn6?si=d89e739fa89b4863'
    ),
  },
  {
    id: 12,
    name: 'Aleksi Hakala & Severi Boesen - Nestorin Joulu',
    year: 2020,
    type: 'Single',
    description: 'Juujeps',
    roles: ['Säveltäjä'],
    url: new URL(
      'https://open.spotify.com/track/4DBBE8jjQNK3QwyOGyP2mx?si=f4098cd0522f4144'
    ),
  },
  {
    id: 13,
    name: 'Aleksi Hakala - 02:20',
    year: 2020,
    type: 'Single',
    description: 'Juujeps',
    roles: ['Säveltäjä', 'Miksaaja', 'Tuottaja'],
    url: new URL(
      'https://open.spotify.com/track/1b8vkyRvueJp1gGtwZnLIx?si=7965a052275c460a'
    ),
  },
  {
    id: 14,
    name: 'Aleksi Hakala - Tell Me',
    year: 2020,
    type: 'Single',
    description: 'Juujeps',
    roles: ['Säveltäjä', 'Miksaaja', 'Tuottaja', 'Sanoittaja'],
    url: new URL(
      'https://open.spotify.com/track/1B8cYDPnNFlVo7MwhBlvA3?si=5dcffa96201b4743'
    ),
  },
  {
    id: 15,
    name: 'Aleksi Hakala - Sanoja',
    year: 2019,
    type: 'Single',
    description: 'Juujeps',
    roles: ['Säveltäjä', 'Miksaaja', 'Tuottaja', 'Sanoittaja'],
    url: new URL(
      'https://open.spotify.com/track/77nn2qx656NSG9adDo6b9T?si=fe95d4292036437e'
    ),
  },
  {
    id: 16,
    name: 'Aleksi Hakala - Keskeneräinen',
    year: 2018,
    type: 'Single',
    description: 'Juujeps',
    roles: ['Säveltäjä', 'Miksaaja', 'Tuottaja', 'Sanoittaja'],
    url: new URL(
      'https://open.spotify.com/track/6V2PQgivuP46rHcBycviBz?si=298c5e56d8664c03'
    ),
  },
];
