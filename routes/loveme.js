var express = require('express'),
    router = express.Router();

    router.rotue("loveme").get("/pofile", function(req,res) {
      res.json({image: "sample"});
    });

module.exports = router;