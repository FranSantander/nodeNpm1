const axios = require('axios')

axios
.get("https://rickandmortyapi.com/api/character/1")
.then((data)=>{
    const name = data.data.name;
    console.log(name);
})
.catch((err)=>{
    console.log('Error', err);
})