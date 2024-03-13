// import { GridFsStorage } from 'multer-gridfs-storage'
import UserModel from '../../models/UserModel'
// import multer from 'multer';

export const createUserApi  = async (req: any, res: any) => {
    try {
        const findUserNameUser = await UserModel.findOne({username: req.body.username})
        const findEmailUser = await UserModel.findOne({email: req.body.email})
        if(findUserNameUser || findEmailUser) {
            res.send({
                Status: "Tên đăng nhập hoặc email đã được đăng kí"
            })
            return
        }
        // UserModel.create({
        // });

        res.send({Status: "ok"})
    } catch (error) {
        res.send({Status: "error", data: error})
    }
}
