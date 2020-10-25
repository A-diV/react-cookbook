const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { check, validationResult } = require('express-validator');

//const User = require('../models/User');
const Recipe = require('../models/Recipes');
//const config = require('config');
//const { createRef } = require('react');

// @route    GET api/recipes
// @desc     Get all recipes
// @access   Private
router.get('/', auth, async (req, res) => {
  try {
    const recipes = await Recipe.find({ user: req.user.id }).sort({ date: -1 });
    res.json(recipes);
  } catch (err) {
    console.error(err.message);
    res.status(500).sendStatus('Server error');
  }
});

// @route    POST api/recipes
// @desc     Add new recipe
// @access   Private
router.post(
  '/',
  [
    auth,
    [
      check('label', 'Recipe label is required').not().isEmpty(),
      check('image', 'Recipe image is required').not().isEmpty(),
      check('url', 'Recipe URL is required').not().isEmpty(),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { label, image, healthLabel, url } = req.body;

    try {
      const newRecipe = new Recipe({
        label,
        image,
        healthLabel,
        url,
        user: req.user.id,
      });

      const recipe = await newRecipe.save();

      res.json(recipe);
    } catch (err) {
      console.error(err.message);
      res.status(500).sendStatus('Server Error');
    }
  }
);

// @route    DELETE api/recipes/:id
// @desc     Delete recipe
// @access   Private
router.delete('/:id', (req, res) => {
  res.send('Delete recipe');
});

module.exports = router;
