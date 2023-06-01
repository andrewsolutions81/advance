// UploadRoute.js
import express from "express";
import { v2 as cloudinary } from "cloudinary";
import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";

const router = express.Router();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "advance",
  },
});

const upload = multer({ storage: storage });

router.post("/", upload.single("image"), (req, res) => {
  try {
    const file = req.file;
    if (file) {
      return res.status(200).json({ imageUrl: file.path });
    } else {
      throw new Error();
    }
  } catch (error) {
    console.error("❌ uploadRoute server error: ", error);
  }
});

export default router;
