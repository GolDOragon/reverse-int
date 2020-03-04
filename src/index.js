module.exports = function reverse(n) {
    str = String(n);
    let reverse = "";
    let str_end = 0;
    if (n < 0) str_end = 1;

    for (let i = str.length - 1; i >= str_end; i--) {
        reverse += str[i];
    }
    return Number(reverse);
};
