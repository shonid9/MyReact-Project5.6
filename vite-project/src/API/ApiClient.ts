import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'https://monkfish-app-z9uza.ondigitalocean.app/bcard2',
    });

export default apiClient;