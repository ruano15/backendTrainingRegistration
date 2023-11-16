import "dotenv/config"
import mongoose from "mongoose";

async function connect() {
mongoose.connect(process.env.DB_CONNECTION)
    return mongoose.connection
}

export default connect