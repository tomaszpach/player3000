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

export const getClipById = async (id) => {
    const URL = `${BASE_URL}${CLIPS}`;

    const response = await fetch(`${URL}?id=${id}`);

    return await response.json();
};
