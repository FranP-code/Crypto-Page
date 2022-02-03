const getCryptoPrice = async (days, cryptoID) => {

    if (typeof(days) === 'number') {

        days -= 1
    }

    try {
        
        const requestData = await fetch(`https://api.coingecko.com/api/v3/coins/${cryptoID}/market_chart?vs_currency=usd&days=${days}&interval=daily`)
        const data = await requestData.json()

        return data.prices.map(arr => {
            return arr[1]
        })

    } catch (error) {
        console.log(error);
    }
}

export default getCryptoPrice