import Vue from 'vue';
import Axios from 'axios';

class BaseApi {
    constructor() {
        // this.axiosConfig = {
        //     // baseURL: `/${window.apiPath}/`,
        //     baseURL: `http://127.0.0.1:8000/`,
        // };
        // console.log('axios config');
        // console.log(this.axiosConfig);
        // this.axios = Axios.create(this.axiosConfig);
    }

    /**
     * Construct & return the required headers
     */
    getHeaders() {
        return {
            Authorization: Vue.prototype.store.getters['auth/userToken'],
            'X-Requested-With': 'XMLHttpRequest',
            Accept: 'application/json',
        };
    }

    /**
     * @param resource - the resource url
     * @param queryParams - the query params
     */
    async get(resource, queryParams) {
        // console.log(resource)
        // console.log(queryParams)

        try {
            // const response = await this.axios({
            //     method: 'get',
            //     url: resource,
            //     params: queryParams,
            //     headers: this.getHeaders(),
            // })
            let url = window.location.origin;
            const response = await Axios.post(url + '/' + resource, queryParams)
            // console.log(response)

            return response.data
        } catch (error) {
            if (error.response.data.message === 'Unauthenticated.') {
                Vue.prototype.store.dispatch('auth/logout')
            } else {
                throw error
            }
        }
    }

    /**
     * @param resource - the resource url
     * @param postData - the post data
     */
    async post(resource, postData) {
        return this.axios({
            method: 'post',
            url: resource,
            data: postData,
            headers: this.getHeaders(),
        }).then((req) => req.data);
    }

    /**
     * @param resource - the resource url
     * @param postData - the post data
     */
    async patch(resource, postData) {
        return this.axios({
            method: 'patch',
            url: resource,
            data: postData,
            headers: this.getHeaders(),
        }).then((req) => req.data);
    }

    /**
     * @param resource - the resource url
     * @param queryParams - the query params
     */
    async delete(resource, queryParams, deleteData) {
        return this.axios({
            method: 'delete',
            url: resource,
            params: queryParams,
            data: deleteData,
            headers: this.getHeaders(),
        }).then((req) => req.data);
    }
}

export default BaseApi;
