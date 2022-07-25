import axios from "axios"




export const requestWithToken = async ({
    token, method, api, route, data, params, signal
}) => {
    const config = {
        method,
        data,
        params,
        signal,
        url: `${api}/${route}`,
        headers: {
            'Authorization': `Bearer ${token}`,
        },
    }
    try {
        return await axios(config)
    } catch (err) {
        throw err
    }

}



