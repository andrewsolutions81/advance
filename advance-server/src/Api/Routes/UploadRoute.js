import express from "express";
import { v2 as cloudinary } from 'cloudinary';
import multer from "multer";
import { CloudinaryStorage } from 'multer-storage-cloudinary';
// import fs from "fs"

const router = express.Router();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: 'advance' // Advance folder for storing images
  }
});

const upload = multer({ storage: storage });
/* previous local way of storing images */
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "public/images");
//   },
//   filename: (req, file, cb) => {
//     cb(null, req.body.name);
//   },
// });
// const upload = multer({ storage: storage });

router.post("/", upload.single("image"), (req, res) => {
  const file = req.file;
  try {
    if (file) {
      res.json({ imageUrl: file.path });
    return res.status(200).json("✅ Successful file upload.");
    } else {
      throw new Error
    }
  } catch (error) {
    console.error("❌ uploadRoute server error: ", error);
  }
});

export default router;
