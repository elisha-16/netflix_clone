const API_KEY = "8969f1bcd1f806cf75f414ee39699fcd";

const requests = {
 fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
 fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_network=213`,
 fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
 fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
 fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
 fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
 fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
 fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,

};

// https://api.themoviedb.org/3/trending/all/week?api_key=8969f1bcd1f806cf75f414ee39699fcd&language=en-US

export default requests;