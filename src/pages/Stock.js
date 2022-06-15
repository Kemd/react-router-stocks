import {useEffect, useState} from 'react'
import stocks from '../stocks-data'

const Stock = (props) => {

    const apikey = '62327e1aab76f927ab965fb16d631df9'
    const symbol = props.match.params.symbol
    // console.log(symbol)

    const url = `https://financialmodelingprep.com/api/v3/financial-statement-${symbol}-lists?apikey=${apikey}`
    console.log(url)

    const [ stock, setStock ] = useState(null)
    console.log(stock)

    const getStock = async () => {
        const response = await fetch(url)
        const data = await response.json()
        setStock(data)
    }

    useEffect(() => {
        getStock()
    }, [])

    const loaded = () => {
        return (
            <div>
                <h3>{stock.name}</h3>
            </div>
        )
    }

    return stock ? loaded() : <h1>Loading ...</h1>
}

export default Stock