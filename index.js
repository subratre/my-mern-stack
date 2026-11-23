import express from "express"
import { config } from "dotenv"
import userRoute from "./routes/user.route.js"

config()

const app = express();

app.use(express.json())

app.use("/api/users", userRoute)

export default app