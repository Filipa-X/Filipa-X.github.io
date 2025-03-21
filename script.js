function changeText() {
    let newText = document.getElementById("inputText").value;
    if (newText.trim() !== "") {
        document.getElementById("dynamicText").innerText = newText;
    }
}

function displayNews() {
    const today = new Date().toISOString().split("T")[0];
    const url = `https://newsapi.org/v2/everything?q=tesla&from=2025-03-20&to=${today}&sortBy=popularity&apiKey=3f333c59ede14612b8ba3e93f0e65fcb`;

    fetch(url)
        .then(res => res.json())
        .then(data => {
            const newsContainer = document.getElementById("News");
            newsContainer.innerHTML = ""; 
            const template = document.getElementById("newsTemplate");

            data.articles.slice(0, 10).forEach(article => {
                const clone = template.content.cloneNode(true);

                const title = clone.querySelector(".news-title");
                const description = clone.querySelector(".news-description");
                const source = clone.querySelector(".news-source");
                const image = clone.querySelector(".news-image");
                const link = clone.querySelector(".news-link");

                title.textContent = article.title || "No title";
                description.textContent = article.description || "No description available.";
                source.textContent = article.source.name || "Unknown source";
                image.src = article.urlToImage || "https://via.placeholder.com/150";
                link.href = article.url;

                newsContainer.appendChild(clone);
            });
        })
        .catch(error => {
            console.error("Error fetching news:", error);
        });
}