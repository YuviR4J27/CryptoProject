import axios from "axios"

export const getCoinData = (id) => {
    const myData = axios.get(`https://api.coingecko.com/api/v3/coins/${id}?x-cg-demo-api-key:%20CG-ssuPSwWDgtpyGdEVEfNfnEY`)
        .then((response) => {
            return response.data
        })
        .catch((error) => {
            console.log(error)
        })

    return myData;
}