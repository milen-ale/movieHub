/* eslint-disable */ 
import { getMovie } from './Api.js';
 const section = document.querySelector('.container');

 const homePage = async () =>{
     const data = await getMovie();
     console.log(data);
     data.forEach((movie) => {
          section.innerHTML += `
          <div class="item"> 
          <div class = "img-container">
             <img src="${movie.image.medium}" alt="">
         </div>
         <div class =" item-content">
         <div class='texts-container'>
         <p class="anim-title">${movie.name}</p>
         <button class="btn-likes"><i class="fa fa-heart" data-likeid> likes</i><span></span></button>
         </div>
          <button>Comment</button>
          <div>
      </div>
          `;
          
     });
  document.querySelector('#main-title').textContent = `Top ${data.length} Movies`;
     
 }
 export default homePage;