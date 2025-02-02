import express from "express"
import 'dotenv/config'
import dbConexion from "./database/cnxmongoose.js"
import usuarios from "./routes/usuario.js"
import cors from 'cors'

const app = express()
app.use(express.json())
app.use(cors())

app.use("/api/usuarios",usuarios)

app.listen(process.env.PORT, async () =>{
  await dbConexion()
  console.log(`Servidor escuchando en el puerto ${process.env.PORT}`);
})