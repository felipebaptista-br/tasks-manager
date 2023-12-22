'use client'

import React, { createContext, useContext, ReactNode, useState } from "react";
import { Task } from "@/interfaces/taskInterfaces";

interface TaskContextProps {
    tasks: Task[];
    updateTasks: (newTasks: Task[]) => void;
    updateTask: (newTask: Task) => void;
}

export const TaskContext = createContext<TaskContextProps | undefined>(undefined);

export const TaskProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [tasks, setTasks] = useState<Task[]>([]);

    const updateTasks = (newTasks: Task[]) => {
        setTasks([...newTasks, ...tasks])
    }

    const updateTask = (newTask: Task) => {
        setTasks([newTask, ...tasks]);
    };

    return (
        <TaskContext.Provider value={{ tasks, updateTasks, updateTask }}>
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
