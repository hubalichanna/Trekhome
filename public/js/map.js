
const axios = require('axios');

async function geocodeLocation(location, country) {
  const query = `${location}, ${country}`;
  const url = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(query)}&format=json&limit=1`;

  try {
    const response = await axios.get(url, {
      headers: {
        'User-Agent': 'YourAppName/1.0 (your.email@example.com)' // Required by Nominatim
      }
    });

    if (response.data.length === 0) {
      return null;
    }

    const place = response.data[0];
    return {
      type: 'Point',
      coordinates: [parseFloat(place.lon), parseFloat(place.lat)]
    };
  } catch (err) {
    console.error("Geocoding failed:", err.message);
    return null;
  }
}

module.exports = geocodeLocation;
