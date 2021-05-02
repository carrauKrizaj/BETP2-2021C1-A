import axios from 'axios';

async function getUsers(){
    return axios('http://fakeapi.jsonparseronline.com/users');
}

const users = await getUsers();
console.log(users);

// const axios = require('axios');

// async function getAllUsers(){
//     let usuarios = axios('http://fakeapi.jsonparseronline.com/users');
//     return usuarios; 
// }

// async function getUser(id){
//     return axios('http://fakeapi.jsonparseronline.com/users/'+id);
// }

// const usuarios = await getAllUsers();
// console.log(usuarios);



// (async () => {
//     let users = await getAllUsers();
//     console.log(users);
// })();

// const users = axios('http://fakeapi.jsonparseronline.com/users?age_gte=30')
//     .then(value => {
//         console.log(value.data);
//     })    
//     .catch(error =>{
//         console.log(error);
//     });
