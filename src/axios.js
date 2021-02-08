//  a promise based library to make requests(get, post) to any server.

import axios from "axios";

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3"
});

export default instance;