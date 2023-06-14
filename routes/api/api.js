import BaseApi from "./base-api";

class API extends BaseApi {
    constructor() {
        super();
    }

    mail(params) {
        // console.log(params)
        return this.get('send-mail', params);
    }

    mapbox(params) {
        return this.get('results', params)
    }
}

export default new API();