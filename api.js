const apiKey = '976afeb78b2af6aa7cb520954f3715ee';
const baseApiURL = 'https://api.themoviedb.org/3'; // API 기본 URL

// 인기 영화 목록을 가져오는 함수
export async function fetchPopularMovies() {
    const url = `${baseApiURL}/movie/popular?api_key=${apiKey}&include_adult=false&language=ko-KR&page=1`;
    const response = await fetch(url);
    const data = await response.json();
    return data.results; // 영화 목록 반환
}

// 영화 검색을 처리하는 함수
export async function searchMovies(searchTerm) {
    const url = `${baseApiURL}/search/movie?api_key=${apiKey}&query=${searchTerm}&include_adult=false&language=ko-KR&page=1`;
    const response = await fetch(url);
    const data = await response.json();
    return data.results; // 검색된 영화 목록 반환
}

// 영화 상세 정보를 가져오는 함수
export async function fetchMovieDetails(movieId) {
    const url = `${baseApiURL}/movie/${movieId}?api_key=${apiKey}&include_adult=false&language=ko`;
    const response = await fetch(url);
    const data = await response.json();
    return data; // 영화 세부 정보 반환
}
