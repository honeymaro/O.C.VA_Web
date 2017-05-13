var express = require('express');
var router = express.Router();
var urlencode = require('urlencode');
var fs = require('fs');

/* GET users listing. */
router.get('/checkUrl', function (req, res, next) {
  try{
    // console.log(req.query);
    var url = req.query.url;
    url = url.toString().replace("https://", "").replace("http://", "");
    if (!url) {
      res.status(403).send({
        code: 403,
        message: "Please enter Url."
      });
      return;
    }
    else if (url.indexOf("/") >= 0) {

      res.status(403).send({
        code: 403,
        message: "Url not allowed."
      });
      return;
    }
    else {
      res.status(200).send({
        code: 200,
        message: "Valid url."
      });
      return;
    }

  }
  catch(e){
    next(e);
  }


});

module.exports = router;
