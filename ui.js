// 영화 목록을 화면에 표시하는 함수
export function displayMovies(movies, container) {
    container.innerHTML = movies.map(movie => `
        <div class="movieCard" data-id="${movie.id}">
            <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="no image">
            <h3>${movie.title}</h3>
            <p>평점 ${movie.vote_average}점</p>
        </div>
    `).join('');
}

// 영화 상세 정보를 모달에 표시하는 함수
export function displayMovieDetails(movie) {
    const modalImage = document.querySelector("#moviePoster");
    const modalTitle = document.querySelector("#movieTitle");
    const modalOverview = document.querySelector("#movieOverview");
    const modalReleaseDate = document.querySelector("#movieReleaseDate");

    modalImage.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
    modalTitle.textContent = movie.title;
    modalOverview.textContent = movie.overview;
    modalReleaseDate.textContent = `개봉일: ${movie.release_date}`;

    // 모달을 화면에 표시하기
    const movieModal = document.querySelector("#movieModal");
    movieModal.style.display = 'block';
}

// 모달 닫는 함수
export function closeModal() {
    const movieModal = document.querySelector("#movieModal");
    movieModal.style.display = 'none';
}
