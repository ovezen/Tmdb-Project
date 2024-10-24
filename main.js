import { fetchPopularMovies, searchMovies, fetchMovieDetails } from './api.js';
import { displayMovies, displayMovieDetails, closeModal } from './ui.js';

// DOM 요소
const searchInput = document.querySelector("#searchInput");
const movieContainer = document.querySelector("#movieContainer");
const closeModalButton = document.querySelector(".close");

// 기본 화면에 인기 영화 목록 표시
fetchPopularMovies().then(movies => {
    displayMovies(movies, movieContainer);
});

// 검색 기능
searchInput.addEventListener('input', () => {
    const searchTerm = searchInput.value.trim().toLowerCase();
    if (searchTerm) {
        searchMovies(searchTerm).then(movies => {
            displayMovies(movies, movieContainer);
        });
    } else {
        fetchPopularMovies().then(movies => {
            displayMovies(movies, movieContainer);
        });
    }
});

// 영화 카드 클릭하면 상세 정보 모달 표시하기
movieContainer.addEventListener('click', (event) => {
    const card = event.target.closest('.movieCard');
    if (card) {
        const movieId = card.getAttribute('data-id');
        fetchMovieDetails(movieId).then(movie => {
            displayMovieDetails(movie);
        });
    }
});

// 모달 닫기
closeModalButton.addEventListener('click', closeModal);
