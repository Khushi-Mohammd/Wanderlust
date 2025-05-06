const leafletCoords = [
  listing.geometry.coordinates[1],
  listing.geometry.coordinates[0],
];

const map = L.map("map").setView(leafletCoords, 9);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 18,
  attribution: "© OpenStreetMap contributors",
}).addTo(map);

L.marker(leafletCoords)
  .addTo(map)
  .bindPopup(
    `<h4>${listing.title}</h4><p>Exact Location will be provided after booking</p>`
  )
  .openPopup();
