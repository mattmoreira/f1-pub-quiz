const { port } = require('./config')
const { httpServer } = require('./server')

httpServer.listen(port, () => console.info(`Server started on port ${port}`))
