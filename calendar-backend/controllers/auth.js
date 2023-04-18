const { response } = require('express');
const { validationResult } = require('express-validator');

const createUser = (req, res = response) => {
    const { name, email, password } = req.body;

    const errors = validationResult(req);

    if(!errors.isEmpty()) {
        return res.json({
            ok: false,
            errors: errors.mapped
        });
    }

    res.json({
        ok: true,
        msg: { name, email, password }
    });
};

const loginUser = (req, res = response) => {
    res.json({
        ok: true,
        msg: 'Login'
    });
};

const renewToken = (req, res = response) => {
    res.json({
        ok: true,
        msg: 'Renew'
    });
};

module.exports = { createUser, loginUser, renewToken };

3121292313