import mongoose from "mongoose";

const UsuarioSchema = new mongoose.Schema({
    nombre: { type: String, require: true },
    Tipodocumento: { type: String, require: true },
    documento : {type: Number, require: true, unique: true},
    email: { type: String, require: true },
    password: { type: String, require: true },
    rol: { type: String, require: true },
    estado:{type: Number, default: true}
})

export default mongoose.model("Usuario", UsuarioSchema)
