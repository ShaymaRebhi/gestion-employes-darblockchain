import axios from "axios";


//initializes axios with HTTP base Url and headers.

export default axios.create({
    baseURL: "http://localhost:4000",
    headers: {
        "Content-type": "application/json"
    }
});
