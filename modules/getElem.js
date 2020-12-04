const getElem = (tag, elem) => {
    if(tag === 'id' || tag === 'ID') {
        return document.getElementById(elem);
    }

    if(tag === 'qs' || tag === 'querySelector') {
        return document.querySelector(elem);
    }

    if(tag === 'qsa' || tag === 'querySelectorAll') {
        return document.querySelectorAll(elem);
    }
}

export { getElem };