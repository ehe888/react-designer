var express = require('express');
var router = express.Router();

// Basic Route Demos
// -----------------

router.get('/', (req, res, next) => {
  res.json({
    foo: "bar",
    baz: "quux"
  });
});

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