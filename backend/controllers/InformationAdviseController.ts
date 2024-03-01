// import { GridFsStorage } from 'multer-gridfs-storage'
import InformationAdviseModel from '../../models/InformationAdviseModel'
// import multer from 'multer';


export const postApiInformationAdvise  = async (req: any, res: any) => {
    const {name,phone,questions} = req.body;
    const NewInformationAdvise = {
        name, phone, questions
    }
    try {
        if(name && phone ) {
            const InformationAdvise = new InformationAdviseModel(NewInformationAdvise)
            await InformationAdvise.save()
        }

        res.send({
            Status: "success",
            mess: "Bạn đã gửi thông tin thành công"
        })
    } catch (error) {
        res.send({Status: "error", data: error})
    }
}
