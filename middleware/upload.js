const multer = require('multer');
const cloudinary = require('cloudinary').v2;

// Simple memory storage first, then upload to cloudinary manually
const storage = multer.memoryStorage();

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 5 * 1024 * 1024 // 5MB limit
  }
});

module.exports = upload;