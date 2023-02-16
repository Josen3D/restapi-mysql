//Importamos el modulo router
import { Router } from "express";
//Importamos el controlador de index para usar las rutas
import { index } from "../controllers/index.controller.js";

const router = Router();

//Creamos una llamada a la bd con GET, a¿cuando la ruta sea /index
router.get("/index", index);


//Exportamos el router
export default router;