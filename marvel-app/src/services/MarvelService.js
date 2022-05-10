class MarvelService {
_apiBase = 'https://gateway.marvel.com:443/v1/public/';
_apiKey = 'apikey=a8e9ae933ac19f4a0a370991bafe6762';

    getResource = async (url) => {
        let res = await fetch(url);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, statu: ${res.status}`);
        }
        
        return await res.json();
    }

    getAllCharecters = () => {
        return this.getResource(`${this._apiBase}characters?limit=9&offset=210&${this._apiKey}`);
    }

    getCharecter = (id) => {
        return this.getResource(`${this._apiBase}characters/${id}?${this._apiKey}`);
    }
}

export default MarvelService;