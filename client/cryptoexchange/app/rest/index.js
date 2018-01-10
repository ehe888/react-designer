// index.js 
// Server side api calls
import { queryParameters, fetchJson } from './fetch'
import urljoin from 'url-join'

const RESOURCE_ROUTE = {
    LOGIN: 'account/login',
    ACCOUNT_REGISTER: 'account/register'
}

function getApiUrl(route, parameters){
    // const currentLocation = window.location
    // const baseApiUrl = `${currentLocation.protocol}//${currentLocation.host}/api`
    return urljoin(API_URL, route, `?${queryParameters(parameters)}`)
}


export const accountLogin = (payload) => {
    return fetchJson(getApiUrl(RESOURCE_ROUTE.LOGIN, { }), 
            {
                method: 'POST',
                body: JSON.stringify({ "payload": payload })
            })
}

// export const fetchSourceCode = (path) => {
//     return fetchJson(getApiUrl(RESOURCE_ROUTE.SROUCE_CODE, { path }))
// }

// export const saveSourceCode = (path, code) => {
//     // let formData = new FormData()
//     // formData.append("code", code)
//     return fetchJson(getApiUrl(
//                 RESOURCE_ROUTE.SROUCE_CODE, { path }),
//                 {
//                     method: 'POST',
//                     body: JSON.stringify({ "code": code })
//                 })
// }