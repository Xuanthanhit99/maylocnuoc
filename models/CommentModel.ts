import { Schema, model, models } from "mongoose";

const CommentModelSchema = new Schema({
    name: {
        type: String
    },
    nameId: {
        type: String
    },
    phone: {
        type: String
    },
    image: {
        type: String,
        default: ""
    },
    isPurchase: {
        type: Boolean,
        default: false
    },
    textcomment: {
        type: String
    },
    evaluate: {
        type: Number
    },
    nameproduct: {
        type: String
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    replypeople : {
        type: Array,
        default: []
    }
})

const Comment= models.Comment || model("Comment", CommentModelSchema);
export default Comment