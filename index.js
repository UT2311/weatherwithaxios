const yargs = require("yargs");
const axios = require("axios");
const argv = yargs
    .options({
        a:{
            demand:true,
            alias:'address',
            describe:'Address to fetch weather for',
            string:true
        }
    })
    .help()
    .alias('help','h')
    .argv;
var encodedURL = encodeURIComponent(argv.address);
axios.get(`http://www.mapquestapi.com/geocoding/v1/address?key=hWXWI8eqlNxK8o54en7fYkdwYCvJXxJO&location=${encodedURL}`)
.then((response)=>{
console.log(response);
})
.catch((error)=>{
    console.log("error");
})