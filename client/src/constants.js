const API_URL =
  process.env.NODE_ENV !== "development"
    ? process.env.REACT_APP_BASE_URL
    : "https://rent-n-roam.onrender.com";

export default API_URL;
