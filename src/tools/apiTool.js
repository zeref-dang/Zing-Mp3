import axios from "axios";
import { JsonTool } from "../tools";

const handleError = (error, callback) => {
    if (axios.isCancel(error)) {
    }
    else {
        callback(null);
    }
}

export class ApiTool {
       static get = (url, callback) => {
        const controller = new AbortController();
        let config = {
            signal: controller.signal,
        };
            axios
                .get(url, config)
                .then(function (response) {
                    setTimeout(() => {
                        callback(response.data);
                    }, 0);
                })
                .catch(function (error) {
                    handleError(error, callback)
                });
        return controller;
    };

    static queryGetFromJson = (url, body, callback) => {
        const controller = new AbortController();
        let query = JsonTool.convertToQueryString(body);
        let config = {
            signal: controller.signal,
        };
            axios
                .get(url + "?" + query, config)
                .then(function (response) {
                    setTimeout(() => {
                        callback(response.data);
                    }, 0);
                })
                .catch(function (error) {
                    handleError(error, callback)
                });
        return controller;
    };
    static post = (url, body, callback) => {
        const controller = new AbortController();
        let config = {
            signal: controller.signal,
        };
            axios
                .post(url, body, config)
                .then(function (response) {
                    setTimeout(() => {
                        callback(response.data);
                    }, 0);
                })
                .catch(function (error) {
                    handleError(error, callback)
                });
        return controller;
    };
     static put = (url, body, callback) => {
        const controller = new AbortController();
        let config = {
            signal: controller.signal,
        };
            axios
                .put(url, body, config)
                .then(function (response) {
                    setTimeout(() => {
                        callback(response.data);
                    }, 0);
                })
                .catch(function (error) {
                    handleError(error, callback)
                });
        return controller;
    };
    static delete = (url, callback) => {
        const controller = new AbortController();
        let config = {
            signal: controller.signal,
        };
            axios
                .delete(url, config)
                .then(function (response) {
                    setTimeout(() => {
                        callback(response.data);
                    }, 0);
                })
                .catch(function (error) {
                    handleError(error, callback)
                });
        return controller;
    };
}
