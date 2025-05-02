//const merge = require("lodash/merge");
import merge from 'lodash/merge'

if (typeof document !== 'undefined') {
    throw new Error('Do not import config.js from inside the client-side code. !!!!!!');
}

const isDev = process.env.ENVIRONMENT !== 'prod' ? true : false;

const prodConfig = {
    dev: isDev,
    environment: process.env.ENVIRONMENT,
    baseUrl: process.env.BASE_URL,
    db: {
        host: "127.0.0.1",
        user: "event_agency",
        password: "event_agency",
        port: 3306
    }
}

let localConfig = {};

if (isDev) {
    try {
        localConfig = require("./config.local.ts");
    } catch (ex) {
        console.log("ex", ex);
        console.log("config.local does not exist.");
    }
}
const config = merge(prodConfig, localConfig ?? {});
export default config
//module.exports = merge(prodConfig, localConfig ?? {});