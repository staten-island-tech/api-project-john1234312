import { DOM } from "./DOM.js"

let URL = "https://api.jikan.moe/v4/anime?q=hunter&sfw"

DOM.input.addEventListener("submit", getData)
console.log(searchBar.value)
async function getData(event, URL="https://api.jikan.moe/v4/anime?q=hunter&sfw") {
    event.preventDefault() 
    try {
        let URL = ""
        if (searchBar.value == "") {
            URL = "https://api.jikan.moe/v4/anime?q=hunter&sfw"
        else (searchBar.value) {
                URL = `https://api.jikan.moe/v4/anime?q=${DOM.searchBar.value}&sfw`
        }
            } 
        
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
                            <h1>${anime.title}</h1>
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
getData(URL)

