import React, {useState, useEffect} from 'react'
import stocks from '../stocks-data'

const Stock = ({match}) => {
    stocks.map((stock, idx) => {
        const symbol = match.params.symbol
        function handleClick() {
            return (
                stock.name[idx]
            )
        }
    })
}

export default Stock