import mongoose from "mongoose"

const userSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        trim: true
    },
    lastName: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true
    },
    role: {
        type: String,
        enum: ["manager", "user", "admin"],
        required: true
    },
    password: {
        type: String,
        required: true,
    },
    refreshToken: String
}, {
    timestamps: true
})

const User = mongoose.model("user", userSchema)

export default User