export const changeSymbol = (str) => {

    if (str)
        return str.includes('&') ? str.replace('&', '%26') : str;
} 