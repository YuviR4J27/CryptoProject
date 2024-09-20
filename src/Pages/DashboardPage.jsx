import React, { useEffect, useState } from 'react'
import Header from '../Components/Common/Header/Header'
import TabsComponent from '../Components/Dashboard/Tabs/Tabs'
import Search from '../Components/Dashboard/Search/Search';
import PaginationControlled from '../Components/Dashboard/Pagination/Pagination';
import Loader from '../Components/Common/Loader/Loader';
import BackToTopBtn from '../Components/Common/BackToTop/BackToTopBtn';
import { get100Coins } from '../Functions/get100Coins';

function DashboardPage() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('')
  const [page, setpage] = useState(1)
  const [paginatedCoin, setPaginatedCoin] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const handlePageChange = (event, value) => {
    setpage(value);
    let startInd = (value - 1) * 10;
    setPaginatedCoin(coins.slice(startInd, startInd + 10))
  }

  const onSearch = (e) => {
    console.log(search);
    setSearch(e.target.value)
  }

  let filteredCoin = coins.filter(
    (item) => (
      item.name.toLowerCase().includes(search.toLocaleLowerCase())
      ||
      item.symbol.toLowerCase().includes(search.toLocaleLowerCase())
    ))

  useEffect(() => {
    getData();
  }, [])

  const getData = async () => {
    // fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1').then((res) => res.json()).then((data) => ()) //USING FETCH METHOD
    const myCoins = await get100Coins()
    if (myCoins) {
      setCoins(myCoins)
      setPaginatedCoin(myCoins.slice(0, 10))
      setIsLoading(false)
    }

  }
  return (
    <div>
      <Header />
      <BackToTopBtn />
      {isLoading ? (<Loader />) : (
        <div>

          <Search search={search} onSearch={onSearch} />
          <TabsComponent coins={search ? filteredCoin : paginatedCoin} />
          {!search && (
            <PaginationControlled page={page} handleChange={handlePageChange} />
          )}
        </div>

      )}


    </div>
  )
}

export default DashboardPage