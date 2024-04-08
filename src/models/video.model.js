import mongoose from "mongoose"

const videoSchema = mongoose.Schema(
    {
        videoFile: {
            type : String,             //cloudinary
            required : true
        },
        thumbnail: {
            type : String,             //cloudinary
            required : true
        },
        title: {
            type : String,             
            required : true
        },
        description: {
            type : String,             
            required : true
        },
        description: {
            type : Number,             //cloudinary
            required : true
        },
        views : {
            type : Number,
            default : 0
        },
        isPublished : {
            type : Boolean,
            default : true
        },
        owner : {
            type : mongoose.Schema.Types.ObjectId,
            ref : "User"
        }
    },
    {
        timestamps : true
    }
);


export const Video = mongoose.model("Video" , videoSchema);