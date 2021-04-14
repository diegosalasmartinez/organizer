import { apiGet, apiPost } from '../api/api'

const getUsers = async () => {
    return await apiGet(`users`);
}

const login = async(username, password) => {
    return await apiGet(`users/login?username=${username}&password=${password}`);
}

const createUser = async (user) => {
    return await apiPost(`users/add`, user);
}

export { getUsers, login, createUser } 
