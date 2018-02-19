const router = require("express").Router();
const newsController = require("../../controllers/newsController");

// Matches with "/api/nyt"
router
  .route("/")
  .get(newsController.findAll)

module.exports = router;