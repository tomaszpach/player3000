const BASE_URL = 'http://localhost:4000';
const CLIPS = '/clips';

export const getClips = async (sortBy) => {
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
