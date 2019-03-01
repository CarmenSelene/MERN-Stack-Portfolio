import axios from "axios";

const BASEURL = "https://api.giphy.com/v1/gifs/search?q=";
const APIKEY = "&api_key=dc6zaTOxFJmzC&limit=10";
const config = {
  headers: { 'accept': 'image/*' }
};

// Export an object with a "search" method that searches the Giphy API for the passed query
export default {
  search: function (query) {
    return axios.get(BASEURL + query + APIKEY, config)
  }
};
