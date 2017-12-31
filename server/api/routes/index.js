const express = require('express');
const router = express.Router();
const fs = require('fs')
const path = require('path')


router.get('/sources', (req, res) => {
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