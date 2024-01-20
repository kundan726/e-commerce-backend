import authService from '../services/auth.services.js';

const loginController = async (req, res) => {
    try {
        const response = await authService.login(req);
        res.json(response);
    } catch (error) {
        console.log("Error in loginController service: ", error);
    }
}

const registerController = async(req, res) => {
try {
    const response = await authService.register(req,res);
    res.json(response);
} catch (error) {
    console.log("Error in registerController function: ", error);
}
}
export default {loginController, registerController};