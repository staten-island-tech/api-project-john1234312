import { DOM } from "./DOM.js"

DOM.input.addEventListener("submit", getData)
console.log(searchBar.value)
async function getData(event) {

    if (event !== undefined) {
        event.preventDefault()
    }
    let URL = `https://api.jikan.moe/v4/anime?q=${DOM.searchBar.value}&sfw`
    try {
        const response = await fetch(URL)
        if (response.status < 200 || response.status > 299) {
            console.log(response.status);
            throw error(response);
        } else {
            const data = await response.json();
            data.data.forEach((anime) => {
                    DOM.mangaSpace.insertAdjacentHTML(
                        "afterbegin",
                        `<div class="card">
                            <h2>${anime.title}</h2>
                            <img src="${anime.images.jpg.large_image_url}" alt="the popular anime ${anime.title}"
                        </div>`
                    );
                });
            };
        }
     catch (error) {
        console.log(error);
        console.log("womp womp")
        DOM.mangaSpace.textContent = "Sorry not available";
    }}
getData()

