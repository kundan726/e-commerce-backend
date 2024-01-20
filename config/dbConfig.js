import mongoose from "mongoose";

const connect_DB = async (dbURL) => {
    try {
        if(dbURL){
            const DB_OPTIONS = {
                dbName: 'e-commerce'
            }
            await mongoose.connect(dbURL, DB_OPTIONS);
            console.log("DB connected successful!")
        }else{
            console.log("Please provide database URL")
        }
    } catch (error) {
        console.log("Error in DB connection : ", error);
    }
}

export default connect_DB;