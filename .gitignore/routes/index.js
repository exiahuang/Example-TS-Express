"use strict";
var express = require('express');
var router = express.Router();
/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', { title: 'Express Sample Node.js', message: 'Hello there!' });
});
module.exports = router;
