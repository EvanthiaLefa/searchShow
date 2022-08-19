const form = document.querySelector('#searchForm');
const input = document.querySelector('input');
form.addEventListener('submit', async function (e) {
    e.preventDefault();
    const searchTerm = form.elements.query.value;
    const config = { params: { q: searchTerm } }
    const res = await axios.get("https://api.tvmaze.com/search/shows", config)
    //const res = await axios.get(`https://api.tvmaze.com/search/shows?q=${searchTerm}`)
    makeImages(res.data)

})
const makeImages = (shows) => {
    for (let result of shows) {
        if (result.show.image) {
            const newImg = document.createElement('IMG')
            newImg.src = result.show.image.medium
            document.body.append(newImg)
        }
    }
    input.value = "";
}
