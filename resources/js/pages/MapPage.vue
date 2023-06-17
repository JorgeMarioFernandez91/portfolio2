<template>
  <div>
    <div id="map" ref="map" style="height: 500px"></div>

    <!-- <form>
      <input
        name="address"
        placeholder="Address"
        type="text"
        autocomplete="address-line1"
        @keyup.enter="search()"
      />
      <input
        name="apartment"
        placeholder="Apartment number"
        type="text"
        autocomplete="address-line2"
      />
      <input name="city" placeholder="City" type="text" autocomplete="address-level2" />
      <input name="state" placeholder="State" type="text" autocomplete="address-level1" />
      <input name="country" placeholder="Country" type="text" autocomplete="country" />
      <input name="postcode" placeholder="Postcode" type="text" autocomplete="postal-code" />
    </form> -->
  </div>
</template>

<script>
import { MglMap } from "vue-mapbox";

export default {
  components: {
    MglMap,
  },

  props: {
    category: {
      type: String,
      default: "",
    },
    searchStr: {
      type: String,
      default: "",
    },
    categorySearchFlag: {
      type: Boolean,
      default: false,
    },
    inputSearchFlag: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      mapboxURL: "https://api.mapbox.com/search/searchbox/v1",
      mapboxAccessToken:
        "pk.eyJ1IjoibWFyaW9mZXJuYW5kZXoiLCJhIjoiY2xpa3Z0ZGZ0MGY2dzNqcDl0ejlobHZ5ciJ9.M1d7TXJTIvlTcMtk6B7mhg",
      mapStyle: "mapbox://styles/mapbox/streets-v10",
      limit: 5,
      map: null,
      coords: {
        lat: null,
        long: null,
      },
      inputText: null,
      mapboxData: null,
    };
  },

  mounted() {
    this.getCoords();
    this.createMap();

    if (this.categorySearchFlag) {
      this.getData();
    } else if (this.inputSearchFlag) {
      this.search();
    }

    this.resetFlags();
  },
  methods: {
    resetFlags() {
      this.$emit("resetFlags");
    },
    search() {
      axios
        .get(
          `${this.mapboxURL}/suggest?q=${this.searchStr}&language=en&session_token=0b4b52e7-dcc3-4611-888c-546eec109681&access_token=${this.mapboxAccessToken}`
        )
        .then((response) => {
          this.mapboxData = response.data;

          axios
            .get(
              `${this.mapboxURL}/retrieve/${response.data.suggestions[0].mapbox_id}?session_token=0b4b52e7-dcc3-4611-888c-546eec109681&access_token=${this.mapboxAccessToken}`
            )
            .then((response) => {
              this.mapboxData = response.data;
              this.addMarkers();
            });
        });
    },
    async getData() {
      axios
        .get(
          `${this.mapboxURL}/category/${this.category}?access_token=${this.mapboxAccessToken}&language=en&limit=${this.limit}`
        )
        .then((response) => {
          this.mapboxData = response.data;
          this.addMarkers(response.data);
        });
    },

    async getCoords() {
      if (navigator.geolocation) {
        return navigator.geolocation.getCurrentPosition((position) => {
          this.coords.lat = position.coords.latitude;
          this.coords.long = position.coords.longitude;
        });
      }
      return null;
    },

    createMap() {
      mapboxgl.accessToken = this.mapboxAccessToken;

      // init the map
      this.map = new mapboxgl.Map({
        container: "map",
        style: "mapbox://styles/mapbox/streets-v10",
        minzoom: 10,
        center: [-74.0073, 40.7124], // Manhattan
        zoom: 10,
      });

      // Create a popup, but don't add it to the map yet.
      const popup = new mapboxgl.Popup({
        closeButton: false,
        closeOnClick: false,
      });

      setTimeout(() => {
        this.map.resize();
      }, 100);
    },

    async addMarkers() {
      var data = this.mapboxData;
      // for (var feature of data.features) {
      //   new Mapbox.Marker().setLngLat(feature.geometry.coordinates).setPopup(popup).addTo(this.map);
      // }
      this.map.addSource("places", {
        type: "geojson",
        data: {
          type: "FeatureCollection",
          features: data.features,
        },
      });

      // Add a layer showing the places.
      this.map.addLayer({
        id: "places",
        type: "circle",
        source: "places",
        layout: {},
        paint: {
          "circle-color": "#4264fb",
          "circle-radius": 6,
          "circle-stroke-width": 2,
          "circle-stroke-color": "#ffffff",
        },
      });

      // // Create a popup, but don't add it to the map yet.
      const popup = new mapboxgl.Popup({
        closeButton: false,
        closeOnClick: false,
      });

      this.map.on("mouseenter", "places", (e) => {
        // Change the cursor style as a UI indicator.
        this.map.getCanvas().style.cursor = "pointer";

        // Copy coordinates array.
        const coordinates = e.features[0].geometry.coordinates.slice();
        const description = e.features[0].properties.description;
        const address = e.features[0].properties.full_address;
        const name = e.features[0].properties.name;

        const html = "<h5 style='text-align: center;'>" + name + "</h5><p style='text-align: center'>" + address + "</p>";

        // Ensure that if the map is zoomed out such that multiple
        // copies of the feature are visible, the popup appears
        // over the copy being pointed to.
        while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
          coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
        }

        // Populate the popup and set its coordinates
        // based on the feature found.
        popup.setLngLat(coordinates).setHTML(html).addTo(this.map);
      });

      this.map.on("mouseleave", "places", () => {
        this.map.getCanvas().style.cursor = "";
        popup.remove();
      });

      this.map.flyTo({
        center: data.features[0].geometry.coordinates,
        essential: true, // this animation is considered essential with respect to prefers-reduced-motion
        zoom: 13,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
::v-deep .marker {
  //   background-image: url('mapbox-icon.png');
  color: green;
  background-size: cover;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  cursor: pointer;
}

::v-deep .center-marker {
  //   background-image: url('mapbox-icon.png');
  color: red;
  background-size: cover;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  cursor: pointer;
}

::v-deep .mapboxgl-marker {
  // width: 25px;
  // height: 25px;
  // border-radius: 50%;
  // border: 1px solid gray;
  // background-color: lightblue;
  // color: lightblue;
}

::v-deep .mapboxgl-popup {
  max-width: 400px;
  font: 12px/20px "Helvetica Neue", Arial, Helvetica, sans-serif;
}

.input-container {
  display: flex;
  flex-direction: column;
  width: 200px;
  margin: 50px auto;
  input {
    border-radius: 8px;
    border-radius: 8px;
    border: 1px solid #b0b0b0;
    height: 35px;
    margin-bottom: 20px;
    padding: 10px;
  }
  .btn {
    padding: 10px;
    border-radius: 8px;
    background-color: rgb(25, 131, 25);
    color: white;
  }
}
</style>



