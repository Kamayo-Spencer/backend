require("dotenv/config");
const jsonwebtoken = require("jsonwebtoken");

export const generateToken = (user) =>{
    return jsonwebtoken.sign({
        _id: user._id,
        email:user.email,
        username:user.username,
        password:user.password,
        
    },
    process.env.JWT_SECRET
    )

}