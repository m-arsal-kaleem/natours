const Review = require('../models/reviewModel');

// Review Routes

exports.getAllReviews = async (req, res, next) => {
  const reviews = await Review.find();

  // Send Response
  res.status(200).json({
    status: 'success',
    results: reviews.length,
    reviews,
  });
};

exports.createReview = async (req, res, next) => {
  const newReview = await Review.create(req.body);

  res.status(201).json({
    status: 'success',
    data: {
      review: newReview,
    },
  });
};
