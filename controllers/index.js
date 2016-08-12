var express = require('express'),
    multer = require('multer'),
    upload = multer({dest: __dirname + './../public/uploads/'}),
    fs = require('fs'),
    router = express.Router();

router.get('/', function(req, res){
    res.render('index', { title: 'FCC File Metadata Microservice' });
});

router.post('/public/uploads', upload.single('archive'), function(req, res) {
    fs.unlink('./public/uploads/' + req.file.filename );
    res.render('response', { title: 'FCC File Metadata Microservice',
                             size: req.file.size
                           });
});

module.exports = router;
