# lambda-layer

Note - first revision, don't consider this as even a sketch yet...

Building

* Go into layer/nodejs, remove -rf node_modules, then npm i ../../module
* From this directory sls deploy

Test lambda

```
const filters = require('filter');

const fs = require('fs');

function getFiles (dir, files_){
    files_ = files_ || [];
    var files = fs.readdirSync(dir);
    for (var i in files){
        var name = dir + '/' + files[i];
        if (fs.statSync(name).isDirectory()){
            getFiles(name, files_);
        } else {
            files_.push(name);
        }
    }
    return files_;
}


exports.handler = async (event) => {
    console.log(getFiles('/opt'))
    
    console.log(filters.filters)
    let f1 = filters.filters.filter1;

    let result = f1(event);
    console.log(result);
    
    const response = {
        statusCode: 200,
        body: JSON.stringify('Hello from Lambda!'),
    };
    return response;
};
```
Current test output

```
START RequestId: 08aa1c18-a89f-437b-a550-9373780a80a4 Version: $LATEST
2021-07-17T16:56:25.407Z	08aa1c18-a89f-437b-a550-9373780a80a4	INFO	[
  '/opt/nodejs/node_modules/filter/filters.js',
  '/opt/nodejs/node_modules/filter/package.json',
  '/opt/nodejs/package-lock.json',
  '/opt/nodejs/package.json'
]
2021-07-17T16:56:25.408Z	08aa1c18-a89f-437b-a550-9373780a80a4	INFO	{ filter1: [Function: filter1] }
2021-07-17T16:56:25.408Z	08aa1c18-a89f-437b-a550-9373780a80a4	INFO	{ key1: 'value1', key2: 'value2', key3: 'value3' }
2021-07-17T16:56:25.408Z	08aa1c18-a89f-437b-a550-9373780a80a4	INFO	true
END RequestId: 08aa1c18-a89f-437b-a550-9373780a80a4
REPORT RequestId: 08aa1c18-a89f-437b-a550-9373780a80a4	Duration: 61.25 ms	Billed Duration: 62 ms	Memory Size: 128 MB	Max Memory Used: 65 MB	Init Duration: 153.51 ms
```