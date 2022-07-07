import BaseApi from "./base-api";

class API extends BaseApi {
    constructor() {
        super();
    }

    mail(params) {
        // console.log(params)
        return this.get('send-mail', params);
    }
}

export default new API();