// index.js 
// Server side api calls
import { queryParameters } from './fetch'

const RESOURCE_ROUTE = {
    SOURCES: 'sources'
}

function getApiUrl(route, parameters){
    const currentLocation = window.location
    const baseApiUrl = `${currentLocation.protocol}//${currentLocation.host}/api`
    return `${baseApiUrl}/${route}?${queryParameters(parameters)}`
}


export const fetchSourceFiles = (path) => {
    return fetch(getApiUrl(RESOURCE_ROUTE.SOURCES, { path }))
        .then(response => response.text().then(text => ({
            status: response.status,
            statusText: response.statusText,
            headers: response.headers,
            body: text,
        })))
        .then(({ status, statusText, headers, body }) => {
            let json;
            try {
                json = JSON.parse(body);
            } catch (e) {
                // not json, no big deal
            }
            if (status < 200 || status >= 300) {
                return Promise.reject(new HttpError((json && json.message) || statusText, status));
            }
            return { status, headers, body, json };
        });
}