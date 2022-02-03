import moment from "moment"

const getDates = (days) => {

    let result = []

    for (let i = 0; i < days; i++) {
        
        const day = moment().subtract(i, 'days').format('DD-MM-YY')
        result.push(day)
    }

    return result.reverse()
}

export default getDates