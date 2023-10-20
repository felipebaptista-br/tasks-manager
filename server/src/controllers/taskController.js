const Task = require('../models/task')
const { randomUUID } = require('node:crypto')

const sql = require('../database/db')

const list = async () => {
    const tasks = await sql`select * from tasks`
    return tasks
}

const create = async (data) => {
    const id = randomUUID()
    let task = new Task(id, data.activated, data.description)
    await sql`insert into tasks (id, activated, description) VALUES (${id}, ${task.activated}, ${task.description})`
}

const update = async (id, task) => {
    const { activated, description } = task
    await sql`update tasks set activated = ${activated}, description = ${description} WHERE id = ${id}`
}

const trash = async (id) => {
    await sql`delete from tasks where id = ${id}`
}

module.exports = {
    list,
    create,
    update,
    trash
}