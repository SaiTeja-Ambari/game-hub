import axios from "axios";

export default axios.create({
    baseURL : "https://api.rawg.io/api",
    params : {
        key : "9df571b6630f416da43888e2ccbaa5da"
    }
})