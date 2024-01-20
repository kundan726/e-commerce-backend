import authModel from "../models/authModel.js";
import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken";

const login = async (req, res) => {
    try {
        if(req){
            console.log("Inside auth service:")

        }
    } catch (error) {
        console.log("Error while login: ", error);
    }
};

const register = async (req, res) => {
    try {
        const {email, password, role, name} = req.body;
        const userData = await authModel.findOne({email});
        if(email && password && role && name){
            if(userData && userData.email === email){
                res.status(400).send({
                  'msg': 'E-mail already exist'  
                });
            }else{
                const salt = await bcrypt.genSalt(12);
                const hashPassword = await bcrypt.hash(password,salt)
                const dataToSave = {
                    email,
                    password : hashPassword,
                    role,
                    name
                }
                await authModel.create(dataToSave);
                const userData = await authModel.find({email});
                const token = jwt.sign({userId: userData._id},process.env.SECRET_KEY,{expiresIn:'10d'});
                res.status(200).send({
                    'msg' : 'Registration successful',
                    'token': token
                })
            }
        }
    } catch (error) {
        console.log("Error while login: ", error);
    }
}
export default {login, register};
