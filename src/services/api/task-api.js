import { sortingTasks } from '../../utils/task-utils'

import axios from 'axios'
require('dotenv').config();

const getTasksByUserId = async (id) => {
    try{
        const res = await axios.get(`${process.env.REACT_APP_API}/tasks/${id}`);
        if(res.data.length > 0){
            sortingTasks(res.data);
            return res.data;
        }
        return [];
    } catch(e){
        console.log(e)
    }
}

const getTaskById = async (id) => {
    try{
        const res = await axios.get(`${process.env.REACT_APP_API}/tasks/byId/${id}`);
        return res.data;
    } catch(e){
        console.log(e)
    }
}

const createTask = async (newTask) => {
    try{
        const res = await axios.post(`${process.env.REACT_APP_API}/tasks/add`,newTask);
    } catch(e){
        console.log(e);
    }
}

const updateTask = async (newTask) => {
    try{
        const res = await axios.patch(`${process.env.REACT_APP_API}/tasks/${newTask.id}`,newTask);
    } catch(e){
        console.log(e);
    }
}

const deleteTask = async (id) => {
    try{
        const res = await axios.delete(`${process.env.REACT_APP_API}/tasks/${id}`);
    } catch(e){
        console.log(e);
    }
}

export { getTasksByUserId, getTaskById, createTask, updateTask, deleteTask }
