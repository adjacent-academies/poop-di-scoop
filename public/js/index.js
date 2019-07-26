// $('.poop-di-scoop-rating').rating();

// $(".poop-di-scoop-rating").rating({
//   initialRating: 3,
//   maxRating: 5
// });

var filterGroup = document.getElementById("filter-group");
mapboxgl.accessToken =
  "pk.eyJ1IjoiYWFsZXhhbmRyYXJvbWVybyIsImEiOiJjanlqZGxuMzYwMmx6M29tZ2VlZjEzcmwyIn0.Sfzq_TGtQXx_5wCFKejnYg";
  var map = new mapboxgl.Map({
  container: "map", // container id

  style: "mapbox://styles/mapbox/streets-v11", // stylesheet location
  coordinates: [0, 0], // starting position [lng, lat]
  zoom: 9 // starting zoom
});

var places = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      properties: {
        icon: "theatre"
      },
      geometry: {
        type: "Point",
        coordinates: [-77.038659, 38.931567]
      }
    },
    {
      type: "Feature",
      properties: {
        icon: "theatre"
      },
      geometry: {
        type: "Point",
        coordinates: [-77.003168, 38.894651]
      }
    },
    {
      type: "Feature",
      properties: {
        icon: "bar"
      },
      geometry: {
        type: "Point",
        coordinates: [-77.090372, 38.881189]
      }
    },
    {
      type: "Feature",
      properties: {
        icon: "bicycle"
      },
      geometry: {
        type: "Point",
        coordinates: [-77.052477, 38.943951]
      }
    },
    {
      type: "Feature",
      properties: {
        icon: "music"
      },
      geometry: {
        type: "Point",
        coordinates: [-77.031706, 38.914581]
      }
    },
    {
      type: "Feature",
      properties: {
        icon: "music"
      },
      geometry: {
        type: "Point",
        coordinates: [-77.020945, 38.878241]
      }
    },
    {
      type: "Feature",
      properties: {
        icon: "music"
      },
      geometry: {
        type: "Point",
        coordinates: [-77.007481, 38.876516]
      }
    }
  ]
};

var filterGroup = document.getElementById("filter-group");
var map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/light-v10",
  center: [-77.04, 38.907],
  zoom: 11.15
});

map.on("load", function() {
  // Add a GeoJSON source containing place coordinates and information.
  map.addSource("places", {
    type: "geojson",
    data: places
  });

  places.features.forEach(function(feature) {
    var symbol = feature.properties["icon"];
    var layerID = "poi-" + symbol;

    // Add a layer for this symbol type if it hasn't been added already.
    if (!map.getLayer(layerID)) {
      map.addLayer({
        id: layerID,
        type: "symbol",
        source: "places",
        layout: {
          "icon-image": symbol + "-15",
          "icon-allow-overlap": true
        },
        filter: ["==", "icon", symbol]
      });

      // Add checkbox and label elements for the layer.
      var input = document.createElement("input");
      input.type = "checkbox";
      input.id = layerID;
      input.checked = true;
      filterGroup.appendChild(input);

      var label = document.createElement("label");
      label.setAttribute("for", layerID);
      label.textContent = symbol;
      filterGroup.appendChild(label);

      // When the checkbox changes, update the visibility of the layer.
      input.addEventListener("change", function(e) {
        map.setLayoutProperty(
          layerID,
          "visibility",
          e.target.checked ? "visible" : "none"
        );
      });
    }
  });
});

// https://docs.mapbox.com/mapbox-gl-js/example/add-image/

// map.on("load", function() {
//   map.loadImage(
//     "https://upload.wikimedia.org/wikipedia/commons/9/9f/Poop_Emoji_Icon.png",
//     function(error, image) {
//       if (error) throw error;
//       map.addImage("poop", image);
//       map.addLayer({
//         id: "points",
//         type: "symbol",
//         source: {
//           type: "geojson",
//           data: {
//             type: "FeatureCollection",
//             features: [
//               {
//                 type: "Feature",
//                 geometry: {
//                   type: "Point",
//                   coordinates: [-122.4, 37.7]
//                 }
//               },
//               {
//                 type: "Feature",
//                 geometry: {
//                   type: "Point",
//                   coordinates: [-122.4, 37.9]
//                 }
//               }
//             ]
//           }
//         },
//         layout: {
//           "icon-image": "poop",
//           "icon-size": 0.05
//         }
//       });
//     }
//   );
// }
// );
