//Importamos el modulo router
import { Router } from "express";
//Importamos los controladores de products
import {
  getProducts,
  getProduct,
  getProductCat,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/products.controller.js";

//Creamos el enrutador
const router = Router();

//Definimos la ruta que llamara cada método http
router.get("/products", getProducts);
router.get("/products/:id", getProduct);
router.get("/products/category/:category", getProductCat);
router.post("/products", createProduct);
router.patch("/products/:id", updateProduct);
router.delete("/products/:id", deleteProduct);

//Exportamos el router de products
export default router;
