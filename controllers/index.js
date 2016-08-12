var express = require('express'),
    router = express.Router(),
    multer  = require('multer'),
    uploading = multer({ dest : __dirname + '../public/uploads/',
                         limits : {filesize : 1000000,
                                   files: 1}});


router.post('/', function(req, res) {
  res.render('index',{title: 'File metadata microservice'});
});

module.exports = router;
