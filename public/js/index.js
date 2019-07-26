console.log("alexandra testing");

// $('.poop-di-scoop-rating').rating();

// $(".poop-di-scoop-rating").rating({
//   initialRating: 3,
//   maxRating: 5
// });


mapboxgl.accessToken =
"pk.eyJ1IjoiYWFsZXhhbmRyYXJvbWVybyIsImEiOiJjanlqZGxuMzYwMmx6M29tZ2VlZjEzcmwyIn0.Sfzq_TGtQXx_5wCFKejnYg";
var map = new mapboxgl.Map({
  container: "map", // container id
  style: "mapbox://styles/mapbox/streets-v11", // stylesheet location
  center: [-122.4, 37.7], // [-74.5, 40], // starting position [lng, lat]
  zoom: 9 // starting zoom
});
