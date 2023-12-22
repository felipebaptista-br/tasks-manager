import axios from 'axios'
import { Task } from '@/interfaces/taskInterfaces';
import { ErrorResponse } from '@/interfaces/errorInterfaces';

const api = axios.create({
    // baseURL: `https://todo-list-00qv.onrender.com`,
    baseURL: `http://localhost:8080`
});

const getTasks = async (): Promise<Task[]> => {
    try {
        const response = await api.get('/tasks');
        return response.data;
    } catch (error: any) {
        const errorResponse: ErrorResponse = error.response?.data || { message: 'Erro desconhecido ao listar tarefas.' };
        throw new Error(`Erro ao criar tarefa: ${errorResponse.message}`);
    }
};


const putTask = async (task: Task): Promise<any> => {
    try {
        const response = await api.put(`/task/${task.id}`, task);
        return response.data;
    } catch (error: any) {
        const errorResponse: ErrorResponse = error.response?.data || { message: 'Erro desconhecido ao alterar tarefa.' };
        throw new Error(`Erro ao criar tarefa: ${errorResponse.message}`);
    }
}

const postTask = async (task: { activated: boolean, description: string }): Promise<any> => {
    try {
        const response = await api.post('/task', task);
        return response.data;
    } catch (error: any) {
        const errorResponse: ErrorResponse = error.response?.data || { message: 'Erro desconhecido ao criar tarefa.' };
        throw new Error(`Erro ao criar tarefa: ${errorResponse.message}`);
    }
};

const deleteTask = async (id: string) => {
    try {
        const response = await api.delete(`/task/${id}`);
        return response.data;
    } catch (error: any) {
        const errorResponse: ErrorResponse = error.response?.data || { message: 'Erro desconhecido ao deletar tarefa.' };
        throw new Error(`Erro ao criar tarefa: ${errorResponse.message}`);
    }
}

export {
    getTasks,
    putTask,
    postTask,
    deleteTask
}
