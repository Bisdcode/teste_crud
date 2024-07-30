import {db} from "../db.js";

export const getUsers = (_, res) => {
    const q = 'SELECT * FROM todo';

    //uma query com teste de erro
    db.query(q, (err, data) => {
        if (err) return res.json(err);

    //retornar o ok "status" e os usuarios "json(data)"
        return res.status(200).json(data);
    });
};