var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Unit = require('../models/Unit.js');

/* GET /units listing. */
router.get('/', function(req, res, next) {
  Unit.find(function (err, units) {
    if (err) return next(err);
    res.json(units);
  });
});

/* POST /units */
router.post('/', function(req, res, next) {
  Unit.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* GET /units/id */
router.get('/:id', function(req, res, next) {
  Unit.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* PUT /units/:id */
router.put('/:id', function(req, res, next) {
  Unit.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE /units/:id */
router.delete('/:id', function(req, res, next) {
  Unit.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;