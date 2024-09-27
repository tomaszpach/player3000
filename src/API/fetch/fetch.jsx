export const responsePlease = async () => {
    const response = await fetch('http://localhost:4000/clips');
    return await response.json();
};

export const fetchClipById = async (id) => {
    const response = await fetch(`http://localhost:4000/clips?id=${id}`);
    return await response.json();
};
