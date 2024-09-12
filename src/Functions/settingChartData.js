import { convertDate } from "./convertDate"

export const settingChartData = (setChartData, coinPrices) => {
    setChartData({
        labels: coinPrices.map((price) => convertDate(price[0])),
        datasets: [{
            data: coinPrices.map((price) => new Date(price[1])),
            fill: true,
            borderColor: '#9c4dc7',
            backgroundColor: 'rgba(156, 77, 199, 0.1)',
            borderWidth: 2,
            tension: 0.25,
            pointRadius: 0
        }]
    })
}