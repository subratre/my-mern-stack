import connectDB from "./config/connectDB.js"
import logger from "./config/logger.js"
import app from "./index.js"

function startServer() {

    const PORT = process.env.PORT

    connectDB().then(() => {
        logger.info("DB started")
        app.listen(PORT, () => {
            logger.info("Server running in port", { PORT })
        })
    }).catch(err => logger.error(err.message))

}

startServer()