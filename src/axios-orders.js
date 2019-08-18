import axios from 'axios';

const intance = axios.create({
    baseURL: 'https://burger-react-c13b3.firebaseio.com/'
});

export default intance;