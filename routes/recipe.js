const express = require('express');
const router = express.Router();

// @route    GET api/recipe/:id
// @desc     Get recipe
// @access   Private
router.get('/:id', (req, res) => {
    res.send('Get recipe');
});



module.exports = router;