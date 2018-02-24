const router = require("express").Router();
const mainRoutes = require("./main")
const newsRoutes = require("./article");

// news routes
router.use("/news", newsRoutes);
router.use("/main", mainRoutes);



module.exports = router;