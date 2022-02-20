const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  try {
    const cat = await Category.findAll({
      include: [Product],
    });

    res.json(cat);

  } catch (err) {
    console.log(err);
  }
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  try {
    const cat = await Category.findOne({
      where: {
        id: req.paarams.id, // ID from request
      },
      include: [Product],
    });

    res.json(cat);
  } catch (err) {
    console.log(err);
  }
});

router.post('/', (req, res) => {
  // create a new category
  try {

  } catch (err) {

  }
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  try {

  } catch (err) {

  }
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  try {

  } catch (err) {

  }
});

module.exports = router;
