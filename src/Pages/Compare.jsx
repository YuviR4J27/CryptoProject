import React, { useEffect, useState } from 'react'
import Header from '../Components/Common/Header/Header'
import SelectCoins from '../Components/ComparePage/SelectCoins/SelectCoins'
import SelectDays from '../Components/Coins/SelectDays/SelectDays'
import { getCoinPrices } from '../Functions/getCoinPrices'
import { getCoinData } from '../Functions/getCoinData'
import { coinObj } from '../Functions/convertObject'
import Loader from '../Components/Common/Loader/Loader'
import List from '../Components/Dashboard/List/List'
import { get100Coins } from '../Functions/get100Coins'
import CoinInfo from '../Components/Coins/CoinInfo/CoinInfo'
import { settingChartData } from '../Functions/settingChartData'
import LineChart from '../Components/Coins/LineChart/LineChart'
import PriceToggle from '../Components/Coins/PriceType/PriceToggle'

function ComparePage() {
    const [allCoins, setAllCoins] = useState([])
    const [crypto1, setCrypto1] = useState('bitcoin')
    const [crypto2, setCrypto2] = useState('ethereum')
    const [days, setDays] = useState(30)
    const [crypto1Data, setCrypto1Data] = useState({})
    const [crypto2Data, setCrypto2Data] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const [priceType, setPriceType] = useState('prices')
    const [chartData, setChartData] = useState({})

    useEffect(() => {
        getData()
    }, [])


    async function getData() {
        setIsLoading(true)
        const coins = await get100Coins();
        if (coins) {
            setAllCoins(coins);
            const data1 = await getCoinData(crypto1)
            const data2 = await getCoinData(crypto2)
            coinObj(setCrypto1Data, data1)
            coinObj(setCrypto2Data, data2)
            if (data1 && data2) {
                const prices1 = await getCoinPrices(crypto1, days, priceType)
                const prices2 = await getCoinPrices(crypto2, days, priceType)
                settingChartData(setChartData, prices1, prices2)
                setIsLoading(false)
            }
        }
    }

    const handleDaysChange = async (e) => {
        setIsLoading(true)
        setDays(e.target.value)
        const coinPrices1 = await getCoinPrices(crypto1, e.target.value, priceType);
        const coinPrices2 = await getCoinPrices(crypto2, e.target.value, priceType);
        settingChartData(setChartData, coinPrices1, coinPrices2)
        setIsLoading(false)
    }
    const handlePriceTypeChange = async (event) => { //on toggle of price type i.e. between price, market_cap and total_volume update the price typestate and modify the chart data using this function
        setIsLoading(true)
        setPriceType(event.target.value)//we do this in last because sometimes state of this might not set if we do it in start leading to bug
        const coinPrices1 = await getCoinPrices(crypto1, days, event.target.value);
        const coinPrices2 = await getCoinPrices(crypto2, days, event.target.value);
        settingChartData(setChartData, coinPrices1, coinPrices2)
        setIsLoading(false)
    }

    const handleCoinChange = async (event, isCoin2) => { //set the coin 1 state
        setIsLoading(true)
        if (isCoin2) {
            setCrypto2(event.target.value)
            const coin2 = await getCoinData(event.target.value);
            coinObj(setCrypto2Data, coin2);
            const coinPrices1 = await getCoinPrices(crypto1, days, priceType);
            const coinPrices2 = await getCoinPrices(event.target.value, days, priceType);
            settingChartData(setChartData, coinPrices1, coinPrices2)
        } else {
            setCrypto1(event.target.value)
            const coin1 = await getCoinData(event.target.value);
            coinObj(setCrypto1Data, coin1);
            const coinPrices1 = await getCoinPrices(event.target.value, days, priceType);
            const coinPrices2 = await getCoinPrices(crypto2, days, priceType);
            settingChartData(setChartData, coinPrices1, coinPrices2)
        }
        setIsLoading(false)
    }

    return (
        <>
            <Header />
            {isLoading ? (<Loader />) : (
                <>
                    <div className='coins-days-select'>
                        <SelectCoins crypto1={crypto1} crypto2={crypto2} handleCoinChange={handleCoinChange} />
                        <SelectDays days={days} handleChange={handleDaysChange} noPTag={true} />
                    </div>
                    <div className='wrapper'>
                        <List coin={crypto1Data} />
                    </div>
                    <div className='wrapper'>
                        <List coin={crypto2Data} />
                    </div>
                    <div className="wrapper">
                        <PriceToggle priceType={priceType} handlePriceTypeChange={handlePriceTypeChange} />
                        <LineChart chartData={chartData} priceType={priceType} multiAxis={true} />
                    </div>
                    <CoinInfo heading={crypto1Data.name} desc={crypto1Data.desc} />
                    <CoinInfo heading={crypto2Data.name} desc={crypto2Data.desc} />
                </>
            )}
        </>
    )
}

export default ComparePage