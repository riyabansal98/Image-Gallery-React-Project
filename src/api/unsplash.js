import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 35f924528a013ca87f4d546a7b27352553684b004644d4790e3dce7774f3f5c2'
    }

});