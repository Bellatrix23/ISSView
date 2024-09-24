# 🌍 ISS Location Tracker

This project tracks and displays the current location of the International Space Station (ISS) in real-time. Using data from external APIs, the application fetches the latitude, longitude, and reverse-geocoded country location of the ISS. The webpage is styled with a sleek video background, showing live updates every 5 seconds.

## Project Features 🚀
- **Real-time ISS Location**: Fetches and displays the latitude and longitude of the ISS, updated every 5 seconds.
- **Reverse Geocoding**: Converts the latitude and longitude into the country name, showing whether the ISS is flying over land or the ocean.
- **Time Zone Conversion**: Displays the current date and time in South Africa Standard Time (SAST).
- **Responsive Design**: The webpage includes a responsive design with a video background and centered content, providing a visually appealing and user-friendly experience.

## Technologies Used 🛠️
- **Languages**: JavaScript, HTML, CSS
- **APIs**: 
  - [Open Notify API](http://api.open-notify.org/iss-now.json) for fetching the ISS position.
  - [OpenCage Geocoding API](https://opencagedata.com/) for reverse geocoding the ISS coordinates.
- **Libraries**: Fetch API for making asynchronous HTTP requests.

## How to Install & Run Locally ⚙️

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Bellatrix23/ISSView
   ```

2. **Navigate to the project directory**:
   ```bash
   cd ISS View
   ```

3. **Open the `index.html` file**:
   - You can open the file directly in your browser by double-clicking `index.html` or serving the project locally using a tool like Live Server in VSCode.

## How It Works 💻

- The project uses the **Open Notify API** to get the current position of the ISS (latitude and longitude).
- This data is then reverse-geocoded using the **OpenCage Geocoding API** to determine the country over which the ISS is flying.
- The page also calculates and displays the current time in South Africa Standard Time (SAST).
- The **ISS location data** refreshes every 5 seconds to provide real-time updates.


## Future Improvements ✨
- Add more detailed information about the ISS (e.g., altitude, speed).
- Integrate additional features like tracking the ISS's trajectory on a map.
- Improve error handling for API failures or location retrieval issues.

## Credits 🙌
This project was built by **Zoë Bell** as part of a coding challenge to apply real-time data fetching and API integration. Special thanks to:
- **Open Notify API** for providing ISS location data.
- **OpenCage Geocoding API** for converting coordinates into readable locations.
