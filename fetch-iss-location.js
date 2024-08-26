async function fetchISSLocation() {
  try {
    // Fetch the ISS location
    let response = await fetch("http://api.open-notify.org/iss-now.json");
    let data = await response.json();

    let latitude = data.iss_position.latitude;
    let longitude = data.iss_position.longitude;

    // Convert the timestamp to a readable date and time in SAST
    let timestamp = data.timestamp;
    let date = new Date(timestamp * 1000);

    // Convert UTC time to SAST (UTC+2)
    let SASTOffset = 2 * 60 * 60 * 1000; // 2 hours in milliseconds
    let SASTDate = new Date(date.getTime() + SASTOffset);

    // Display the latitude, longitude, and time
    document.getElementById("latitude").textContent = latitude;
    document.getElementById("longitude").textContent = longitude;
    document.getElementById("date-time").textContent =
      SASTDate.toUTCString().replace("GMT", "SAST");

    // Fetch the country using reverse geocoding
    let geoResponse = await fetch(
      `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=25f8dfec7a454007898f6775eadf6d0e`
    );
    let geoData = await geoResponse.json();

    let country = geoData.results[0].components.country || "Over the Ocean";
    document.getElementById("country").textContent = country;
  } catch (error) {
    console.log(error);
  }
}

// Update the ISS location every 5 seconds
setInterval(fetchISSLocation, 5000);

// Fetch the location immediately when the page loads
fetchISSLocation();
