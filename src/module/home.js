/* eslint-disable */
import { getMovie, getLikes, getComments } from './Api.js';
const section = document.querySelector('.container');

const homePage = async () => {
  const data = await getMovie();
  const likesData = await getLikes();
  const comments = await getComments();
  console.log(likesData);
  data.forEach((movie) => {
    const likes = likesData.find((like) => like.item_id === movie.likes) || [];
    const like = likes.likes || 0;
    section.innerHTML += `
          <div class="item"> 
          <div class = "img-container">
             <img src="${movie.image.medium}" alt="">
         </div>
         <div class =" item-content">
         <div class='texts-container'>
         <p class="movie-title">${movie.name}</p>
         <button class="btn-likes"><img class = "like-heart" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2K8owv-3mxT9d_LUeJ4KPt4car7cer1v_EttngB0fqED1mviLqRKyNfq3KjFvfpsK6Fw&usqp=CAU" alt=""><span>${like}likes</span></button>
         </div>
          <button id="${APP_ID}" class="button">Comment</button>
          <div>
      </div>
          `;
  });
  document.querySelector(
    '#main-title'
  ).textContent = `Top ${data.length} Movies`;

  const commentBtn = document.querySelectorAll('.button');
  commentBtn.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const id = e.target.getAttribute('commentid');
      const movie = data.filter((elem) => elem.show.id === parseInt(id, 24))[0]
        .show;
      const popupDiv = `<div class="show-popup">
        <div class= "popups">
        <div class="closebtn" id="delete">
        <i class="fas fa-times"></i>
        </div>  
           <div class="firstPopUpDetails">
           <div class="popup-image">
           <img src="${movie.image.medium}" alt="character">
               </div>
               <div class="title">
                 <h1>${movie.name}</h1>
                   </div> 
           </div>
            
           <div class="contents">
           <div class="card">
             
             <ul class="details">
               <li><p>Genre:</p> <span>${
                 movie.genres.toString() || 'Not Available'
               }</span></li>
               <li><p>Language:</p> <span>${movie.language}</span></li>
               <li> <p>Premiered:</p> <span>${movie.premiered}</span></li>
               <li> <p>Rating:</p> <span>${movie.rating.average}</span></li>
               <li> <p>Official site:</p> <span><a class="link" href="${
                 movie.officialSite
               }">Watch</a></span></li>
             </ul>  
           </div>
           <div class="summary">
           <h5 class="center">Summary</h5>
           <p>${movie.summary}</p>
         </div>
         <div class="d-comments">
         <h5 class="comment-count center">Comments 0</h5>
         <ul class="display-comments"></ul>
       </div>
         
           <div class="form-div">
           <h5 class="center">Add comments</h5>
           <form class = "form" action="">
             <input class="username" type="text" placeholder="Your name ...">
             <input class="comment" type="text" placeholder="Your comment ...">
             <button class="add-comment button" type="submit">comment</button>
           </form>
           </div>
        </div>
        </div>`;

      document.body.insertAdjacentHTML('beforeend', popupDiv);
      const closeBtn = document.querySelector('#delete');
      closeBtn.addEventListener('click', () => {
        document.querySelector('.show-popup').remove();
      });

      this.getComments(id);
    });
  });
};
export default homePage;
