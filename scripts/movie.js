const params = new URLSearchParams(window.location.search);
const title = params.get("title");
const year = params.get("year");
const poster = params.get("poster");

if (title && year && poster) {
    document.getElementById("title").textContent = title;
    document.getElementById("year").textContent = "Год: " + year;
    document.getElementById("poster").src = poster;
} else {
    document.body.innerHTML = "<h2>Ошибка: данные о фильме не переданы!</h2>";
}