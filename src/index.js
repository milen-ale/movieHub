/* eslint-disable import/newline-after-import */
import './index.css';

import homePage from './module/home.js';
import { addLikes } from './module/Api.js';
window.addEventListener('load', homePage);

const content = document.querySelector('.container');
// event for like
content.addEventListener('click', (e) => {
  const clicked = e.target.closest('.like-heart');
  if (!clicked) return;
  const movieId = +clicked.dataset.likeid;
  const likes = {
    item_id: movieId,
  };
  addLikes(likes);
  const numLike = clicked.nextElementSibling.innerText.match(/\d+/g);
  clicked.nextElementSibling.textContent = `${+numLike + 1} Likes`;
});
