import { asyncError } from "@/middleware/error";
import { User } from "@/models/user";
import { connectDB, cookieSetter, generateToken } from "@/utils/features";
import { errorHandler } from "@/middleware/error";
import bcrypt from "bcrypt";


const handler = asyncError(async (req, res) => {
    if (req.method !== "POST") {
        return errorHandler(res, 400, "Only POST Method not allowed")
    }

    const { name, email, password } = req.body;

    if (name == "" || email == "" || password == "") {
        return errorHandler(res, 400, "please provide all fiels");
    }

    await connectDB();

    let user = await User.findOne({ email });

    if (user) return errorHandler(res, 400, "User already exists");

    const hashedPassword = await bcrypt.hash(password, 10);

    console.log(hashedPassword);

    user = await User.create({
        name, email, 
        password : hashedPassword
    })

    const token = generateToken(user._id);

    cookieSetter(res, token, true);

    res.status(201).json({
        success: true,
        message: "Registered successfully",
        user,
    })

})


export default handler;