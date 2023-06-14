<template>
  <div>
    <div id="map" ref="map" style="height: 500px"></div>
    <!-- <div class="input-container">
      <input type="text" v-model="inputText" />
      <div class="btn" @click="search()">Search</div>
    </div> -->

    <!-- <form>
      <input name="address" placeholder="Address" type="text" autocomplete="address-line1" />
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
import Mapbox from "mapbox-gl";
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
  },

  data() {
    return {
      mapboxAccessToken:
        "pk.eyJ1IjoibWFyaW9mZXJuYW5kZXoiLCJhIjoiY2xpa3Z0ZGZ0MGY2dzNqcDl0ejlobHZ5ciJ9.M1d7TXJTIvlTcMtk6B7mhg",
      mapStyle: "mapbox://styles/mapbox/streets-v10",
      coordinates: [0.0, 0.0], // long, lat
      zoom: 0,
      marker: {
        color: "black",
      },
      map: null,
      coords: {
        lat: null,
        long: null,
      },
      inputText: null,
    };
  },
  watch: {
    coords: {
      deep: true,

      handler() {
        if (this.coords.lat && this.coords.long) {
          this.getData();
        }
      },
    },
  },
  created() {},
  mounted() {
    // const script = document.getElementById("search-js");
    // script.onload = function () {
    //   mapboxsearch.autofill({
    //     accessToken:
    //       "pk.eyJ1IjoibWFyaW9mZXJuYW5kZXoiLCJhIjoiY2xpa3Z0ZGZ0MGY2dzNqcDl0ejlobHZ5ciJ9.M1d7TXJTIvlTcMtk6B7mhg",
    //   });
    // };
    this.createMap();
    // const xhr = new XMLHttpRequest();
    // xhr.open("GET", "https://api.ipify.org?format=json", true);
    // xhr.getResponseHeader("Content-type", "application/json");
    // xhr.send();
    // this.getCoords();
    this.getData();
  },
  methods: {
    // search() {
    //   //https://api.mapbox.com/search/searchbox/v1/suggest?q={search_text}

    //   var long = -79.3817871057276;
    //   var lat = 43.65626547595187;
    //   axios
    //     .get(
    //       `https://api.mapbox.com/search/searchbox/v1/suggest?1=coffee?access_token=pk.eyJ1IjoibWFyaW9mZXJuYW5kZXoiLCJhIjoiY2xpa3Z0ZGZ0MGY2dzNqcDl0ejlobHZ5ciJ9.M1d7TXJTIvlTcMtk6B7mhg&language=en&limit=5&proximity=${long},${lat}`
    //     )
    //     .then((response) => {
    //       console.log(response.data);
    //     });
    // },
    async getData() {
      console.log("Axios Call");
      // setTimeout(() => {
      // console.log(
      //   `https://api.mapbox.com/search/searchbox/v1/category/coffee?access_token=pk.eyJ1IjoibWFyaW9mZXJuYW5kZXoiLCJhIjoiY2xpa3Z0ZGZ0MGY2dzNqcDl0ejlobHZ5ciJ9.M1d7TXJTIvlTcMtk6B7mhg&language=en&limit=5&proximity=${this.long},${this.lat}`
      // );
      // for testing --- toronto downtown long and lat since colombia doesn't seem to work. Can try VPN to test out north america

      axios
        // .get(
        //   `https://api.mapbox.com/search/searchbox/v1/category/coffee&language=en&proximity=${this.coords.long},${this.coords.lat}&limit=5&session_token=0d13bd56-5b00-4548-8188-92f262320222&access_token=pk.eyJ1IjoibWFyaW9mZXJuYW5kZXoiLCJhIjoiY2xpa3Z0ZGZ0MGY2dzNqcDl0ejlobHZ5ciJ9.M1d7TXJTIvlTcMtk6B7mhg`

        // )
        .get(
          `https://api.mapbox.com/search/searchbox/v1/category/${this.category}?access_token=pk.eyJ1IjoibWFyaW9mZXJuYW5kZXoiLCJhIjoiY2xpa3Z0ZGZ0MGY2dzNqcDl0ejlobHZ5ciJ9.M1d7TXJTIvlTcMtk6B7mhg&language=en&limit=5`
        )
        .then((response) => {
          // console.log(response.data);
          console.log("retrieved successfully");
          console.log(response.data);

          this.addMarkers(response.data);
        });
      // }, 5000);
    },

    async getCoords() {
      console.log("Getting Coords");
      if (navigator.geolocation) {
        return await navigator.geolocation.getCurrentPosition(this.getPosition);
      }
      return null;
    },

    getPosition(position) {
      this.coords.lat = position.coords.latitude;
      this.coords.long = position.coords.longitude;

      console.log("lat: " + this.coords.lat);
      console.log("long: " + this.coord.long);
      // testing downtown toronto
      // this.coords.long = -79.3817871057276;
      // this.coords.lat = 43.65626547595187;
    },

    createMap() {
      console.log("Creating Map");
      mapboxgl.accessToken = this.mapboxAccessToken;

      // init the map
      this.map = new mapboxgl.Map({
        container: "map",
        style: "mapbox://styles/mapbox/streets-v10",
        minzoom: 10,
        center: [-74.0073, 40.7124], // Manhattan
        zoom: 10,
      });
      setTimeout(() => {
        this.map.resize();
      }, 100);
    },

    addMarkers(data) {
      for (const feature of data.features) {
        // create a HTML element for each feature
        const el = document.createElement("div");
        el.className = "marker";

        // make a marker for each feature and add to the map
        new Mapbox.Marker(el).setLngLat(feature.geometry.coordinates).addTo(this.map);
      }

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
  color: red;
  background-size: cover;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  cursor: pointer;
}

::v-deep .mapboxgl-marker {
  width: 25px;
  height: 25px;
  border-radius: 50%;
  border: 1px solid gray;
  background-color: lightblue;
  color: lightblue;
}
::v-deep .mapboxgl-canvas {
  // height: 700px !important;
  // width: auto !important;
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



