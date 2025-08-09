const multer = require('multer')
const upload = multer({storage:multer.diskStorage({}),limits:{
    fileSize: 20 * 1024 * 1024,
    files: 20,
  },})
module.exports = upload