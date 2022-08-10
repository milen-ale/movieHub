/* eslint-disable */ 
import { getMovie, getLikes } from './Api.js';
 const section = document.querySelector('.container');

 const homePage = async () =>{
     const data = await getMovie();
     const likesData = await getLikes();
     console.log(likesData);
     data.forEach((movie) => {
        const likes = likesData.find((like) => like.item_id ===movie.likes) || [];
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
          <button>Comment</button>
          <div>
      </div>
          `;
          
     });
  document.querySelector('#main-title').textContent = `Top ${data.length} Movies`;
     
 }
 export default homePage;