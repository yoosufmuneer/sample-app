import axios from 'axios';

export default axios.create({
    baseURL: "http://apps.avantrio.xyz:8010/api/",
});