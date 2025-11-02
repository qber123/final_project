function openMovie(title, year, poster) {
    const params = new URLSearchParams({
    title: title,
    year: year,
    poster: poster
    });
    window.location.href = "movie.html?" + params.toString();
}