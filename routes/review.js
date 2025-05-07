const express = require("express");
const router = express.Router({ mergeParams: true });
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const Review = require("../models/review.js");
const Listing = require("../models/listing.js");
const {
  validateReview,
  isLoggedIn,
  isReviewAuthor,
} = require("../middleware.js");

const reviewController = require("../controllers/reviews.js");

// Create Route
router.post(
  "/",
  isLoggedIn("You must be logged in to add review!"),
  validateReview,
  wrapAsync(reviewController.createReview)
);

// Delete Route
router.delete(
  "/:reviewId",
  isLoggedIn("You must be logged in to delete review!"),
  isReviewAuthor,
  wrapAsync(reviewController.destroyReview)
);

module.exports = router;
