const router = require('./router')

const { port } = require('./config')

router.listen(port, () => console.info(`Server started on port ${port}`))
