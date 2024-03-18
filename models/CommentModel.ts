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
    textcomment: {
        type: String
    },
    replypeople : {
        type: Array,
        default: []
    }
})

const Comment= models.Comment || model("comment", CommentModelSchema);
export default Comment