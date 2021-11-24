import Vuex from 'vuex'
import axios from 'axios';


//======================== AXIOS ========================//
const API_HOST = 'https://csqa.skyounet.com';
const API_AUTH_USERNAME = 'adminecom@skyou.com';
const API_AUTH_PASSWORD = 'test1234';

const AXIOS_BASIC_AUTH = {
    auth: {
        username: API_AUTH_USERNAME,
        password: API_AUTH_PASSWORD
    }
};
const AXIOS_BASIC_AUT = {};
const CREDENTIALS = {
    "username": "adminecom@skyou.com",
    "password": "test1234"
};
const axiosInstance = axios.create({
    withCredentials: true
});


//======================== SERVICE ========================//
const csapi = {
    auth: {
        login: async() => {
            let result = (await axiosInstance.post(`${API_HOST}/auth/login`, CREDENTIALS, AXIOS_BASIC_AUT)).data;
            return result;
        }
    },
    products: {
        getDetails: async( productId ) => {
            let result = (await axiosInstance.get(`${API_HOST}/product/center?productId=${productId}`, AXIOS_BASIC_AUT)).data;
            return result;
        }
    },
    categories: {
        list: async() => {
            let result = (await axiosInstance.get(`${API_HOST}/admin/pdef/metadata/categories`, AXIOS_BASIC_AUT)).data;
            return result.productCategories;
        }
    },
};



export default ({ app }, inject) => {
    inject('csapi', () => csapi);
}
