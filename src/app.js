//Importamos el modulo express
import express, { json } from "express";
//Importamos las rutas de index
import indexRoutes from "./routes/index.routes.js";
//Importamos las rutas de products
import productsRoutes from "./routes/products.routes.js";

//Creamos la aplicacion de express
const app = express();
//Creamos el middleware para visualizar datos json
app.use(express.json());

//indicamos las rutas que usaremos
app.use(indexRoutes);
app.use("/api", productsRoutes);

//Si la ruta solicitada no existe, enviamos un mensaje
app.use((req, res, next) => {
  res.status(404).json({
    message: "endpoint not found",
  });
});

//Exportamos el archivo
export default app;
