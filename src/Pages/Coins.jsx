import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Header from '../Components/Common/Header/Header'
import Loader from '../Components/Common/Loader/Loader'
import { coinObj } from '../Functions/convertObject'
import List from '../Components/Dashboard/List/List'
import CoinInfo from '../Components/Coins/CoinInfo/CoinInfo'
import { getCoinData } from '../Functions/getCoinData'
import { getCoinPrices } from '../Functions/getCoinPrices'
import LineChart from '../Components/Coins/LineChart/LineChart'
import { convertDate } from '../Functions/convertDate'
import SelectDays from '../Components/Coins/SelectDays/SelectDays'
import { settingChartData } from '../Functions/settingChartData'
import PriceToggle from '../Components/Coins/PriceType/PriceToggle'

function CoinPage() {
    const { id } = useParams()
    const [isLoading, setIsLoading] = useState(true)
    const [coinData, setCoinData] = useState({})
    const [days, setDays] = useState(90)
    const [chartData, setChartData] = useState({})
    const [priceType, setPriceType] = React.useState('prices');

    useEffect(() => {
        if (id) {
            getData();
        }
    }, [id])

    async function getData() { //extract coin data and update the coinObj state and set chart data by extracting price and date
        setIsLoading(true)
        const coin = await getCoinData(id);
        if (coin) {
            coinObj(setCoinData, coin);
            const coinPrices = await getCoinPrices(id, days, priceType);
            console.log(coinPrices)
            if (coinPrices) {
                console.log("WOHOOOOO")
                settingChartData(setChartData, coinPrices)
                setIsLoading(false)
            }
        }

    }

    const handleDaysChange = async (event) => { //modify the chart data and time on change of days
        setIsLoading(true)
        const coinPrices = await getCoinPrices(id, event.target.value, priceType);
        if (coinPrices) {
            console.log("WOHOOOOO")
            settingChartData(setChartData, coinPrices)
            setIsLoading(false)
        }
        setDays(event.target.value);//we do this in last because sometimes state of this might not set if we do it in start leading to bug
    }

    
    const handlePriceTypeChange = async (event) => { //on toggle of price type i.e. between price, market_cap and total_volume update the price typestate and modify the chart data using this function
        setIsLoading(true)
        const coinPrices = await getCoinPrices(id, days, event.target.value);
        if(coinPrices) {
            settingChartData(setChartData, coinPrices)
            setIsLoading(false)
        }
        setPriceType(event.target.value)//we do this in last because sometimes state of this might not set if we do it in start leading to bug
    };

    return (
        <div>
            <Header />
            {isLoading ? (<Loader />) : (<>
                <div className='wrapper'>
                    <List coin={coinData} />
                </div>
                <div className="wrapper">
                    <SelectDays days={days} handleChange={handleDaysChange} />
                    <PriceToggle priceType={priceType} handlePriceTypeChange={handlePriceTypeChange}/>
                    <LineChart chartData={chartData} priceType={priceType}/>
                </div>
                <CoinInfo heading={coinData.name} desc={coinData.desc} />
            </>
            )}
        </div>
    )
}

export default CoinPage