const API_KEY = '79izJS5gcF0gJD4qSTk1qaeRsKNaUSVe';
const URL = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

export const getGift = async () => {
    try {
        const request = await fetch(URL);
        const response = await request.json();
        const { url } = response.data.images.original;
        return url;
    } catch (error) {
        console.log(error);
        return 'Not found gif'
    }
}
