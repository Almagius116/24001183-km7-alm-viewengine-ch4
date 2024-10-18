const Imagekit = require("imagekit");
require("dotenv").config();

const imagekit = new Imagekit({
  publicKey: process.env.IMGKIT_PUBLIC_KEY,
  privateKey: process.env.IMGKIT_PRIVATE_KEY,
  urlEndpoint: process.env.IMGKIT_URLENDPOINT,
});

module.exports = imagekit;
