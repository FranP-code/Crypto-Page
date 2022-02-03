const getCryptocurrencyData = async () => {

    try {
        
        let data = await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=30&order=gecko_desc")
        data = await data.json()

        return data
        
    } catch (error) {
        
        console.log(error);
    }
}

export default getCryptocurrencyData