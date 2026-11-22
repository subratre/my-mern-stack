import app from "./index.js"

function startServer() {

    const PORT = process.env.PORT
    app.listen(PORT, () => {
        console.log(`Server running in port ${PORT}`)
    })
}

startServer()