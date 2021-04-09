import axios from 'axios'
require('dotenv').config();

const getUsers = async () => {
    try{
        const res = await axios.get(`${process.env.REACT_APP_API}/users`);
        return res.data;
    } catch(e){
        console.log(e);
    }
}

const login = async(username, password) => {
    try{
        const res = await axios.get(`${process.env.REACT_APP_API}/users/login?username=${username}&password=${password}`);
        return res.data;
    } catch(e){
        console.log(e);
    }
}

const createUser = async (user) => {
    try{
        const res= await axios.post(`${process.env.REACT_APP_API}/users/add`,user);
        return res.data;
    } catch(e){
        console.log(e);
    }
}

export { getUsers, login, createUser } 
