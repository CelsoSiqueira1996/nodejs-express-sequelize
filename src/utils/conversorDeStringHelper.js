module.exports = (objetoParams) => {
    for (let key in objetoParams) {
        if (/Id|id/.test(key)) {
            objetoParams[key] = Number(objetoParams[key]);
        }
    }

    return objetoParams;
};