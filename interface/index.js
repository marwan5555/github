module.exports = {
    Hotels: {
      id: Number,
      title: String,
      image: String,
      location: String,
      gallery: Array,
      description: String,
      rating: Number,
      pricePeerDay: String,
      type: String
    },
    Reviews: {
      id: Number,
      author: String,
      text: String,
      date: String,
      imageReview: Array,
      rating: String,
      tripsId: String
    },
    TripsProps: {
      id: Number,
      title: String,
      image: String,
      location: String,
      category: String,
      description: Array,
      gallery: String,
      tripsDay: String,
      rating: Number,
      hotels: Array,
      reviews: Array,
      detailsTripsDay: Array,
      price: String,
      type: String
    }
  };
  