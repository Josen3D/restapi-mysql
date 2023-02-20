//Importamos el servidor
import app from "./app.js";
//Importamos el archivo config para usar el puerto
import { PORT } from "./config.js";

//Iniciamos el servidor
app.listen(PORT);
console.log("server running on PORT ", PORT);
