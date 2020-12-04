const setLS = (name, data) => {
    localStorage.setItem(name, JSON.stringify(data));
} 

const getLS = name => {
    const data = localStorage.getItem(name);
    const parsed = JSON.parse(data);

    return parsed;
}

export { setLS, getLS };