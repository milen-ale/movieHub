/* eslint-disable */ 
const BASE_URL_MOVIE = 'https://api.tvmaze.com/shows';
const  BASE_URL_INVOLVEMNT ='https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/'
const APP_ID = 'jcfL4bzfqSk0ihg1PeIe'

const getMovie = async() => {
    const url =`${BASE_URL_MOVIE}`;
    const response = await fetch (url);
    const data =await response.json();
    return data.slice (0,24);
};

const postComment = async (comment) => {
    const response = await fetch(`${BASE_URL_INVOLVEMNT}/apps/${APP_ID}/comments`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(comment),
    });
    const data = await response.text();
    return data;
  };

  const getComments = async (commentId) => {
    const response = await fetch(`${BASE_URL_INVOLVEMNT}/apps/${APP_ID}/comments?item_id=${commentId}`);
    const data = await response.text();
    return JSON.parse(data);
  };

  const addLikes = async (like) => {
    const response = await fetch(`${BASE_URL_INVOLVEMNT}/apps/${APP_ID}/likes`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(like),
    });
    const data = await response.text();
    return data;
  };

  const getLikes = async () => {
    const response = await fetch(`${BASE_URL_INVOLVEMNT}/apps/${APP_ID}/likes`);
    const data = await response.text();
    return JSON.parse(data);
  };
  
  

export { getMovie , postComment , getComments, addLikes ,getLikes}