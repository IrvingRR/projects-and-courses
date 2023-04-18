/**
 *  Routes users / auth
 * 
 *  host + /api/auth
 */

const { Router } = require('express');
const { createUser, loginUser, renewToken } = require('../controllers/auth');
const { check } = require('express-validator');

const router = Router();

router.post('/new', [
    check('name', 'Name is required').not().isEmpty()
], createUser);

router.post('/', loginUser);

router.get('/', renewToken);

module.exports = router;