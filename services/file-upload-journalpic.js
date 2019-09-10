const aws = require('aws-sdk');
const config = require('./config-journalpic');
const multer = require('multer');
const multerS3 = require('multer-s3');

aws.config.update({
  accessKeyId: config.AWS.accessKeyId,
  secretAccessKey: config.AWS.secretAccessKey,
  region: 'ap-northeast-2'
});

let s3 = new aws.S3();

let uploadJournalPic = multer({
  storage: multerS3({
    s3: s3,
    bucket: 'trijournal-server-postjournalpic',
    acl: 'public-read',
    metadata: function(req, file, cb) {
      cb(null, { fieldName: 'TESTING_META_DATA' });
    },
    key: function(req, file, cb) {
      cb(null, Date.now().toString());
    }
  })
});

module.exports = uploadJournalPic;
