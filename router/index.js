const express = require('express');

const blogRoutes = require("./blog/blogRoutes")
const userRoutes = require("./user/userRoutes")

const router = express.Router();


router.use('/user', userRoutes);
router.use('/blog', blogRoutes);

module.exports = router;