import { GridFsStorage } from 'multer-gridfs-storage'
import ProductModel from '../models/ProductModel'
import multer from 'multer';

export const getApiProduct = async (req: any,res: any) => {
    const getProduct = await ProductModel.find({})
    res.send(getProduct)
}

export const postApiProduct  = async (req: any, res: any) => {
    const {base64} = req.body;
    try {
        ProductModel.create({
            image:base64,
            id: req.body.id
        });

        res.send({Status: "ok"})
    } catch (error) {
        res.send({Status: "error", data: error})
    }
}
