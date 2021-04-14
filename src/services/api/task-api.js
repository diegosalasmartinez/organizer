import { apiGet, apiPost, apiDelete, apiPatch} from '../api/api'
import { sortingTasks } from '../../utils/task-utils'

const getTasksByUserId = async (id) => {
    const tasks = await apiGet(`tasks/${id}`);
    sortingTasks(tasks);
    return tasks;
}

const getTaskById = async (id) => {
    return await apiGet(`tasks/byId/${id}`);
}

const createTask = async (newTask) => {
    return await apiPost(`tasks/add`, newTask);
}

const updateTask = async (newTask) => {
    return await apiPatch(`tasks/${newTask.id}`, newTask);
}

const deleteTask = async (id) => {
    return await apiDelete(`tasks/${id}`);
}

export { getTasksByUserId, getTaskById, createTask, updateTask, deleteTask }
