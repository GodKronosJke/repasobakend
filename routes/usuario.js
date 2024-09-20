import { check } from "express-validator";
import { Router } from "express";
import {validarCampos} from "../middleware/validar-campos.js";
import htppsUsuario from "../controllers/usuario.js";
import helperUsuario from "../helpers/ususrio.js";

const router=Router()

router.get('/listar', [
    validarCampos
], htppsUsuario.getUsuarios)

router.post('/agregar',[
    check('nombre','se debe agregar un nombre').notEmpty(),
    check ('Tipodocumento','se debe colcar el tipo de documento').notEmpty(),
    check('documento','se debe agregar el docuemnto').notEmpty(),
    check('documento').custom(helperUsuario.documentoUnico),
    check ('email','sebe agreagar correo').notEmpty(),
    check ('password','sebe agregar el password').notEmpty(),
    check ('rol','se debe agragar el rol').notEmpty(),
    validarCampos
], htppsUsuario.postUsuarios)

router.put('/editar/:id',[
    check('id', "se nesecita un mongo id valido").isMongoId(),
    check ('id').custom(helperUsuario.validarUsuario)
],htppsUsuario.putUsuarios)

router.put('/activar/:id',[
    check('id', "se nesecita un mongo id valido").isMongoId(),
    check ('id').custom(helperUsuario.validarUsuario)
],htppsUsuario.putusuarioActivar)

router.put('/desactivar/:id',[
    check('id', "se nesecita un mongo id valido").isMongoId(),
    check ('id').custom(helperUsuario.validarUsuario)
],htppsUsuario.putusuarioDesactivar)


export default router