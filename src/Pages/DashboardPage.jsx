import React, { useEffect, useState } from 'react'
import Header from '../Components/Common/Header/Header'
import TabsComponent from '../Components/Dashboard/Tabs/Tabs'
import axios from 'axios'

function DashboardPage() {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    // fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1').then((res) => res.json()).then((data) => ()) //USING FETCH METHOD

    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&accept:%20application/json&x-cg-demo-api-key:%20CG-ssuPSwWDgtpyGdEVEfNfnEYE')
      .then((response) => {
        console.log("RESPONSE >>", response.data)
        if (response) {
          setCoins(response.data)
        }
      })
      .catch((error) => (console.log(error)))

  }, [])
  return (
    <div>
      <Header />
      <TabsComponent coins = {coins} />
    </div>
  )
}

export default DashboardPage