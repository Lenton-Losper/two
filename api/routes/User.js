import express from 'express'
import test from '../controllers/Users.controlers.js';

const router = express.Router()

router.get('/', test)

export default router;