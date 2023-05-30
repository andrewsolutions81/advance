import { v2 as cloudinary } from 'cloudinary';
import multer from 'multer';
import { CloudinaryStorage } from 'multer-storage-cloudinary';
import fs from "fs"

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

// Configure multer storage
const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: 'advance' // Advance folder for storing images
  }
});

// Initialize multer upload
const upload = multer({ storage });

// Define an endpoint for image upload
app.post('/upload', upload.single('image'), (req, res) => {
  // Access the uploaded file details
  const file = req.file;

  // Handle file upload success or error
  if (file) {
    res.json({ imageUrl: file.path });
  } else {
    res.status(400).json({ error: 'Failed to upload image' });
  }
});

//mir uploas single example
async function uploadSingleHandler(req, res){
  const { file } = req;

  const size = file.size / 1024 / 1024; // MB

  if (size > 2) {
    return res.status(400).json({
      message: 'File size is too big'
    });
  }

  try {
    const result = await cloudinary.uploader.upload(file.path, {
      folder: 'assets',
      use_filename: true,
      unique_filename: false,
      overwrite: true,
      resource_type: 'auto'
    })
    return res.json(result);
  } catch (error) {
    return res.status(500).json(error);
  } finally {
    fs.unlinkSync(file.path);
  }
}
