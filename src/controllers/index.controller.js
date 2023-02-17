//Importamos la función pool
import { pool } from "../db.js";

//Creamos una solicitud a la base de datos para mostrar en el index
export const index = async (req, res) => {
    const[rows] = await pool.query('SELECT * FROM products');
    res.json(rows);
};