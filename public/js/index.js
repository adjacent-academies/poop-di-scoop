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
  center: [-122.4, 37.7],  // starting position [lng, lat]
  zoom: 9 // starting zoom
});

// https://docs.mapbox.com/mapbox-gl-js/example/add-image/

map.on("load", function() {
  map.loadImage(
    "https://upload.wikimedia.org/wikipedia/commons/9/9f/Poop_Emoji_Icon.png",
    function(error, image) {
      if (error) throw error;
      map.addImage("poop", image);
      map.addLayer({
        id: "points",
        type: "symbol",
        source: {
          type: "geojson",
          data: {
            type: "FeatureCollection",
            features: [
              {
                type: "Feature",
                geometry: {
                  type: "Point",
                  coordinates: [-122.4, 37.7]
                }
              },
              {
                type: "Feature",
                geometry: {
                  type: "Point",
                  coordinates: [-122.4, 37.9]
                }
              }
            ]
          }
        },
        layout: {
          "icon-image": "poop",
          "icon-size": 0.05
        }
      });
    }
  );
});
