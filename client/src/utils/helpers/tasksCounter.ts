import { Task } from "@/interfaces/taskInterfaces"

const countTasks = (tasks: Task[]) => {
    return tasks.length
}

const countActiveTasks = (tasks: Task[]) => {
    const arrayActive = tasks.filter(task => task.activated)
    return arrayActive.length
}

const countInactiveTasks = (tasks: Task[]) => {
    const arrayActive = tasks.filter(task => !task.activated)
    return arrayActive.length
}

export {
    countTasks,
    countActiveTasks,
    countInactiveTasks
}