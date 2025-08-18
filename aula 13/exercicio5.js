// 5. Object inside object
// Make an object 'movie' with 'title' and 'director'.
// Inside it, add 'review' with 'rating' and 'comment'.
// Print the rating and comment.

let movie = {
    title: "Inception",
    director: "Christopher Nolan",
    review: {
        rating: 9,
        comment: "A mind-bending thriller with stunning visuals."
    }
};

console.log("Rating: " + movie.review.rating);
console.log("Comment: " + movie.review.comment);