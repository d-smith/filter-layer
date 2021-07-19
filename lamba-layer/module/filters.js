let filter1 = (x) => {
    console.log(x);
    return true;
};

let fooFilter = (x) => {
    console.log(`fooFilter evalues ${JSON.stringify(x)}`);
    return x && x.foo;
}

let filters = {
    'filter1': filter1,
    'foo': fooFilter
};


module.exports = {
    filters
}