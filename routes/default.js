const express = require('express');
const router = express.Router();

router.get('/', init, renderIndex);


// middleware ===================================================
function init(req, res, next) {
    next();
}

// render ===================================================
function renderIndex(req, res, next) {
    res.redirect('/index.html')
}

module.exports = router;