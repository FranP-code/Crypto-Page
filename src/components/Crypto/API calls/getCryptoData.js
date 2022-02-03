import moment from "moment"

const getCryptoData = async (cryptoID) => {
        
    try {
        
        let today = moment().format('l').split('/')
            today = `${today[1]}-${today[0]}-${today[2]}`

        const requestData = await fetch(`https://api.coingecko.com/api/v3/coins/${cryptoID}/history?date=${today}`)
        const data = await requestData.json()
        return data
    
    } catch (error) {
        console.log(error);
    }
}

export default getCryptoData;
