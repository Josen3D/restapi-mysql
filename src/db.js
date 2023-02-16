//Importamos el modulo mysql para crear la conexion a la base de datos
import { createPool } from "mysql2/promise";



//reamos la conexion
export const pool = createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    port: 3306,
    database: 'productsdb'
});