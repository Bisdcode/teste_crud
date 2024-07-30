import {db} from "../db.js";

export const getUsers = (_, res) => {
    const q = 'SELECT * FROM todo';

    //uma query com 'flag' de erro
    db.query(q, (err, data) => {
        if (err) return res.json(err);

    //retornar o ok "status" e os usuarios "json(data)"
        return res.status(200).json(data);
    });
};

// Método add user

export const addUser = (req, res) => {
    const q =
        "INSERT INTO todo( `text`, `category`) VALUES(?)"; 

    const values = [
        // req.body.id, autoincrement
        req.body.text,
        req.body.category,
        // req.body.is_completed, para padrão "0"
    ];

    db.query(q, [values], (err) => {
        if (err) return res.json(err);

        return res.status(200).json("Tarefa adicionada com sucesso.");
    });
};

//Método update

export const updateUser = (req, res) => {
    const q = "UPDATE todo SET `text`= ?, `category` = ?, WHERE `id` = ?";

    const values = [
        req.body.text,
        req.body.category,
    ];

    db.query(q, [...values, req.params.id], (err) => {
        if (err) return res.json(err);

        return res.status(200).json("Usuário atualizado com sucesso.");
    });

};

//Método delete

export const deleteUser = (req, res) => {
    const q = "DELETE FROM todo WHERE `id` = ?";

    db.query(q, [req.params.id], (err) => {
        if (err) return res.json(err);

        return res.status(200).json("Usuário deletado com sucesso.");
    });
};