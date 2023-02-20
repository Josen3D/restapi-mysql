//Importamos el modulo mysql para crear la conexion a la base de datos
import { createPool } from "mysql2/promise";

//Importamos las variables de entormo creadas
import {
  DB_PORT,
  DB_HOST,
  DB_USER,
  DB_PASSWORD,
  DB_DATABASE,
} from "./config.js";

//reamos la conexion
export const pool = createPool({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASSWORD,
  port: DB_PORT,
  database: DB_DATABASE,
});
