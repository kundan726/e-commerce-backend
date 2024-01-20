import express from 'express';
import loginRoutes from './auth/login.js'
const router = express.Router();

router.use('/auth',loginRoutes)

export default router;