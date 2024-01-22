'use client'

/**
 * TaskProvider component that provides task-related functionality to its children.
 *
 * @param {ReactNode} children - The children components to be wrapped by the TaskProvider.
 * @return {ReactNode} The wrapped children components with task-related functionality.
 */

import React, { createContext, useContext, ReactNode, useState } from "react";
import { Task } from "@/interfaces/taskInterfaces";

interface TaskContextProps {
    tasks?: Task[];
    updateTasks: (newTasks: Task[]) => void;
    updateTask: (newTask: Task) => void;
    updateTaskItem: (task: Task) => void;
    removeTask: (taskId: string) => void;
}

export const TaskContext = createContext<TaskContextProps | undefined>(undefined);

export const TaskProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [tasks, setTasks] = useState<Task[] | undefined>(undefined);

    const updateTasks = (newTasks: Task[]) => {
        setTasks([...newTasks, ...(tasks || [])])
    }

    const updateTask = (newTask: Task) => {
        setTasks([newTask, ...(tasks || [])]);
    };

    const updateTaskItem = (task: Task) => {
        setTasks((prevTasks) => prevTasks ? prevTasks.map((item) => (item.id === task.id ? { ...item, ...task } : item)) : []);
    };

    const removeTask = (taskId: string) => {
        setTasks((prevTasks) => prevTasks ? prevTasks.filter((task) => task.id !== taskId) : []);
    };

    return (
        <TaskContext.Provider value={{ tasks, updateTasks, updateTask, updateTaskItem, removeTask }}>
            {children}
        </TaskContext.Provider>
    );
};

export const useTask = () => {
    const context = useContext(TaskContext);
    if (!context) {
        throw new Error("useTask must be used within a TaskProvider");
    }
    return context;
};
