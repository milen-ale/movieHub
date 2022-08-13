import Movies from '../module/Api.js';

test('MoviesCounter test',  () => {
  const counter = await Movies.counterMovies();
  expect(counter).toBe(10);
});
