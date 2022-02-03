const getCryptoPrices = async (data) => {

    try {
      
        let requestData = await fetch(`https://api.coingecko.com/api/v3/coins/${data.id}/market_chart?vs_currency=usd&days=6&interval=daily`)
        requestData = await requestData.json()

        return requestData.prices

    } catch (error) {
        console.log(error)
    }
}

export default getCryptoPrices