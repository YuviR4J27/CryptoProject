import axios from "axios";
// prices = https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${days}&interval=daily&precision=full?x-cg-demo-api-key:%20CG-ssuPSwWDgtpyGdEVEfNfnEYE

export const getCoinPrices = (id, days, type) => {
    const prices = axios.get(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${days}&interval=daily`)
        .then((response) => {
            if (response.data) {
                console.log("Prices>>>", response.data);
                if (type == "market_caps") {
                  return response.data.market_caps;
                } else if (type == "total_volumes") {
                  return response.data.total_volumes;
                } else {
                  return response.data.prices;
                }
              }
        })
        .catch((error) => {
            console.log(error)
        })

    return prices;
}