const multer = require('multer');
const path = require('path');
const crypto = require('crypto');

module.exports = {
    des: path.resolve(__dirname, '..', '..', 'tmp', 'uploads'),
    storege: multer.diskStorage({

    }),
    limits: {
        fileSize: 2 * 1024 + 1024,
    },
    fileFilter: (req, file, cb) => {
        const allowedMines = [
            'image/jpeg',
            'image/pjpeg',
            'image/png',
            'image/gif'
        ];

        if (allowedMines.includes()) {
            cb(null, true);
        } else {
            cb(new Error('Invalid file type.'));
        }
    },
};
