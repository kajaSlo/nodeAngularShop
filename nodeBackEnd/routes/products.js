var express = require('express');
var router = express.Router();

//Get page model

var Product = require('../models/product');

//Get all products

router.get('/', function(req,res){
    Product.find({}, function(err,products){
       if (err) console.log(err);
       res.json(products);
   }); 
});


/*
// Get a single page

router.get('/:slug', function (req, res) {

    var slug = req.params.slug;

    Page.findOne({ slug: slug }, function (err, page) {
        if (err) console.log(err);
        res.json(page);
    });
});


*/
// POST add product
router.post('/add-product', function (req, res) {

    var title = req.body.title;
    var slug = req.body.title.replace(/\s+/g, '-').toLowerCase();
    var desc = req.body.desc;
    var price = req.body.price;

    Product.findOne({ slug: slug }, function (err, product) {
        if (err) console.log(err);

        if (product) {
            res.json("productExists");
        } else {
            var product = new Product({
                title: title,
                slug: slug,
                desc: desc,
                price: price
            });

            product.save(function (err) {
                if (err) console.log(err);
                res.json("ok");
            });
        }
    });
});



// GET edit product
router.get('/edit-product/:id', function (req, res) {

    var id = req.params.id;

    Product.findById(id, function (err, product) {
        if (err) console.log(err);
        res.json(product);
    });
});




//POST edit product
router.post('/edit-product/:id', function (req, res) {

    var id = req.params.id;

    var title = req.body.title;
    var slug = req.body.title.replace(/\s+/g, '-').toLowerCase();
    var desc = req.body.desc;
    var price = req.body.price;


    Product.findOne({ slug: slug, _id: { '$ne': id } }, function (e, p) {
        if (e) console.log(e);
        if (p) {
            res.json("productExists");
        } else {
            Product.findById(id, function (err, product) {
                if (err) console.log(err);

                product.title = title;
                product.slug = slug;
                product.desc = desc;
                product.price = price;

                product.save(function (err) {
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


//GET delete product
router.get('/delete-product/:id', function (req, res) {

    var id = req.params.id;

    Product.findByIdAndRemove(id, function (err) {
        if (err) {
            console.log(err);
            res.json("error");
        } else {
            res.json("ok");
        }
    });
});

//Exports

module.exports = router;