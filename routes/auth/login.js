import express from 'express';
const router = express.Router();
import authController from '../../controller/auth.controller.js';
router.use('/login', authController.loginController)
router.use('/register', authController.registerController)


export default router;