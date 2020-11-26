const mongoose = require('mongoose');

const RecipeSchema = mongoose.Schema({
  // Create reference to a user in db owning the recipes
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users',
  },
  label: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
    unique: true,
  },
  healthLabel: {
    type: String,
    default: 'undefined',
  },
  url: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('recipe', RecipeSchema);
