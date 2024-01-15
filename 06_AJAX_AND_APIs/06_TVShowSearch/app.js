const form = document.querySelector('#searchForm');

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (document.querySelector('img')) {
        const images = document.querySelectorAll('img');
        for (let image of images) {
            image.remove();
        }
    }
    const searchTerm = form.elements.query.value;
    const config = { params: { q: searchTerm } };
    try {
        const res = await axios.get('https://api.tvmaze.com/search/shows', config);
        makeImages(res.data);
    } catch (e) {
        console.log("There are no movies left to display!");
    }

    form.elements.query.value = '';

});


const makeImages = (shows) => {
    for (let result of shows) {
        if (result.show.image) { // not all the shows have images
            const img = document.createElement('IMG');
            img.src = result.show.image.medium;
            document.body.append(img);
        }

    }
}