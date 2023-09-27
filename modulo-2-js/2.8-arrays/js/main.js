'use strict';

const workWithMovies = () => {
  const movies = [
    'The Conjuring',
    'El viaje de Chihiro',
    'El fantasma de la ópera',
  ];
  movies[3] = 'Despertares';

  movies[2] = 'La Bella y la bestia';
  return movies;
};

console.log(workWithMovies());
