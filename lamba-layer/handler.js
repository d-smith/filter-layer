const filters = require('filter').filters;

let handle = async (event) => {
    console.log(JSON.stringify(event));

    foo = filters.foo;
    if(!foo) {
        console.log('problem looking up filter...');
    }

    let recs = event.Records;
    for(r of recs) {
        let msg = JSON.parse(r.Sns.Message);
        console.log(msg);
        
        if(foo(msg)) {
            console.log(`send foo message to queue...`);
        } else {
            console.log('filter sez no...');
        }
    }
};


module.exports={
    handle
};