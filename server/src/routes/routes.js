const taskController = require('../controllers/taskController')

async function routes(server, _options) {

    server.get('/tasks', async (_request, reply) => {
        const tasks = taskController.list()

        return tasks
    })

    server.post('/task', async (request, reply) => {
        const { activated, description } = request.body
        let databaseResponse

        await taskController.create({
            activated,
            description
        }).then((res) => {
            databaseResponse = res
        })

        return reply.status(201).send(databaseResponse)
    })

    server.put('/task/:id', async (request, reply) => {
        const id = request.params.id;
        const { activated, description } = request.body
        let databaseResponse;

        await taskController.update(id, {
            activated,
            description
        }).then((res) => {
            console.log(res);
            databaseResponse = res
        })

        reply.header('Access-Control-Allow-Origin', '*');

        return reply.status(200).send(databaseResponse)
    })

    server.delete('/task/:id', async (request, reply) => {
        const id = request.params.id

        await taskController.trash(id)

        return reply.status(204).send()
    })

}

module.exports = routes;