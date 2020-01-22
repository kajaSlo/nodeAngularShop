var express = require('express');
var router = express.Router();

var Page = require('../models/page');

router.get('/', function(req,res){
   Page.find({}, function(err,pages){
       if (err) console.log(err);
       res.json(pages);
   }); 
});

router.get('/:slug', function (req, res) {

    var slug = req.params.slug;

    Page.findOne({ slug: slug }, function (err, page) {
        if (err) console.log(err);
        res.json(page);
    });
});

router.post('/add-page', function (req, res) {

    var title = req.body.title;
    var slug = req.body.title.replace(/\s+/g, '-').toLowerCase();
    var content = req.body.content;

    Page.findOne({ slug: slug }, function (err, page) {
        if (err) console.log(err);

        if (page) {
            res.json("pageExists");
        } else {
            var page = new Page({
                title: title,
                slug: slug,
                content: content,
                sidebar: "no"
            });
            page.save(function (err) {
                if (err) console.log(err);
                res.json("ok");
            });
        }
    });
});

router.get('/edit-page/:id', function (req, res) {

    var id = req.params.id;

    Page.findById(id, function (err, page) {
        if (err) console.log(err);
        res.json(page);
    });
});

router.post('/edit-page/:id', function (req, res) {

    var id = req.params.id;

    var title = req.body.title;
    var slug = req.body.title.replace(/\s+/g, '-').toLowerCase();
    var content = req.body.content;

    Page.findOne({ slug: slug, _id: { '$ne': id } }, function (e, p) {
        if (p) {
            res.json("pageExists");
        } else {
            Page.findById(id, function (err, page) {
                if (err) console.log(err);

                page.title = title;
                page.slug = slug;
                page.content = content;

                page.save(function (err) {
                    if (err) {
                        console.log(err);
                        res.json("problem");
                    } else {
                        res.json("ok");
                    }
                });
            });
        }
    });
});

router.get('/delete-page/:id', function (req, res) {

    var id = req.params.id;

    Page.findByIdAndRemove(id, function (err) {
        if (err) {
            console.log(err);
            res.json("error");
        } else {
            res.json("ok");
        }
    });
});

module.exports = router;