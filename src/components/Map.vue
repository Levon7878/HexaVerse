<template>
  <div id="map" style="width: 100%; height: 300px; max-width: 451px"></div>
</template>

<script>
import "leaflet/dist/leaflet.css";
import L from "leaflet";

export default {
  name: "MapComponent",
  mounted() {
    const latitude = 40.16390669041036;
    const longitude = 44.513204626724836;

    const map = L.map("map").setView([latitude, longitude], 13);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {}).addTo(
      map
    );

    L.marker([latitude, longitude])
      .addTo(map)
      .bindPopup("Rootteam company")
      .openPopup();
  },
};
</script>


<style scoped>
.leaflet-bottom {
  display: none;
}
#map {
  box-shadow: 10px 10px 5px -3px rgba(64, 89, 161, 0.5);
  border: 3px solid aliceblue;
  border-radius: 17px;
}


</style>