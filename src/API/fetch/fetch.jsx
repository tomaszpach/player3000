const BASE_URL = 'http://localhost:4000';
const CLIPS = '/clips';

export const responsePlease = async (sortBy) => {
    // dodaj obsluge Order oraz uprosc ten link + nie dodawaj sorta jesli sortBy jest pusty
    let URL = `${BASE_URL}${CLIPS}`;

    if (sortBy) {
        URL += `?_sort=${sortBy}`;
    }

    const response = await fetch(URL);
    return await response.json();
};

export const fetchClipById = async (id) => {
    const response = await fetch(`http://localhost:4000/clips?id=${id}`);
    return await response.json();
};
