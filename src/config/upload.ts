import path from 'path';
import crypto from 'crypto';
import multer from 'multer';

const tmpFoder = path.resolve(__dirname, '..', '..', 'tmp');

export default {
  directory: tmpFoder,
  storage: multer.diskStorage({
    destination: tmpFoder,
    filename(request, file, callback) {
      const fileHash = crypto.randomBytes(10).toString('HEX');
      const fileName = `${fileHash}-${file.originalname}`;

      return callback(null, fileName);
    },
  }),
};
