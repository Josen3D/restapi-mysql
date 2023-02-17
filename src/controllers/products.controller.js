//Importamos la conexion a la base de datos
import { pool } from "../db.js";

//Metodo para obtener los productos
export const getProducts = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM products");
    res.json(rows);
  } catch (error) {
    return res.status(500).json({
      message: "Something went wrong",
    });
  }
};

//Método que obtine un producto específico por su id
export const getProduct = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM products WHERE ID = ?", [
      req.params.id,
    ]);

    if (rows.length <= 0)
      return res.status(404).json({
        message: "Product no found",
      });
    res.json(rows[0]);
  } catch (error) {
    return res.status(500).json({
      message: "Something went wrong",
    });
  }
};

//Metodo qur obtiene productos por categoria especifica
export const getProductCat = async (req, res) => {
  try {
    const [rows] = await pool.query(
      "SELECT * FROM products WHERE category = ?",
      [req.params.category]
    );

    if (rows.length <= 0)
      return res.status(404).json({
        message: "Product no found",
      });
    res.json(rows);
  } catch (error) {
    return res.status(500).json({
      message: "Something went wrong",
    });
  }
};

//Metodo que crea un nuevo producto
export const createProduct = async (req, res) => {
  const { name, category, price } = req.body;
  try {
    const [rows] = await pool.query(
      "INSERT INTO products (name, category, price) VALUES (?, ?, ?)",
      [name, category, price]
    );
    res.send({
      id: rows.insertId,
      name,
      category,
      price,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Something went wrong",
    });
  }
};

//Actualiza un producto de la BD
export const updateProduct = async (req, res) => {
  const { id } = req.params;
  const { name, category, price } = req.body;
  try {
    //Actualiza un elemento de la BD, si no se coloca ningun valor nuevo o se deja vacio, deja el que tenia anteriormente
    const [result] = await pool.query(
      "UPDATE products SET name = IFNULL(?, name), category = IFNULL(?, category), price = IFNULL(?, price) WHERE id = ?",
      [name, category, price, id]
    );

    if (result.affectedRows === 0)
      return res.status(404).json({
        message: "Product not found",
      });

    const [rows] = await pool.query("SELECT * FROM products WHERE id = ?", [
      id,
    ]);
    res.json(rows[0]);
  } catch (error) {
    return res.status(500).json({
      message: "Something goes wrong",
    });
  }
};

//Elimina un producto de la base de datos
export const deleteProduct = async (req, res) => {
  try {
    const [result] = await pool.query("DELETE FROM products WHERE id = ?", [
      req.params.id,
    ]);

    if (result.affectedRows <= 0)
      return res.status(404).json({
        message: "Product not found",
      });
    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({
      message: "Something went wrong",
    });
  }
};
