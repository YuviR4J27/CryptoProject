import axios from "axios"
// coin1 = https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&accept:%20application/json&x-cg-demo-api-key:%20CG-ssuPSwWDgtpyGdEVEfNfnEYE

// coin2 = https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false


export const get100Coins =  () => {
    const myCoins = axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false")
      .then((response) => {
        console.log("RESPONSE >>", response.data)
        return response.data
      })
      .catch((error) => {
        console.log(error)
      }
      )

      return myCoins
}