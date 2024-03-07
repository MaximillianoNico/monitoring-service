import express, { Request, Response } from 'express';
import { Knex } from 'knex';
import multer from 'multer';
import multerS3 from 'multer-s3';

import { S3Client } from '@aws-sdk/client-s3';
import { getUserResources } from '../controllers/users';

const router = express.Router();

const UploaderController = ({ db, bucket }: { db: Knex, bucket: any }) => {
  
const s3Client = new S3Client({
  credentials: {
    accessKeyId: process?.env?.AWS_ACCESS_KEY ?? '',
    secretAccessKey: process?.env?.AWS_SECRET_KEY ?? ''
  },
  region: process?.env?.AWS_BUCKET_NAME ?? "" // e.g., 'us-east-1'
});

const storage = multerS3({
  s3: s3Client,
  bucket: 'projects-storage-mext',
  metadata: function (req, file, cb) {
    cb(null, { fieldName: file.fieldname });
  },
  key: function (req, file, cb) {
    cb(null, Date.now().toString() + '-' + file.originalname);
  },
})

  const upload = multer({
    storage,
    fileFilter: async function (req: any, file: any, cb: any) {
      try {
        const userResources = await getUserResources(db, req.userName, req.userId); // Fetch user's resource data
  
        const fileSizeInByte = req.headers['content-length'];
        const maxSizeInByte = (10 * 1024 * 1024) - +userResources?.totalStorage ??  0;

        if (fileSizeInByte >= maxSizeInByte) {
          throw new Error("user have maximum upload file source")
        }
        // If the file size is within the limit, accept the upload
        cb(null, true);
      } catch (error) {
        // Handle error
        cb(error);
      }
    }
  });

  const storeFile = async (req: any, res: Response) => {
    const user = await getUserResources(db, req.userName, req.userId);

    const totalStorage = +user.totalStorage + +req.headers['content-length'];

    await db('user_storage')
      .where('user_id', '=', req.userId)
      .update({ totalStorage })

    console.log('req.file: ', req.file)
    await db('user_files')
      .insert({
        user_id: req.userId,
        fileName: req.file.location ?? "",
        fileSize: req.file.size ?? 0,
      })

    return res
      .status(200)
      .json({
        message: 'File uploaded successfully',
        // location: req?.file?.location || ""
      });
  }

  router.post('/store', upload.single('file'), storeFile);

  return router;
}

export default UploaderController;
