const API_KEY = '8bedcb80449786ea4fb4dbc839346d61';
const BASE_URL = 'https://api.themoviedb.org/3';
const API_URL = BASE_URL + '/discover/movie?sort_by=popularity.desc&api_key=' + API_KEY;
const IMG_URL = 'https://image.tmdb.org/t/p/w500';
const searchURL = BASE_URL + '/search/movie?api_key=' + API_KEY;

const grid = document.getElementById('moviegrid');

fetch(API_URL)
  .then(response => response.json())
  .then(data => {
    console.log(data.results);
    showMovies(data.results);
  });

function showMovies(data){
  grid.innerHTML = '';

  data.forEach(movie => {
    const{title, poster_path, vote_average} = movie;
    const amovie = document.createElement('div');
    amovie.classList.add('w-56','h-60','bg-white','rounded-md','shadow-gray-200','flex','justify-center','items-center','relative');
    amovie.innerHTML = `
      <img class="object-cover object-top w-52 h-56" src="${IMG_URL+poster_path}" alt="${title}">
      <p class="absolute left-5 bottom-5 w-36 text-white font-bold text-xl">${title}</p>
      <p class="absolute right-4 bottom-5 text-white">
        <svg xmlns="http://www.w3.org/2000/svg" class="inline-block h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>${vote_average}
      </p>
    `; 

    grid.appendChild(amovie);
  })
}

