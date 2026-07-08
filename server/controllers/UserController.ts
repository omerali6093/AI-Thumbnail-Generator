import { Request, Response } from "express"
import Thumbnail from "../models/Thumbnail.js";

// Controllers to get All User Thumbnails
export const getUsersThumbnails = async (req: Request, res: Response) => {
    try {

        const {userId} = req.session; 

        const thumnail = await Thumbnail.find({userId}).sort({createdAt: -1})
        res.json({thumnail})

    } catch (error: any) {
        console.log(error)
        res.status(500).json({message: error.message})
    }
}

// Controllers to get single User Thumbnail
export const getSingleUserThumbnail = async (req: Request, res: Response) => {
    try {

        const { userId } = req.session; 
        const { id } = req.params;

        const thumnail = await Thumbnail.findOne({ userId , _id: id })
        res.json({thumnail})

    } catch (error: any) {
        console.log(error)
        res.status(500).json({message: error.message})
    }
}

