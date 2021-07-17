let filter1 = (x) => {
    console.log(x);
    return true;
};

let filters = {
    'filter1': filter1
};


module.exports = {
    filters
}