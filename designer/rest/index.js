// index.js 
// Server side api calls
import { queryParameters, fetchJson } from './fetch'

const RESOURCE_ROUTE = {
    SOURCE_DIRECTORY: 'directory',
    SROUCE_CODE: 'source_code'
}

function getApiUrl(route, parameters){
    const currentLocation = window.location
    const baseApiUrl = `${currentLocation.protocol}//${currentLocation.host}/api`
    return `${baseApiUrl}/${route}?${queryParameters(parameters)}`
}


export const fetchSourceDirectory = (path) => {
    return fetchJson(getApiUrl(RESOURCE_ROUTE.SOURCE_DIRECTORY, { path }))
}

export const fetchSourceCode = (path) => {
    return fetchJson(getApiUrl(RESOURCE_ROUTE.SROUCE_CODE, { path }))
}

export const saveSourceCode = (path, code) => {
    // let formData = new FormData()
    // formData.append("code", code)
    return fetchJson(getApiUrl(
                RESOURCE_ROUTE.SROUCE_CODE, { path }),
                {
                    method: 'POST',
                    body: JSON.stringify({ "code": code })
                })
}