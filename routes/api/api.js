import BaseApi from "./base-api";

class API extends BaseApi {
    constructor() {
        super();
    }

    test() {
        console.log('in test()');
        return this.get('send-mail');
    }
}

export default new API();