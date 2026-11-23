import connectDB from "./config/connectDB.js"
import app from "./index.js"

function startServer() {

    const PORT = process.env.PORT

    connectDB().then(() => {
        console.log("DB connected")
        app.listen(PORT, () => {
            console.log(`Server running in port ${PORT}`)
        })
    })

}

startServer()