const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");

cloudinary.config({
  cloud_name: "dptbcgtko",
  api_key: "168911598667423",
  api_secret: "DaP3aNjs5NClJc2LffbbB8Yc6oI",
});

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: " instaClone",
  },
});

module.exports = { cloudinary, storage };