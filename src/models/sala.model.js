import pool from '../config/db.js';

export const createSala = async (title, xml, description, userId) => {
    const result = await pool.query(
        `INSERT INTO "Salas" (title, xml, description, userId) VALUES ($1, $2, $3, $4) RETURNING *`,
        [title, xml, description, userId]
    );
    return result.rows[0];
};

export const getSalaById = async (id) => {
    const result = await pool.query(
        'SELECT * FROM "Salas" WHERE id = $1 AND eliminar = false',
        [id]
    );
    return result.rows;
};

export const getSala = async (userId) => {
    const result = await pool.query('SELECT * FROM "Salas" WHERE userId = $1 and eliminar = false', [userId]);
    return result.rows;
};

export const updateSala = async (id, title, xml, description) => {
    const result = await pool.query(
        'UPDATE "Salas" SET title = $1, xml = $2, description = $3 WHERE id = $4 AND eliminar = false RETURNING *',
        [title, xml, description, id]
    );
    return result.rows[0];
};

export const deleteSala = async (id) => {
    const result = await pool.query(
        'UPDATE "Salas" SET eliminar = true WHERE id = $1 RETURNING *',
        [id]
    );
    return result.rows[0];
};
