const express = require('express')
const path=require('path')
const bodyParser = require('body-parser')
const multer  = require('multer')

const app = express()
const upload = multer({ dest: path.join(__dirname, '/uploads/') })

app.get('/testGet', function (req, res) {
    console.log(req.query);
  res.send('success');
})

// create application/x-www-form-urlencoded parser
app.post('/testPostDefault', bodyParser.urlencoded({ extended: false }),function (req, res) {
    console.log(req.body);
    res.send('success');
})
app.post('/testPostText', bodyParser.text({ type: 'text/plain' }),function (req, res) {
    console.log(req.body);
  res.send('success');
})
app.post('/testPostMulipart',upload.array('photos', 12), function (req, res) {
    console.log(req.files);
    console.log(req.body);
  res.send('success');
})
app.use(express.static(path.join(__dirname, 'www')));
 
app.listen(3000,function(){
    console.log('Server running at http://localhost:3000');
})