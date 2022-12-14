const db = require('../db.js')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { secret } = require('./config')
const { validationResult } = require('express-validator')

const generateAccessToken = (id, role) => {
    const payload = { id, role }
    return jwt.sign(payload, secret, { expiresIn: "12h" })
}

class authController {

    async login(req, res) {
        try {
            const { email, password } = req.body
            const persone = await db.query(`SELECT * FROM person where email = $1`, [email])
            if (!persone.rows[0]) {
                return res.status(400).json({ message: `Пользователь с таким email - ${email} не найден` })
            }
            const validPassword = bcrypt.compareSync(password, persone.rows[0].password);
            if (!validPassword) {
                return res.status(400).json({ message: `Введен не верный пароль` })
            }
            const token = generateAccessToken(persone.rows[0].id, persone.rows[0].role)
            const user = persone.rows[0]
            return res.json({ token, user })
        } catch (e) {
            console.log(e);
            res.status(400).json({ message: "login error" })
        }
    }

    async registration(req, res) {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                res.status(400).json({ message: "Ошибки при регистрации", errors: errors.array() })
            } else {
                const { name, lastname, email, password, phone, role } = req.body;
                const persone = await db.query(`SELECT * FROM person where email = $1`, [email])
                if (!persone.rows[0]) {
                    const hashPassword = bcrypt.hashSync(password, 7);
                    const newPersone = await db.query(`INSERT INTO person (name, lastname, email, password, phone, role) values ($1, $2, $3, $4, $5, $6) RETURNING *`, [name, lastname, email, hashPassword, phone, role])
                    res.json(newPersone.rows[0])
                } else {
                    res.status(400).json({ message: `Пользователь ${email} уже зарегестрирован` })
                }
            }
        } catch (e) {
            console.log('Ошибка ' + e.name + ":\n " + e.message + "\n\n" + e.stack);
            res.status(400).json({ message: "registration error" })
        }
    }
}

module.exports = new authController()