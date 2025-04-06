

export const Prueba = async () => {
    const res = await fetch('https://netflix-movies-and-tv-shows-api-by-apirobots.p.rapidapi.com/v1/netflix?name=robot&page=1',{
        method: 'GET',
	    headers: {
		    'x-rapidapi-key': '0aaa5e47e0mshc81bb408d362fbfp1db5f3jsn0b4d204df215',
		    'x-rapidapi-host': 'netflix-movies-and-tv-shows-api-by-apirobots.p.rapidapi.com'
	    }
    });

    const Data = await res.json();

    const list = Data.items.forEach(element => {
        document.getElementById('Object').innerText += element.title;
    });

    return(list)

};