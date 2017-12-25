const express = require('express');
const router = express.Router();
const fs = require('fs')
const path = require('path')

// Basic Route Demos
// -----------------

router.get('/dir', (req, res) => {
  let searchPath = path.join(__dirname, "../../../client/designer")
  fs.readdir(searchPath, (err, items) => {
    if(err){
      return res.json(err)
    }
    const result = items.map(name => {
      return {
        name: name,
        path: `${searchPath}/${name}`,
        code: `var name="${name}"`
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
router.use(function(req, res, next){
  res.status(404);
  res.send();
});

// erorrs handler
router.use((err, req, res, next) => {
  var status = err.status || 500;
  res.status(status);
  res.json({
    app: "designer",
    status: status,
    error: err.message
  });
});

// Exports
// -------

module.exports = router;