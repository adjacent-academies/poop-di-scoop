mapboxgl.accessToken =
  "pk.eyJ1IjoiYWFsZXhhbmRyYXJvbWVybyIsImEiOiJjanlqZGxuMzYwMmx6M29tZ2VlZjEzcmwyIn0.Sfzq_TGtQXx_5wCFKejnYg";

var filterGroup = document.getElementById("filter-group");
var map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/streets-v11",
  center: [-122.4194, 37.7749],
  zoom: 12.15
});

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
                  coordinates: [-122.4143, 37.774]
                }
              },
              {
                type: "Feature",
                geometry: {
                  type: "Point",
                  coordinates: [-122.413, 37.783]
                }
              },
              {
                type: "Feature",
                geometry: {
                  type: "Point",
                  coordinates: [-122.421238, 37.773537]
                }
              },
              {
                type: "Feature",
                geometry: {
                  type: "Point",
                  coordinates: [-122.413177, 37.780548]
                }
              },
              {
                type: "Feature",
                geometry: {
                  type: "Point",
                  coordinates: [-122.413, 37.7831]
                }
              },
              {
                type: "Feature",
                geometry: {
                  type: "Point",
                  coordinates: [-122.413056, 37.7831424]
                }
              },
              {
                type: "Feature",
                geometry: {
                  type: "Point",
                  coordinates: [-122.4156, 37.781]
                }
              },
              {
                type: "Feature",
                geometry: {
                  type: "Point",
                  coordinates: [-122.412, 37.784]
                }
              }
            ]
          }
        },
        layout: {
          "icon-image": "poop",
          "icon-size": 0.04
        }
      });
    }
  );
});
