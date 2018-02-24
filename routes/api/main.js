const router = require("express").Router();
const mainController = require("../../controllers/mainController");

// Matches with "/api/nyt"
router
    .route("/")
    .get(mainController.findAll)

module.exports = router;