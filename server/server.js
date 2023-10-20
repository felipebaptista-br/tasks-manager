const fastify = require('fastify')
const server = fastify()
const routes = require('./src/routes/routes')

server.register(require('@fastify/cors'), {
    origin: '*', 
    methods: 'GET,POST,PUT,PATCH,DELETE',
    credentials: true,
})
server.register(routes)

// Run the server!
server.listen({ port: 8080 }, function (err, address) {
    if (!err) {
        console.log('listen: ' + address);
    } else {
        server.log.error(err)
        process.exit(1)
    }
})
