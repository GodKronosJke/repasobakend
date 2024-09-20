import Usuario from "../models/usuario.js"

const helperUsuario = {

    documentoUnico: async (documento) => {
        const existe = await Usuario.findOne({ documento })
        if (existe) {
            throw new ("El documento ya se encuentra registrado en la base de datos");

        }

    },

    documentoNoexiste: async (documento) => {
        if (documento) {
            const existe = await Usuario.findOne({ documento })
            if (!existe) {
                throw new ("este documento no existe en la base datos");

            }
        }

    },

    validarUsuario:async(id) =>{
        const Existe = await Usuario.findById(id);
        if (Existe == undefined) {
            throw new error('id el usuario no existe en la base de dato')
        }

    }



}

export default helperUsuario
