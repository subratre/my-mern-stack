import createHttpError from "http-errors"

export const getAllUser = (req, res) => {
    res.send("Get all users")
}

export const createUser = async (req, res) => {

    try {
        res.send(req.body)
    } catch (err) {
        const error = createHttpError(500, "Failed to store the data in database")
        throw error
    }
}