import Usuario from "../models/usuario.js"

const htppsUsuario = {

  getUsuarios: async (req, res) => {
    const { encontrar } = req.query;
    const usuario = await Usuario.find({
    })
    res.json({ usuario })
  },

  postUsuarios: async (req, res) => {
    try {
      const { nombre, Tipodocumento, documento, email, password, rol } = req.body
      const usuarios = new Usuario({ nombre, Tipodocumento, documento, email, password, rol })
      await usuarios.save()
      res.json({ usuarios })

    } catch (error) {
      console.log(error)
      res.status(400).json({ msg: "no se pudo crear el usuario" })

    }
  },

  putUsuarios: async (req, res) => {
    const { id } = req.params;
    const { nombre, ...resto } = req.body;
    const usuarios = await Usuario.findByIdAndUpdate(id, { nombre, ...resto }, { new: true });
    res.json({ usuarios })
  },

  putusuarioActivar: async (req, res) => {
    const { id } = req.params;
    const usuarios = await Usuario.findByIdAndUpdate(id, { estado: 1 }, { new: true })
    res.json({ usuarios })
  },

  putusuarioDesactivar: async (req, res) => {
    const { id } = req.params;
    const usuarios = await Usuario.findByIdAndUpdate(id, { estado: 0 }, { new: true })
    res.json({ usuarios })
  }
}

export default htppsUsuario