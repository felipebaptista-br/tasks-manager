import axios from 'axios'
import { ErrorResponse } from '@/interfaces/errorInterfaces';

const api = axios.create({
    baseURL: `https://todo-list-00qv.onrender.com`,
});

interface Task {
    id: string,
    activated: boolean,
    description: string
}

const getTasks = async (): Promise<Task[]> => {
    try {
        const response = await api.get('/tasks');
        return response.data;
    } catch (error) {
        console.error('Erro na requisição:', error);
        throw error;
    }
};


const putTask = (task: {
    id: string,
    activated: boolean,
    description: string
}) => {

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

const deleteTask = (id: string) => {

}

export {
    getTasks,
    putTask,
    postTask,
    deleteTask
}
