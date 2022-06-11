import React from 'react'
import stocks from '../stocks-data'
import {Link} from 'react-router-dom'

const Dashboard = (props) => {
  return (
    <div>
        {stocks.map((stock, idx) => {
            const { name, lastPrice, change, symbol } = stock

            return (
                <div className='stocks'>
                <Link key={idx} to={`/stocks/${symbol}`}>
                    <p>{name}</p>
                </Link>
                <p>{lastPrice}</p>
                        
                <p>{change}</p>

                </div> 
            )
        })}
    </div>
  )
}

export default Dashboard