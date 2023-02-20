//Importamos el metodo config del modulo dotenv
import { config } from "dotenv";

//llamamos el método congig()
config();

//Creamos las variabls de entorn o y las exportamos para usarlas desde oros archivoa
export const PORT = process.env.PORT || 3000;
export const DB_USER = process.env.DB_USER || "root";
export const DB_PASSWORD = process.env.DB_PASSWORD || "";
export const DB_HOST = process.env.DB_HOST || "localhost";
export const DB_DATABASE = process.env.DB_DATABASE || "productsdb";
export const DB_PORT = process.env.DB_PORT || 3306;
