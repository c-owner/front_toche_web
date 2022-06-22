let isDev = true; // true : dev, false; prod

let config = {
    dev: {
        apiDomain: "https://tocheapi.heekng.com",
    },
    prod: {
        apiDomain: "https://tocheapi.heekng.com",
    },
}

function getConfig(key = 'apiDomain') {
    return isDev ? config.dev[key] : config.prod[key];
}

let apiDomain = getConfig('apiDomain')
let apiURL = `${getConfig('apiDomain')}/api/v1`;


export {apiURL, apiDomain};
