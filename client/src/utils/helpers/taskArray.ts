import { Task } from "@/interfaces/taskInterfaces";

const sortedTask = (tasks: Task[]): Task[] => {
    const active = tasks.filter(task => task.activated);
    const inactive = tasks.filter(task => !task.activated);
    const sortedArray = inactive.concat(active);

    return sortedArray;
}

const activeTasks = (tasks: Task[]): Task[] => {
    const active = tasks.filter(task => task.activated);

    return active;
}

const inactiveTasks = (tasks: Task[]): Task[] => {
    const inactive = tasks.filter(task => !task.activated)

    return inactive
}

export {
    sortedTask,
    activeTasks,
    inactiveTasks
}