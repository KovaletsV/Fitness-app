export const exerciseOptions = {
    method: "GET",
    url: "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
    headers: {
        "X-RapidAPI-Key": process.env.REACT_APP_RAPID_KEY,
        "X-RapidAPI-Host": "exercisedb.p.rapidapi.com"
    }
};

export const youtubeOptions = {
    method: "GET",
    headers: {
        "X-RapidAPI-Key": "47005a7511msh3b1c61acf7998fcp12c403jsnef5505bce44d",
        "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com"
    }
};

export const fetchData = async (url, options) => {
    const res = await fetch(url, options);
    const data = await res.json();

    return data;
};
