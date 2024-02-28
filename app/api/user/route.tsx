import { connectDB } from "../../../backend/config/db"
import User from "../../../models/UserModel"

export const POST = async (request: any) => {
    const {username, password, email} = await request.json()

    try {
        await connectDB()
        const findUserNameUser = await User.findOne({username: username})
        const findEmailUser = await User.findOne({email: email})
        if(findUserNameUser || findEmailUser) {
            return new Response(JSON.stringify({message: "Thông tin tài khoản đã được đăng kí ",success: "true"}), {
                status: 401
            })
        }
        const newUser = new User({username, password, email});
        await newUser.save()
        return new Response(JSON.stringify({success: "true"}), {status: 201})
    } catch (error) {
        return new Response(JSON.stringify({error, success: "false"}),{status: 500})   
    }
}