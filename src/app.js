import express from "express";
import routes from "./routes/index.js";
import connect from "./config/db.js"

const app = express()
routes(app)

const connection = await connect()
connection.on("error", (erro) => {
    console.error("Erro de conexão", erro)
})
connection.once("open", () => {
    console.log("Conectado ao Database")
})

export default app