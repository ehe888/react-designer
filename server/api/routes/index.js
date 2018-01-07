const express = require('express');
const router = express.Router();
const fs = require('fs')
const path = require('path')


router.get('/directory', (req, res) => {
  const searchPath = req.query.path || '/'
  const physicalRootPath = path.join(__dirname, "../../../client")
  const physicalSearchPath = path.join(physicalRootPath, searchPath)
  fs.readdir(physicalSearchPath, (err, items) => {
    if(err){
      return res.json(err)
    }
    const result = items
        .filter(
          item => !(/(^|\/)\.[^/.]/g).test(item))
        .map(name => {
          return {
            name: name,
            id: path.join(searchPath, name),
            path: path.join(searchPath, name),
            isLeaf: fs.statSync(path.join(physicalSearchPath, name)).isFile()
          }
        })
    return res.json(result)
  })
})

router.get('/source_code', (req, res) => {
  const filePath = req.query.path || '/'
  const physicalRootPath = path.join(__dirname, "../../../client")
  const physicalFilePath = path.join(physicalRootPath, filePath)
  fs.readFile(physicalFilePath, 'utf8', (err, data) => {
    if(err){
      return res.json(err)
    }
    return res.json({
      path: filePath,
      code: data
    })
  })
})

router.post('/source_code', (req, res) => {
  const filePath = req.query.path
  const physicalRootPath = path.join(__dirname, "../../../client")
  const physicalFilePath = path.join(physicalRootPath, filePath)
  console.log(req.body.code)

  let buffer = new Buffer(req.body.code, 'utf-8')
  fs.open(physicalFilePath, 'w', (err, fd) => {
    if(err) return res.json(err)

    fs.write(fd, buffer, 0, buffer.length, null, (err) => {
      if(err) return res.json(err)
      fs.close(fd, (err) => {
          if(err) return res.json(err)
          console.log('file written');

          return res.json({ path: filePath })
      })
    })
  })
})

router.get("/err", (req, res, next) => {
  next(new Error("Some Error"));
});

// API Specific 404 / Error Handlers
// ---------------------------------

// API not found
router.use(function(req, res){
  res.status(404);
  res.send();
});

// erorrs handler
router.use((err, req, res) => {
  var status = err.status || 500;
  res.status(status);
  res.json({
    app: "designer",
    status: status,
    error: err.message
  });
});

module.exports = router;