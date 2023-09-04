<template>
  <div id="map" style="height: 400px; width: 100%;"></div>
</template>

<script>
export default {
  name: "LeafletMap.vue",
  props: {
    latitude: Number,
    longitude: Number,
    address: String,
  },
  mounted() {
    if (process.client) {
      const L = require("leaflet");
      require("leaflet-fullscreen");
      const myIconPath = require('../assets/icons/place_point.png');

      // Property For Map
      const map = L.map('map', {
        center: [this.latitude, this.longitude],
        zoom: 13,
        fullscreenControl: true,
        attributionControl: false,
        scrollWheelZoom: false,
      });

      // Property For Custom Icon
      const customIcon = L.icon({
        iconUrl: myIconPath,
        iconSize: [50, 50],
        iconAnchor: [29, 75],
        popupAnchor: [-3, -76]
      });

      // Map Style
      L.tileLayer("http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png", {
        attribution: '<a href="https://lider.az/">LIDER GROUP</a>'
      }).addTo(map);

      // POP-UP Style с кастомной иконкой
      L.marker([this.latitude, this.longitude], { icon: customIcon })
        .addTo(map)
        .bindPopup("<b>Ünvan: </b> <br>" + this.address);
    }
  }
}
</script>

<style scoped>
#map {
  border-radius: 5px;
}
</style>
